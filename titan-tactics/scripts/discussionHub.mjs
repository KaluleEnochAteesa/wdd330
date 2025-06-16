document.addEventListener("DOMContentLoaded", () => {
    const discussionSection = document.getElementById("discussion-hub");
    discussionSection.innerHTML = `
        <h2>Discussion Hub</h2>
        <textarea id="comment-box" placeholder="Share your thoughts on Rockefeller's strategies..."></textarea>
        <button onclick="postComment()">Post</button>
        <div id="comments"></div>
    `;
});

function postComment() {
    const commentBox = document.getElementById("comment-box");
    const commentsDiv = document.getElementById("comments");
    const newComment = document.createElement("p");
    newComment.innerText = commentBox.value;
    commentsDiv.appendChild(newComment);
    commentBox.value = "";
}
const section = document.getElementById("strategy-list");
if (section) {
    section.classList.add("module-card", "show");
}
export function renderDiscussionHub() {
  const hub = document.getElementById("discussion-hub");
  const storedComments = JSON.parse(localStorage.getItem("titan-comments")) || [];

  const list = hub.querySelector("#comment-list");
  list.innerHTML = storedComments
    .map(comment => `<p class="comment">${comment}</p>`)
    .join("");

  const form = hub.querySelector("#comment-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = hub.querySelector("#comment-input");
    const newComment = input.value.trim();

    if (newComment) {
      storedComments.unshift(newComment); // Most recent on top
      localStorage.setItem("titan-comments", JSON.stringify(storedComments));
      input.value = "";
      renderDiscussionHub(); // Re-render with new comment
    }
  });
}
