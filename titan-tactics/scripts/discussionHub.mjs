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
