<script>
    let holding,
        keyR,
        key1,
        key2,
        key3,
        key4,
        key5,
        key6,
        key7 = false;

    // Esta funcion agrega el highlight cuando la tecla es apretada.
    function handleShortCuts(event) {
        holding = event.shiftKey;
        keyR = event.key.toUpperCase() === "R";
        key1 =
            event.key === "1" ||
            event.code === "Digit1" ||
            event.code === "Numpad1";
        key2 =
            event.key === "2" ||
            event.code === "Digit2" ||
            event.code === "Numpad2";
        key3 =
            event.key === "3" ||
            event.code === "Digit3" ||
            event.code === "Numpad3";
        key4 =
            event.key === "4" ||
            event.code === "Digit4" ||
            event.code === "Numpad4";
        key5 =
            event.key === "5" ||
            event.code === "Digit5" ||
            event.code === "Numpad5";
        key6 =
            event.key === "6" ||
            event.code === "Digit6" ||
            event.code === "Numpad6";
        key7 =
            event.key === "7" ||
            event.code === "Digit7" ||
            event.code === "Numpad7";
    }

    // Esta funcion quita le highlight cuando la tecla es levantada
    function handleKeyUp() {
        holding = false;
        keyR = false;
        key1 = false;
        key2 = false;
        key3 = false;
        key4 = false;
        key5 = false;
        key6 = false;
        key7 = false;
    }
</script>

<svelte:window on:keydown={handleShortCuts} on:keyup={handleKeyUp} />

<section>
    <div class="shift-row">
        <p class:holding class="key">shift</p>
        <p class="symbols">+</p>
    </div>
    <div>
        <article>
            <div>
                <p class:holding={keyR} class="key">r</p>
                <p>Reset</p>
            </div>
        </article>
        <article>
            <div>
                <p class:holding={key1} class="key">1</p>
                <p>0.25x</p>
            </div>
        </article>
        <article>
            <div>
                <p class:holding={key2} class="key">2</p>
                <p>0.50x</p>
            </div>
        </article>
        <article>
            <div>
                <p class:holding={key3} class="key">3</p>
                <p>0.75x</p>
            </div>
        </article>
        <article>
            <div>
                <p class:holding={key4} class="key">4</p>
                <p>1.25x</p>
            </div>
        </article>
        <article>
            <div>
                <p class:holding={key5} class="key">5</p>
                <p>1.50x</p>
            </div>
        </article>
        <article>
            <article>
                <div>
                    <p class:holding={key6} class="key">6</p>
                    <p>1.75x</p>
                </div>
            </article>
            <article>
                <div>
                    <p class:holding={key7} class="key">7</p>
                    <p>2x</p>
                </div>
            </article>
        </article>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 8px;
    }
    .shift-row {
        display: flex;
        flex-direction: column;
    }

    article {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin: 4px;
        
    }
    article > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    p {
        line-height: 2;
        margin: 0;
    }
    div {
        display: flex;
        padding: 0;
    }
    .symbols {
        font-size: 24px;
        line-height: 1;
        font-weight: 600;
        text-align: center;
        color: rgb(66, 65, 65);
    }

    .key {
        text-align: center;
        font-size: 20px;
        font-family: Calibri, "Trebuchet MS", sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px 8px;
        min-width: 32px;
        width: fit-content;
        height: 30px;
        background: #dbdbdb;
        box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.6);
        transform: translate(-2px, -2px);
        transition: all 100ms;
        border-top: 2.5px solid;
        border-radius: 6px;
        background:
            linear-gradient(white, white) padding-box,
            linear-gradient(to right, rgba(166, 166, 166, 1), rgba(210, 210, 210, 1)) border-box;
        border: 4px solid transparent;
        opacity: 0.7;
    }

    .holding {
        transform: translate(0px, 0px);
        box-shadow: none;
        opacity: 1;

        
    }
</style>
