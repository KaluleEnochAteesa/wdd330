import { renderStrategyArchive } from "./strategyRenderer.mjs";
import { renderEmpireBuilder } from "./empireBuilder.mjs";
import { renderCaseStudyHub } from "./caseStudies.mjs";
import { renderDecisionGuide } from "./decisionLogic.mjs"; // This one’s working ✅
import { renderDiscussionHub } from "./discussionHub.mjs";

document.addEventListener("DOMContentLoaded", () => {
  renderStrategyArchive();
  renderEmpireBuilder();
  renderCaseStudyHub();
  renderDecisionGuide();
  renderDiscussionHub(); // Add this after the others

  setTimeout(() => {
    const sectionIds = [
      "strategy-list",
      "analysis-tool",
      "discussion-hub",
      "downloads"
    ];

    sectionIds.forEach((id, index) => {
      const section = document.getElementById(id);
      if (section) {
        section.classList.add("module-card");
        setTimeout(() => {
          section.classList.add("show");
        }, index * 600);
      }
    });
  }, 200);
});


// Back to Top button behavior
window.addEventListener("scroll", () => {
  const scrollBtn = document.getElementById("scroll-top");
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

document.getElementById("scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

// Check stored theme preference on load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.checked = true;
}
document.getElementById("generate-pdf").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const content = document.getElementById("pdf-notes").value.trim();

  if (!content) {
    alert("Add some notes to generate your brief.");
    return;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Titan Tactics: Rockefeller Strategy Brief", 20, 20);

  doc.setFont("times", "normal");
  doc.setFontSize(12);
  doc.text(content, 20, 40, { maxWidth: 170 });

  doc.save("titan-strategy-brief.pdf");
});
window.addEventListener("load", () => {
  const loader = document.getElementById("titan-loader");
  setTimeout(() => loader.style.display = "none", 1200);
});

document.getElementById("get-strategy").addEventListener("click", () => {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;
  const output = document.getElementById("strategy-result");

  if ([q1, q2, q3].includes("--")) {
    output.innerHTML = "📌 Please answer all questions to get a strategy.";
    return;
  }

  if (q1 === "yes" && q2 === "yes" && q3 === "yes") {
    output.innerHTML = `<h3>💼 Vertical Integration + Acquisition Expansion</h3>
    <p>Consolidate fragmented markets while locking down supply chains to scale like Rockefeller in Cleveland 1872.</p>`;
  } else if (q1 === "yes" && q3 === "yes") {
    output.innerHTML = `<h3>💣 Predatory Pricing</h3>
    <p>Use your capital to undercut competitors and buy them out when they fold.</p>`;
  } else {
    output.innerHTML = `<h3>🛠️ Operational Efficiency</h3>
    <p>Focus on logistics optimization, partnerships, and compounding control before going full conquest mode.</p>`;
  }
});
// Track strategy deployment
let strategyCount = 0;
let briefCount = 0;
let downloadCount = 0;

document.getElementById("get-strategy").addEventListener("click", () => {
  strategyCount++;
  document.getElementById("stat-strategies").textContent = strategyCount;
});

document.getElementById("generate-pdf").addEventListener("click", () => {
  briefCount++;
  document.getElementById("stat-pdfs").textContent = briefCount;
});

// Fake download buttons listener (if you link to real .pdfs)
document.querySelectorAll("#download-tools a").forEach(link => {
  link.addEventListener("click", () => {
    downloadCount++;
    document.getElementById("stat-downloads").textContent = downloadCount;
  });
});
document.getElementById("wikidata-btn").addEventListener("click", () => {
  const query = document.getElementById("wikidata-query").value.trim();
  const resultBox = document.getElementById("wikidata-result");

  if (!query) {
    resultBox.innerHTML = "Please enter a search term.";
    return;
  }

  const url = `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(query)}&language=en&format=json&origin=*`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.search && data.search.length > 0) {
        const item = data.search[0];
        resultBox.innerHTML = `<strong>${item.label}</strong><br>${item.description || "No description available."}<br><a href="https://www.wikidata.org/wiki/${item.id}" target="_blank">View on Wikidata</a>`;
      } else {
        resultBox.innerHTML = "No results found.";
      }
    })
    .catch(err => {
      resultBox.innerHTML = "Error fetching data.";
      console.error(err);
    });
});
document.getElementById("ask-titan").addEventListener("click", () => {
  const question = document.getElementById("titan-question").value;
  const responseBox = document.getElementById("titan-response");
  
  if (!question.trim()) {
    responseBox.innerText = "Please enter a question first.";
    return;
  }

  responseBox.innerText = "Thinking like Rockefeller...";

  fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: { text: question } })
  })
    .then((res) => res.json())
    .then((data) => {
      const answer = data.generated_text || "Titan Assistant is pondering that...";
      responseBox.innerText = answer;
    })
    .catch((err) => {
      console.error(err);
      responseBox.innerText = "Oops! Something went wrong.";
    });
});
