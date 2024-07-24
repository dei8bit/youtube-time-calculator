<script>
    import { fade } from "svelte/transition";
    
    export let data
    const apiKey = data.yt_apiKey
    
    // COMPONENTS:
    import ButtonVelocity from "../components/ButtonVelocity.svelte";
    import Shorcuts from "../components/shorcuts.svelte";

    //VARIABLES:
    let thumbnailURL;
    let inputURL = "";
    let hours = "";
    let minutes = "";
    let seconds = "";
    let hoursVideo;
    let minutesVideo;
    let secondsVideo;
    let finalTime = "FINAL TIME";
    let timeInSeconds = "";

    //BOOLEANS:
    let decision = undefined; // define cuando cambia la UI de los resultados finales
    let availability = false; // setea la disponibilidad cuando hay al menos un valor en los inputs

    $: {
        hours = hours.replace(/\D/g, "");
    }
    $: {
        minutes = minutes.replace(/\D/g, "");
    }
    $: {
        seconds = seconds.replace(/\D/g, "");
    }

    $: {
        if (hours === "" && minutes === "" && seconds === "") {
            availability = true;
        } else {
            availability = false;
        }
    }

    $: {
        timeInSeconds = hours * 3600 + minutes * 60 + seconds * 1;
    }

    //FUNCIONES:

    //Esta funcion permite representar horas minutos y segundos en formato 00:00:00
    function formaterTime(segundos) {
        // Calcular las horas, minutos y segundos
        var horas = Math.floor(segundos / 3600);
        var minutos = Math.floor((segundos % 3600) / 60);
        var segundos = segundos % 60;
        // Formatear las horas, minutos y segundos
        var horasFormateadas = horas < 10 ? "0" + horas : horas;
        var minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
        var segundosFormateados = segundos < 10 ? "0" + segundos : segundos;
        // Devolver el tiempo en formato HH:MM:SS
        return (
            horasFormateadas +
            ":" +
            minutosFormateados +
            ":" +
            segundosFormateados
        );
    }

    //Esta funcion determina que calculo se aplica dependiendo la velocidad que tenga el boton.
    function handleButtonClick(event) {
        let velocidad = event.detail;
        finalTime = Math.round(timeInSeconds / velocidad);
        decision = finalTime > timeInSeconds;
    }

    // esta funcion llama a la funcion reset cuando se dispara el shortcut shift + r
    function handleResetShortcut(event) {
        // Verificar si se presionó Shift + R
        if (event.shiftKey && event.key === "R") {
            console.log("Shortcut: reset");
            reset();
        }
    }

    // Esta funcion permite calcular el tiempo final y la decision a partir de algun shortcut ejecutado
    function handleKeyUp(event) {
        if (event.shiftKey) {
            const keyActions = {
                Digit1: "1",
                Numpad1: "1",
                Digit2: "2",
                Numpad2: "2",
                Digit3: "3",
                Numpad3: "3",
                Digit4: "4",
                Numpad4: "4",
                Digit5: "5",
                Numpad5: "5",
                Digit6: "6",
                Numpad6: "6",
                Digit7: "7",
                Numpad7: "7",
            };
            const velocities = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75, 2];

            const keyAction = keyActions[event.code];
            if (keyAction) {
                finalTime = Math.round(
                    timeInSeconds / velocities[keyAction - 1],
                );
                decision = finalTime > timeInSeconds;
            }
        }
    }
    // Esta funcion reinicia todos los inputs cuando se clickea en el boton reset.
    function reset() {
        hours = "";
        minutes = "";
        seconds = "";
        finalTime = "FINAL TIME";
        decision = undefined;
        inputURL = "";
    }
    // esta funcion impide que se escriban mas de dos digitos en los inputs de tiempo e impide que sean mayores a 59
    function validateInput(event, max) {
        let val = event.target.value;

        if (val.length > 1) {
            event.target.value = val.slice(0, 2); // Solo conserva los primeros dos caracteres
        }

        // Convierte el valor a un entero
        let intValue = parseInt(val);

        if (intValue < 0) {
            event.target.value = 0;
        } else if (intValue > max) {
            event.target.value = max;
        }
    }

    
    // Función para convertir la duración de formato ISO 8601 a un formato más legible
    function convertDuration(duration) {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

        hoursVideo = (match[1] || "0").replace("H", "");
        minutesVideo = (match[2] || "00").replace("M", "");
        secondsVideo = (match[3] || "00").replace("S", "");

        hours = hoursVideo;
        minutes = minutesVideo;
        seconds = secondsVideo;
        return `${hoursVideo}:${minutesVideo}:${secondsVideo}`;
    }

    // esta funcion se ejecuta cuando se ingresa una url en el input, recuperando la duracion del video y su thumbnail.
    function handleURL(e) {
        const youtubeUrl = e.target.value;
        const videoId = youtubeUrl.split("v=")[1]; // recupera el id del video el cual esta despues de los caracteres "v="
        fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`,
        )
            .then((response) => response.json())
            .then((data) => {
                // Extraer la duración del video en formato ISO 8601
                const duration = data.items[0].contentDetails.duration;

                // Extraer la URL de la imagen en miniatura del video
                thumbnailURL = data.items[0].snippet.thumbnails.standard.url;

                // Convertir la duración a un formato más legible
                const formattedDuration = convertDuration(duration);

            })
            .catch(
                (error) =>
                    console.error(
                        "Error al obtener la duración del video:",
                        error,
                    ),
                (thumbnailURL = ""),
            );
    }


    // funcion para seleccionar toda la url cuando se clickea en el input una vez que hay una url ingresada
    function selectAllText(e) {
        e.target.select();
    }

    // funcion para setear el tiempo del video a los campos cuando se da click en el thumbnail en caso de que se hayan modificado los inputs
    function handleClickThumbnail() {
        hours = hoursVideo;
        minutes = minutesVideo;
        seconds = secondsVideo;
    }
</script>



<svelte:window on:keydown={handleResetShortcut} on:keydown={handleKeyUp} />


<section>
    {#if thumbnailURL}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
            in:fade={{ duration: 2000 }}
            on:click={handleClickThumbnail}
            src={thumbnailURL}
            alt="miniatura de la imagen del video obtenido en la URL ingresada en el campo input del formulario"
        />
    {:else}
        <img src={thumbnailURL} alt="" />
    {/if}
    <input
        on:click={selectAllText}
        bind:value={inputURL}
        on:input={handleURL}
        class="urlInput"
        type="text"
        placeholder="URL"
    />
    <div>
        <input
            class="timeInputs"
            on:input={(event) => validateInput(event, 59)}
            bind:value={hours}
            type="text"
            placeholder="hours"
        />
        <input
            class="timeInputs"
            on:input={(event) => validateInput(event, 59)}
            bind:value={minutes}
            type="text"
            placeholder="minutes"
        />
        <input
            class="timeInputs"
            on:input={(event) => validateInput(event, 59)}
            bind:value={seconds}
            type="text"
            placeholder="seconds"
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <svg
            on:click={reset}
            width="24px"
            height="24px"
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                fill="none"
                fill-rule="evenodd"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                transform="matrix(0 1 1 0 2.5 2.5)"
            >
                <path
                    d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"
                />
                <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
            </g>
        </svg>
    </div>

    {#if !(hours != 0 || minutes != 0 || seconds != 0)}
        <h3>...</h3>
    {:else}
        <h3>
            {hours > 9 ? `${hours}` : `0${hours || 0}`}:{minutes > 9
                ? `${minutes}`
                : `0${minutes || 0}`}:{seconds > 9
                ? `${seconds}`
                : `0${seconds || 0}`}
        </h3>
    {/if}

    <div>
        <ButtonVelocity
            {availability}
            on:velocityBtnClick={handleButtonClick}
            velocity={0.25}
        />
        <ButtonVelocity
            {availability}
            on:velocityBtnClick={handleButtonClick}
            velocity={0.5}
        />
        <ButtonVelocity
            {availability}
            on:velocityBtnClick={handleButtonClick}
            velocity={0.75}
        />
        <ButtonVelocity
            {availability}
            on:velocityBtnClick={handleButtonClick}
            velocity={1.25}
        />
        <ButtonVelocity
            {availability}
            on:velocityBtnClick={handleButtonClick}
            velocity={1.5}
        />
        <ButtonVelocity
            {availability}
            on:velocityBtnClick={handleButtonClick}
            velocity={1.75}
        />
        <ButtonVelocity
            {availability}
            on:velocityBtnClick={handleButtonClick}
            velocity={2}
        />
    </div>

    <div class="finalTimeContainer">
        {#if decision === undefined}
            <h4 class="initialClass final_timeSkeleton">
                {finalTime}
            </h4>
        {:else if !decision}
            <div class="finalTime">
                <h4 class="win">FINAL TIME</h4>
                <div class="result">
                    <h5 class="finalTimeResult win">
                        {formaterTime(finalTime)}
                    </h5>
                </div>
            </div>
        {:else}
            <div class="finalTime">
                <h4 class="lose">FINAL TIME</h4>
                <div class="result">
                    <h5 class="finalTimeResult lose">
                        {formaterTime(finalTime)}
                    </h5>
                </div>
            </div>
        {/if}

        {#if decision === undefined}
            <p class="initialClass">time lost or win</p>
        {:else if !decision}
            <p class="vibrate win">
                {timeInSeconds - finalTime < 60
                    ? `${timeInSeconds - finalTime} seconds win ⌛`
                    : ` ${Math.round((timeInSeconds - finalTime) / 60)} minutes win ⌛ `}
                <!-- {timeInSeconds - finalTime} seconds win ⌛ -->
            </p>
        {:else}
            <p class="vibrate lose">
                {timeInSeconds - finalTime < -60
                    ? ` ${Math.round((timeInSeconds - finalTime) / 60)} minutes lose ⏳ `
                    : `${timeInSeconds - finalTime} seconds lose ⏳`}
                <!-- {timeInSeconds - finalTime} seconds lose ⏳ -->
            </p>
        {/if}
    </div>
</section>
<Shorcuts />


<footer class="center">
    <a href="https://www.buymeacoffee.com/dei8bit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
    <h4>made with love by: <a target="_blank" href="https://github.com/dei8bit">dei8bit</a></h4>
</footer>

<style>
    .center{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 12px;
        gap: 10px;
        position: relative;
        min-width: 500px;
        max-width: 600px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        background: linear-gradient(
            90deg,
            rgba(252, 68, 189, 0.6) 0%,
            rgba(224, 216, 17, 0.492) 54.5%,
            rgba(0, 185, 96, 0.6) 100%
        );
        border: 1px solid rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(8px);
        border-radius: 16px;
    }

    h3 {
        font-size: 30px;
        color: #5b8be9;
        margin: 0;
        user-select: none;
    }

    img {
        position: relative;
        border-radius: 12px;
        margin: 4px;
        height: 120px;
        cursor: pointer;
        transition: 0.2s;
        aspect-ratio: 4/3;
    }
    img:hover {
        opacity: 0.8;
    }

    .finalTimeContainer p {
        display: flex;
        flex-direction: column;
        min-width: 150px;
        align-items: center;
        line-height: 0;
    }

    .final_timeSkeleton {
        display: flex;
        align-items: center;
        user-select: none;
        justify-content: center;
        min-width: 140px;
        max-width: 280px;
        min-height: 46px;
        width: 130px;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        background: linear-gradient(
            90deg,
            rgba(240, 109, 148, 0.438) 0%,
            rgba(81, 68, 222, 0.36) 100%
        );
        mix-blend-mode: normal;
        box-shadow: inset 0px 4px 4px rgba(46, 3, 72, 0.5);
        border-radius: 12px;
    }

    .finalTime {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px;
        width: 130px;
        backdrop-filter: blur(5.9px);
        -webkit-backdrop-filter: blur(5.9px);
        background: linear-gradient(
            90deg,
            rgba(240, 109, 148, 0.438) 0%,
            rgba(81, 68, 222, 0.36) 100%
        );
        mix-blend-mode: normal;
        box-shadow: inset 0px 4px 4px rgba(46, 3, 72, 0.5);
        border-radius: 12px;
    }

    .finalTime h4 {
        font-weight: 100;
        font-size: 20px;
        margin: 3px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
    }

    .finalTimeResult {
        color: black;
        font-size: 30px;
        font-weight: 100;
        padding: 0;
        margin: 0;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
        -webkit-text-stroke-width: 1px;
    }

    .result {
        display: flex;
    }

    .initialClass {
        color: black;
        opacity: 0.6;
        font-size: 16px;
        font-weight: 600;
        text-shadow: 0px 4px 4px rgba(17, 8, 41, 0.6);
    }

    .lose {
        text-shadow:
            0px 0px 5px #df3618,
            0px 0px 5px #df3618,
            0px 0px 5px #df3618;
        color: rgb(255, 255, 255);
    }

    .win {
        text-shadow:
            0px 0px 5px #4dd431,
            0px 0px 5px #4dd431,
            0px 0px 5px #4dd431;
        color: rgb(255, 255, 255);
    }

    /* INPUTS */

    input {
        height: 30px;
        text-align: center;
        font-size: 16px;
        padding: 4px;
        cursor: pointer;
        border: none;
        background: #90e0b871;
        mix-blend-mode: multiply;
        box-shadow: inset 0px 4px 4px rgba(46, 3, 72, 0.5);
        border-radius: 16px;
        transition: all 0.5s;
        opacity: 0.7;
    }

    input:hover {
        opacity: 1;
    }
    input:focus-visible {
        outline: none;
    }
    input:focus {
        opacity: 1;
    }

    .timeInputs {
        width: 70px;
    }

    .urlInput {
        min-width: 320px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
    }

    .vibrate {
        -webkit-animation: vibrate 2s linear infinite both;
        animation: vibrate 2s linear infinite both;
    }

    @-webkit-keyframes vibrate {
        0% {
            -webkit-transform: translate(0);
            transform: translate(0);
        }
        20% {
            -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
        }
        40% {
            -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
        }
        60% {
            -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
        }
        80% {
            -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
        }
        100% {
            -webkit-transform: translate(0);
            transform: translate(0);
        }
    }
    @keyframes vibrate {
        0% {
            -webkit-transform: translate(0);
            transform: translate(0);
        }
        20% {
            -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
        }
        40% {
            -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
        }
        60% {
            -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
        }
        80% {
            -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
        }
        100% {
            -webkit-transform: translate(0);
            transform: translate(0);
        }
    }
    svg {
        width: 40px;
        transition: all 3s;
        cursor: pointer;
    }
    svg:hover {
        transform: rotate(-1080deg);
    }

    @media only screen and (width <=600px) {
        section {
        width: fit-content;
    }

    }
</style>