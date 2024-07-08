document.addEventListener("DOMContentLoaded", () => {
  const postForm = document.getElementById("post-form");
  const savePostBtn = document.getElementById("save-post-btn");
  const successMessage = document.getElementById("success-message");
  savePostBtn.addEventListener("click", async () => {
    const postImage = document.getElementById("postImage").value;
    const postTitle = document.getElementById("postTitle").value;
    const postTags = document.getElementById("postTags").value;
    const postAbout = document.getElementById("postAbout").value;
    const postAuthor = document.getElementById("postAuthor").value;
    const postDate = new Date().toISOString().split('T')[0]; // get current date
    const newPost = {
      img: postImage,
      title: postTitle,
      hashtag: postTags,
      abstract: postAbout,
      author: postAuthor,
      date: postDate,
      reacciones: 0,
      comentarios: 0,
      relevant: 0,
      avatar: "default-avatar-url", // Default avatar URL
      timeread: Math.ceil(postAbout.split(' ').length / 200) // Rough estimate of reading time
    };
    try {
      const response = await fetch(
        "https://js-7259a-default-rtdb.firebaseio.com/.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
      if (response.ok) {
        successMessage.classList.remove("d-none");
        postForm.reset();
      } else {
        alert("Error al publicar el post. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al publicar el post. Inténtalo de nuevo.");
    }
  });
});
