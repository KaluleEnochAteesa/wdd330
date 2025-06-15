export async function renderCaseStudyHub() {
  const container = document.getElementById("discussion-hub");

  try {
    const response = await fetch("json/caseStudies.json");
    const studies = await response.json();

    container.innerHTML = `<h2>Historical Case Study Hub</h2>`;

    studies.forEach(study => {
      const card = document.createElement("div");
      card.classList.add("case-study-card");
      card.innerHTML = `
        <h3>${study.title}</h3>
        <p><strong>Tactic:</strong> ${study.tactic}</p>
        <p>${study.summary}</p>
        <p><em>Lesson:</em> ${study.lesson}</p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    container.innerHTML = `<p>Failed to load case studies.</p>`;
    console.error("Case Study Error:", error);
  }
}
