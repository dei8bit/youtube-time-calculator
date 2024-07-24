<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("velocityBtnClick", velocity);
    }

    export let velocity;
    export let availability;
</script>

<button
    disabled={availability}
    class:availability
    on:click={handleClick}>{velocity}X</button
>

<style>
    button {
        border: none;
        padding: 8px;
        min-width: 50px;
        max-width: 70px;
        min-height: 32px;
        max-height: 48px;
        border-radius: 3px;
        background: none;
        cursor: pointer;
        transition: 0.2s;
        mix-blend-mode: color-burn;
        background: #ffa3a39a;
        border: 1px  solid #352e4941;
        
    }

    button:hover {
        box-shadow: 2px 2px 4px #000000;
        box-shadow: 0px 4px 4px rgba(53, 46, 73, 0.5);
    }

    button:active {
        background-color: #5b8be9;
    }

    .availability {
        cursor: not-allowed;
    }
</style>
