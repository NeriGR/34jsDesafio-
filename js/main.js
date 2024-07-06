const postData = {
    id: 1, 
    author: "John Doe", 
    avatar: "https://randomuser.me/api/portraits/men/19.jpg", 
    comments: 12, 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2021-05-10", 
    imagecontent: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80", 
    likes: 10,  
    timeread: 5, 
    title: "The title of the article",
    tags: ["#tag1", "#tag2", "#tag3"]
};


const printPost = (postData) => {

    // Card container
    const cardsContainer = document.querySelector('#allCards');
    console.log(cardsContainer);
    const card = document.createElement('div');
    card.classList.add('card', 'rounded', 'overflow-hidden', 'border-light-subtle');
    cardsContainer.appendChild(card);

    //Image
    const cardImage = document.createElement('img');
    cardImage.classList.add('w-100');
    cardImage.src = postData.imagecontent;
    cardImage.alt = 'cardImage';
    card.appendChild(cardImage);

    //Card content
    const cardContent = document.createElement('div');
    cardContent.classList.add('cardcontent', 'p-3', 'border-light-subtle');
    card.appendChild(cardContent);

    const cardContentGap = document.createElement('div');
    cardContentGap.classList.add('gap-2', 'd-flex');
    cardContent.appendChild(cardContentGap);

    //First section
    const cardUserImage = document.createElement('img');
    cardUserImage.classList.add('mt-2', 'border', 'rounded-circle');
    cardUserImage.src = postData.avatar;
    cardUserImage.width = 32;
    cardUserImage.height = 32;
    cardContentGap.appendChild(cardUserImage);

    const cardUserContent = document.createElement('div');
    cardUserContent.classList.add('d-flex', 'flex-column', 'justify-content-center');
    cardContentGap.appendChild(cardUserContent);

    const cardUserName = document.createElement('a');
    cardUserName.classList.add('btn', 'btn-ghost', 'text-dark', 'text-start', 'p-1', 'fs-m');
    cardUserName.href = '';
    cardUserName.textContent = postData.author;
    cardUserContent.appendChild(cardUserName);

    const cardDate = document.createElement('p');
    cardDate.classList.add('fw-light', 'fs-sm', 'ms-1', 'text-light-emphasis', 'link-dark', 'fecha');
    cardDate.textContent = postData.date;
    cardUserContent.appendChild(cardDate); 


    //Middle content
    const middleContent = document.createElement('div');
    middleContent.classList.add('ms-5', 'd-flex', 'flex-column');
    cardContent.appendChild(middleContent);

    const title = document.createElement('h3');
    const titleLink = document.createElement('a');
    titleLink.classList.add('text-decoration-none', 'text-dark', 'fw-bold', 'link-title');
    titleLink.href = '';
    titleLink.textContent = postData.title;
    title.appendChild(titleLink);
    middleContent.appendChild(title);

    const tags = document.createElement('div');
    middleContent.appendChild(tags);
    postData.tags.forEach(tag => {
        const tagLink = document.createElement('a');
        tagLink.classList.add('p-1', 'btn', 'btn-border', 'fs-m');
        tagLink.textContent = tag;
        tags.appendChild(tagLink);
    });

    const likesDiv = document.createElement('div');
    likesDiv.classList.add('likes', 'mb-3', 'd-flex', 'justify-content-around', 'text-nowrap');
    middleContent.appendChild(likesDiv);

    const reactions = document.createElement('a');
    reactions.classList.add('btn', 'btn-ghost', 'fs-reactions', 'd-flex', 'gap-1', 'w-50');
    reactions.textContent = `${postData.likes} likes`;
    likesDiv.appendChild(reactions);

    const comments = document.createElement('a');
    comments.classList.add('btn', 'btn-ghost', 'fs-reactions');
    comments.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon">
    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
    </path>
    </svg>
    ${postData.comments} comments`;
    likesDiv.appendChild(comments);

    const readingTime = document.createElement('div');
    readingTime.id = 'readingtime';
    readingTime.classList.add('ms-auto', 'd-flex', 'align-items-center');
    likesDiv.appendChild(readingTime);

    const time = document.createElement('p');
    time.classList.add('fw-light', 'fs-sm', 'text-light-emphasis', 'mb-0');
    time.textContent = `${postData.timeread} min read`;
    readingTime.appendChild(time);

 //Comment section
    const commentSection = document.createElement('div');
    commentSection.classList.add('commentsection', 'd-flex', 'gap-2');
    cardContent.appendChild(commentSection);

    const avatarComment = document.createElement('div');
    avatarComment.classList.add('avatarcomment', 'd-flex', 'ms-1', 'mt-1');
    commentSection.appendChild(avatarComment);

    const avatarCommentImage = document.createElement('img');
    avatarCommentImage.classList.add('rounded-circle', 'avatarcomment');
    avatarCommentImage.src = 'https://randomuser.me/api/portraits/men/19.jpg';
    avatarCommentImage.alt = '';
    avatarCommentImage.width = 24;
    avatarCommentImage.height = 24;
    avatarComment.appendChild(avatarCommentImage);

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment', 'rounded', 'd-flex', 'flex-column', 'gap-1', 'p-3', 'bg-fondo', 'w-100');
    commentSection.appendChild(commentDiv);

    const authorTime = document.createElement('div');
    authorTime.classList.add('authortime', 'd-flex', 'align-items-center', 'gap-1');
    commentDiv.appendChild(authorTime);

    const comment = document.createElement('p');
    comment.classList.add('fs-m');
    comment.textContent = postData.content;
    commentDiv.appendChild(comment);





}

printPost(postData);


async function getAndSortData() {
  try {
    const snapshot = await db.collection("yourCollectionName").get();
    const dataArray = snapshot.docs.map(doc => doc.data());
    dataArray.sort((a, b) => b.likes - a.likes);

    console.log(dataArray);
    return dataArray;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
  }
}


// // Function to filter post by search input with keyup event
const filterPostsBySearch = async (getUsersfuntion) => {
  let posts = await getUsersfuntion();
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value;
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    const cardsContainer = document.querySelector("#allCards");
    cardsContainer.innerHTML = "";
    filteredPosts.forEach((post) => {
      createCard(post);
    });
  });
};
filterPostsBySearch(getAllUsers);


// // JavaScript: Simulate login by saving token to localStorage

// // Function to simulate login
// const simulateLogin = () => {
//   const loginButton = document.getElementById("loginButton"); // Assuming there's a login button with this ID

//   loginButton.addEventListener("click", () => {
//     const token = "abcdefghijk"; // This should be replaced with actual token generation logic
//     localStorage.setItem("authToken", token); // Saving the token to localStorage
//     alert("Login correcto"); // Feedback to the user
//   });
// };

// // Call simulateLogin function to attach the event listener to the login button
// simulateLogin();
