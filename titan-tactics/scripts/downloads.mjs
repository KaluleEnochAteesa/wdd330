document.addEventListener("DOMContentLoaded", () => {
    const downloadsSection = document.getElementById("downloads");
    downloadsSection.innerHTML = `
        <h2>Strategic Planning Templates</h2>
        <button onclick="downloadTemplate()">Download Rockefeller Strategy Sheet</button>
    `;
});

function downloadTemplate() {
    const link = document.createElement("a");
    link.href = "rockefeller-strategy-template.pdf"; // Placeholder file
    link.download = "Rockefeller_Strategy_Template.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
