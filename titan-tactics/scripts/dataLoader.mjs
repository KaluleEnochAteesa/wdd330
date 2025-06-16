export async function fetchStrategies() {
    try {
        const response = await fetch("json/strategies.json");
        return await response.json();
    } catch (error) {
        console.error("Error fetching strategies:", error);
        return [];
    }
}
export function showStrategySection() {
    const section = document.getElementById("strategy-list");
    if (section) {
        section.classList.add("module-card", "show");
    }
}