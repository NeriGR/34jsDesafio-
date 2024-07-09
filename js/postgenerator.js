const newPost = {}

document.addEventListener("DOMContentLoaded", async () => {
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
    return await postItem(newPost);
  });
});

const URL_POST = 'https://js-7259a-default-rtdb.firebaseio.com/.json';

const postItem = async (postNew) => {
  try{
      const response = await fetch(URL_POST, {
          method: 'POST',
          headers: {  'Content-Type': 'application/json;charset=UTF-8' },
          body: JSON.stringify(postNew)
      });
      window.location.href = `../index.html`;
  }catch(error){
      alert('Error al enviar los datos')
  }
};
