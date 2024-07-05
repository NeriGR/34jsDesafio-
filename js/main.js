const getAllUsers = async () => {
  const response = await fetch(
    "https://js-7259a-default-rtdb.firebaseio.com/.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  let keysArray = Object.keys(data);
  let usersArray = keysArray.map((key /*user1 || user2 || -a-jdfasjcv*/) => ({
    ...data[key] /*{name:"Israel", lastname:"salinas"}*/,
    key /*key: "user1" || "user2" || "-a-jdfasjcv"*/,
  }));
  return usersArray;
};

const body = document.querySelector("body");

const createCard = (postData) => {
  let { img, author, comentarios, date, hashtag, reacciones, relevant, title} = postData;
    hashtag = hashtag.split(" ");
  // Card container
  const cardsContainer = document.querySelector("#allCards");
  const card = document.createElement("div");
  card.classList.add(
    "card",
    "rounded",
    "overflow-hidden",
    "border-light-subtle"
  );
  cardsContainer.appendChild(card);

  //Image
  const cardImage = document.createElement("img");
  cardImage.classList.add("w-100");
  //add style for image to fit the card
  cardImage.style.height = "280px";
  cardImage.style.objectFit = "cover";
  cardImage.src = img;
  cardImage.alt = "cardImage";
  card.appendChild(cardImage);

  //Card content
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-body", "p-3", "border-light-subtle");
  card.appendChild(cardContent);


  //First section
  const firstSection = document.createElement("div");
  firstSection.classList.add("d-flex", "align-items-center");
  cardContent.appendChild(firstSection);
  const cardUserImage = document.createElement("img");
  cardUserImage.classList.add("me-2", "rounded-circle");
  cardUserImage.src = "https://imgs.search.brave.com/ldjDWR16xqPlvTuu_DLjIJsCvp1Vhrb2-fSxBypbAsg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyMi5wbmc";
  cardUserImage.width = 32;
  cardUserImage.height = 32;
  firstSection.appendChild(cardUserImage);

  const cardUserContent = document.createElement("div");
  cardUserContent.classList.add(
    "flex-grow-1",
    "ms-1",
    "mt-2",
  );
  firstSection.appendChild(cardUserContent);

  const cardUserName = document.createElement("a");
  cardUserName.classList.add(
    "btn",
    "btn-ghost",
    "text-dark",
    "text-start",
    "p-1",
    "fs-m"
  );
  cardUserName.href = "";
  cardUserName.textContent = author;
  cardUserContent.appendChild(cardUserName);

  const cardDate = document.createElement("p");
  cardDate.classList.add(
    "fw-light",
    "fs-sm",
    "ms-1",
    "text-light-emphasis",
    "link-dark",
    "fecha"
  );
  cardDate.textContent = date;
  cardUserContent.appendChild(cardDate);

  //Middle content
  const middleContent = document.createElement("div");
  middleContent.classList.add("mt-3");
  cardContent.appendChild(middleContent);

  const titleCard = document.createElement("h3");
  const titleLink = document.createElement("a");
  const strong = document.createElement("strong");
  titleCard.classList.add("mb-0", "font-weight-bold");
  titleLink.classList.add(
    "text-decoration-none",
    "text-dark",
    "fw-bold",
    "link-title",
  );
  titleLink.href = "";
  strong.textContent = title;
  titleLink.appendChild(strong);
  titleCard.appendChild(titleLink);
  middleContent.appendChild(titleCard);

  const tags = document.createElement("div");
  tags.classList.add("tags", "mt-2");
  middleContent.appendChild(tags);
  hashtag.forEach((tag) => {
    const tagLink = document.createElement("a");
    tagLink.classList.add("btn", "btn-border", "fs-m");
    tagLink.textContent = tag;
    tags.appendChild(tagLink);
  });

  const likesDiv = document.createElement("div");
  likesDiv.classList.add(
    "likes",
    "m-3",
    "d-flex",
    "justify-content-between",
    "align-items-center",
  );
  middleContent.appendChild(likesDiv);

  const reactions = document.createElement("a");
  reactions.classList.add(
    "btn",
    "btn-ghost",
    "fs-reactions",
    "d-flex",
    "gap-1"
  );
  reactions.textContent = `${reacciones} likes`;
  likesDiv.appendChild(reactions);

  const comments = document.createElement("a");
  comments.classList.add("btn", "btn-ghost", "fs-reactions");
  comments.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon">
    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
    </path>
    </svg>
    ${comentarios} comments`;
  likesDiv.appendChild(comments);

  const readingTime = document.createElement("div");
  readingTime.id = "readingtime";
  readingTime.classList.add("d-flex", "align-items-center");
  likesDiv.appendChild(readingTime);

  const time = document.createElement("p");
  time.classList.add("fw-light", "fs-sm", "text-light-emphasis", "mb-0");
  time.textContent = `${18} min read`;
  readingTime.appendChild(time);
};

const printPosts = async () => {
  let posts = await getAllUsers();
  console.log(posts);
  posts.forEach((post) => {
    createCard(post);
  });
};
printPosts();


// <div class="card rounded overflow-hidden border-light-subtle">
//     <img class="w-100" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yH1__SZq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ytshyt5ieabbodlgx2gr.png" alt="" />
//     <div class="card-body p-3 border-light-subtle">
//         <div class="d-flex align-items-center" id="firstSection">
//             <img class="rounded-circle me-2" src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1463462%2Fadc8bd5d-e040-4aa7-8cce-18cb72dce06c.jpeg" alt="miguelrodriguez99 profile" width="32" height="32" />
//             <div class="flex-grow-1">
//                 <a href="#" class="btn btn-ghost text-dark text-start p-1 fs-m">Miguel</a>
//                 <p class="fw-light fs-sm ms-1 text-light-emphasis link-dark fecha">May 25 (12 hours ago)</p>
//             </div>
//         </div>

//         <div class="mt-3" id="middleSection">
//             <h3 class="mb-0">
//                 <a href="#" class="text-decoration-none text-dark fw-bold link-title"><strong>Frontend resources! &#128640;</strong></a>
//             </h3>
//             <div class="tags mt-2">
//                 <a href="#" class="btn btn-border fs-m">#frontend</a>
//                 <a href="#" class="btn btn-border fs-m">#tailwindcss</a>
//                 <a href="#" class="btn btn-border fs-m">#react</a>
//                 <a href="#" class="btn btn-border fs-m">#javascript</a>
//             </div>

//             <div class="likes mt-3 d-flex justify-content-between align-items-center">
//                 <a href="#" class="btn btn-ghost fs-reactions d-flex gap-1">
//                     <span>33 reactions</span>
//                 </a>
//                 <a href="#" class="btn btn-ghost fs-reactions">
//                     <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon">
//                         <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
//                     </svg>
//                     4 comments
//                 </a>
//                 <div class="d-flex align-items-center">
//                     <p class="fw-light fs-sm text-light-emphasis mb-0">5 min read</p>
//                     <svg class="btn btn-ghost-morado p-2 ms-1" viewbox="0 0" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
//                     </svg>
//                 </div>
//             </div>
//         </div>

//         <div class="d-flex mt-3 gap-2" id="commentSection">
//             <div class="avatarcomment">
//                 <img class="rounded-circle" src="https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1493941%2F935afd13-e2f6-480b-9fd3-975988dc6f30.jpg" alt="" width="24" height="24" />
//             </div>
//             <div class="comment rounded bg-fondo flex-grow-1 p-3">
//                 <div class="authortime d-flex align-items-center gap-1">
//                     <a href="#" class="text-decoration-none text-light-emphasis fs-m">John</a>
//                     <a href="#" class="fs-reactions text-decoration-none text-light-emphasis fw-lighter">4 hours ago</a>
//                 </div>
//                 <div class="fs-m">
//                     <p>Awesome!</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

// // Function to filter posts by a given user
// const filterPostsByUser = (posts, userName) => {
//   return posts.filter((post) => post.author === userName);
// };

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
