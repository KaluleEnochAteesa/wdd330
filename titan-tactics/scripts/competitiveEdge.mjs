document.addEventListener("DOMContentLoaded", () => {
    const analysisTool = document.getElementById("analysis-tool");
    analysisTool.innerHTML = `
        <h2>Competitive Edge Calculator</h2>
        <input type="number" id="market-share" placeholder="Enter your market share (in %)" />
        <button onclick="calculateEdge()">Analyze</button>
        <p id="edge-result"></p>
    `;
});

function calculateEdge() {
    const marketShare = document.getElementById("market-share").value;
    const resultText = document.getElementById("edge-result");
    if (marketShare >= 50) {
        resultText.innerText = "You have strong market dominance!";
    } else {
        resultText.innerText = "Consider acquisition strategies for stronger control.";
    }
}
const section = document.getElementById("strategy-list");
if (section) {
    section.classList.add("module-card", "show");
}