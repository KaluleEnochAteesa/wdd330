import { fetchStrategies } from "./dataLoader.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    const strategyList = document.getElementById("strategy-list");
    const strategies = await fetchStrategies();

    strategies.forEach(strategy => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${strategy.name}</h2><p>${strategy.description}</p>`;
        strategyList.appendChild(div);
    });
});
