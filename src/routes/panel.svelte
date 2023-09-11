<script>
    import ModeResult from "./mode-result.svelte";
    import { onMount, afterUpdate } from "svelte";
    import { renderChart } from "../utils/utils";
    import { createEventDispatcher } from "svelte";
    import Counter from "./counter.svelte";

    // @ts-ignore
    import * as d3 from "d3";

    let URL = "https://technicaltest161.onrender.com/respondents/all";

    // @ts-ignore
    let data = [];
    let usePercentage = true;
    let responses = "87,585";
    let currentContainer = "respondents";
    let currentLink = "respondents";
    onMount(async () => {
        const response = await fetch(URL);
        data = await response.json();
        renderChart(data, usePercentage, currentContainer); // Renderizamos el gráfico inicial
    });

    function toggleChart() {
        usePercentage = !usePercentage;
        renderChart(data, usePercentage, currentContainer);
    }

    afterUpdate(() => {
        renderChart(data, usePercentage, currentContainer);
    });

    const dispatcher = createEventDispatcher();

    async function handleLinkClick(url, containerName, numberResponses) {
        URL = `https://technicaltest161.onrender.com${url}`;
        currentContainer = containerName;
        currentLink = containerName;

        // Obtener los datos actualizados de la nueva URL
        const response = await fetch(URL);
        data = await response.json();

        renderChart(data, usePercentage, currentContainer);
        usePercentage = true;
        responses = numberResponses;
        console.log(responses);
    }
</script>

<div class="header">
    <nav class="navbar">
        <ul>
            <li>
                <a
                    href="#"
                    class:selected={currentLink === "respondents"}
                    on:click={() =>
                        handleLinkClick(
                            "/respondents/all",
                            "respondents",
                            "87,585"
                        )}>All Respondents</a
                >
            </li>
            <li>
                <a
                    href="#"
                    class:selected={currentLink === "developers"}
                    on:click={() =>
                        handleLinkClick(
                            "/developers/all",
                            "developers",
                            "67,053"
                        )}>Professional Developers</a
                >
            </li>
            <li>
                <a
                    href="#"
                    class:selected={currentLink === "learning"}
                    on:click={() =>
                        handleLinkClick("/learning/all", "learning", "4,905")}
                    >Learning to Code</a
                >
            </li>
            <li>
                <a
                    href="#"
                    class:selected={currentLink === "other"}
                    on:click={() =>
                        handleLinkClick("/other/all", "other", "5,115")}
                    >Other Coders</a
                >
            </li>
        </ul>
    </nav>
    <Counter {responses} />
</div>

<div
    class="respondents chart"
    style="display: {currentContainer === 'respondents' ? 'grid' : 'none'};"
/>
<div
    class="developers chart"
    style="display: {currentContainer === 'developers' ? 'grid' : 'none'};"
/>
<div
    class="learning chart"
    style="display: {currentContainer === 'learning' ? 'grid' : 'none'};"
/>
<div
    class="other chart"
    style="display: {currentContainer === 'other' ? 'grid' : 'none'};"
/>

<ModeResult {data} {usePercentage} {toggleChart} />

<style>
    .chart {
        width: 100%;
    }

    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #f5f9f0;
        width: max-content;
        padding: 1em;
    }

    .navbar ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .navbar li {
        padding: 0.6em 0;
        min-width: max-content;
    }

    .navbar li a {
        text-decoration: none;
        color: #c4c8cc;
        padding: 0.5em 1.5em;
        border-radius: 1000px;
        min-width: max-content;
    }

    .navbar li a:hover {
        background-color: #3c5668;
        cursor: pointer;
    }

    .header {
        display: flex;
        justify-content: space-between;
        flex-wrap: no-wrap;
        margin-bottom: 3em !important;
    }

    .navbar li a.selected {
        background-color: #FF5353;
        color: #ffffff;
    }

    @media (max-width: 640px) {
        .header {
            flex-direction: column;
        }

        .navbar {
            padding: 0;
            margin-bottom: 0;
            flex-direction: column;
            margin: 0 !important;
            width: 100%;
        }

        .navbar ul {
            flex-direction: column;
            justify-content: left;
            width: 100%;
        }

        .navbar ul li {
            width: 100%;
            padding: 4px 0;
        }

        .navbar ul li a {
            display: block;
            width: auto;
        }

        .bar-container {
            display: flex !important;
            flex-direction: column !important;
        }
    }
</style>
