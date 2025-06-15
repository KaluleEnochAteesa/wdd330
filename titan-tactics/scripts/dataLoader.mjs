export async function fetchStrategies() {
    try {
        const response = await fetch("json/strategies.json");
        return await response.json();
    } catch (error) {
        console.error("Error fetching strategies:", error);
        return [];
    }
}
