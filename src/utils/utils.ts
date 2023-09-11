import * as d3 from "d3";

export function renderChart(data, usePercentage, className) {
    if (data.length === 0) return; // Esperar hasta que se carguen los datos

    // Configuración del gráfico
    const chartContainer = d3.select(`.${className}`);
    chartContainer.html(""); // Limpiar el contenedor

    // Crear las barras y etiquetas
    const barContainers = chartContainer
        .selectAll(".bar-container")
        .data(data)
        .enter()
        .append("div")
        .classed("bar-container", true)
        .style("display", "grid")
        .style("grid-template-columns", "1fr 3fr")
        .style("align-items", "center");

    // Crear un div para el nombre del lenguaje (izquierda en pantallas grandes)
    barContainers
        .append("div")
        .classed("label", true)
        .style("text-align", "right")
        .style("padding", "5px 20px 5px 0")
        .style("margin", "8px 0")
        .style("display", "none") // Ocultar en pantallas grandes
        .text((d) => d.language);

    // Crear un div para el nombre del lenguaje (izquierda en pantallas pequeñas)
    barContainers
        .append("div")
        .classed("label-small-screen", true)
        .style("text-align", "left") // Alineado a la izquierda en pantallas pequeñas
        .style("margin-bottom", "0px")
        .style("margin-top", "10px")
        .text((d) => d.language);

    const barContainerInner = barContainers
        .append("div")
        .classed("container", true)
        .style("display", "flex")
        .style("align-items", "center")
        .style("margin", "8px 0")
        .style("padding", "3px 0");

    // Crear la barra
    barContainerInner
        .append("div")
        .classed("bar", true)
        .style("width", (d) => (`${d.percentage}%`))
        .style("height", "26px")
        .style("background-color", "#ff5353")
        .style("border-radius", "5px")
        .style("border", "solid 4px #39525b");

    // Crear la etiqueta de porcentaje o respuestas según el valor de usePercentage
    barContainerInner
        .append("div")
        .classed("data-label", true)
        .style("font-weight", "bold")
        .style("padding", "0 0 0 10px")
        .text((d) => (usePercentage ? `${d.percentage}%` : `${d.responses}`));

    // Aplicar media query para cambiar la disposición en pantallas pequeñas
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleMediaQueryChange = (event) => {
        if (event.matches) {
            // Cambiar el estilo cuando la media query se cumple
            barContainers.select(".label-small-screen").style("display", "block");
            barContainers.select(".label").style("display", "none");
            barContainers.style("grid-template-columns", "1fr")
            barContainers.style("text-align", "left");
            barContainers.style("margin", "0 0 10px 0 !important");
        } else {
            // Restaurar el estilo predeterminado cuando la media query no se cumple
            barContainers.select(".label-small-screen").style("display", "none");
            barContainers.select(".label").style("display", "block");
            barContainers.style("grid-template-columns", "1fr 3fr")
                .style("text-align", "right");
        }
    };

    // Registrar el listener de la media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Comprobar la media query inicialmente
    handleMediaQueryChange(mediaQuery);
}