<script>
    export let data = [];
    export let usePercentage = true;
    export let toggleChart = () => {};

    function handleButtonClick(buttonType) {
        if (
            (buttonType === "percentage" && !usePercentage) ||
            (buttonType === "responses" && usePercentage)
        ) {
            usePercentage = !usePercentage;
            toggleChart(); // Llama a la función en el componente padre
        }
    }
</script>

<div class="mode">
    <div class="all_legend">
        <div class="mr8">
            <svg
                aria-hidden="true"
                class="iconSpeechBubbleQuestion svg-icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
            >
                <path
                    d="m1 18 3-3h11c1.09 0 2-.91 2-2V4c0-1.09-.91-2-2-2H3a2 2 0 0 0-2 2v14Zm7.96-4.94c-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08-.02.63-.48 1.02-1.1 1Zm.92-3.68a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42.2-.36.58-.65 1.06-.93.41-.23.78-.71.78-1.2 0-.27-.09-.53-.26-.74-.22-.26-.46-.4-.92-.4-.45 0-.83.23-1.02.52-.17.27-.16.55-.16.83v.11H6.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.8l-.48.3c-.2.14-.36.35-.44.6Z"
                    fill="#8c9aa1"
                />
            </svg>
        </div>
        <p class="legend">
            Which database environments have you done extensive development work
            in over the past year, and which do you want to work in over the
            next year? (If you both worked with the database and want to
            continue to do so, please check both boxes in that row.)
        </p>
    </div>
    <div class="buttons">
        <button
            class="percentage"
            class:active={usePercentage}
            on:click={() => handleButtonClick("percentage")}
        >
            % Percentages
        </button>
        <button
            class="responses"
            class:active={!usePercentage}
            on:click={() => handleButtonClick("responses")}
        >
            # Responses
        </button>
    </div>
</div>

<style>
    .all_legend {
        display: flex;
        flex-direction: row;
    }

    .mr8 {
        margin: 11px 5px;
    }

    .legend {
        font-size: 11px;
        color: #8c9aa1;
        max-width: 632px;
        display: flexbox;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        min-width: max-content;
    }

    button {
        font-size: 14px;
        padding: 6.5px 9.1px;
        width: min-content;
        border-radius: 1000px;
        border: none;
        color: #acb3b9;
    }

    .mode {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-top: 3em;
    }

    .percentage,
    .responses {
        display: inline-block;
        width: max-content;
        height: max-content;
        background-color: #273d44;
    }

    .percentage.active,
    .responses.active {
        background-color: #5a9e70;
        color: #ffffff;
    }

    @media (max-width: 950px) {
        .mode {
            flex-direction: column-reverse;
        }

        .buttons {
            width: 100%;
            justify-content: right;
        }
    }

    path {
        display: block;
        border: solid 1px #acb3b9;
    }
</style>
