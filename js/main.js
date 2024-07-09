//Method GET to get all users
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
  let usersArray = keysArray.map((key) => ({
    ...data[key],
    key,
  }));
  return usersArray;
};

//Card creation
const createCard = (postData) => {
  const body = document.querySelector("body");
  let {
    img,
    author,
    comentarios,
    date,
    hashtag,
    reacciones,
    relevant,
    title,
    avatar,
    timeread,
  } = postData;
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
  cardUserImage.src = avatar;
  cardUserImage.width = 32;
  cardUserImage.height = 32;
  firstSection.appendChild(cardUserImage);

  const cardUserContent = document.createElement("div");
  cardUserContent.classList.add("flex-grow-1", "ms-1", "mt-2");
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
    "link-title"
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
    "align-items-center"
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
  time.textContent = `${timeread} min read`;
  readingTime.appendChild(time);
};
// Function to print posts on DOM
const printPosts = async (getUsers, createCards) => {
  let posts = await getUsers();
  posts.forEach((post) => {
    createCards(post);
  });
};
printPosts(getAllUsers, createCard);

// Function to filter posts by relevant = 5

const filterPostsByRelevant = async (getUsersfuntion) => {
  let posts = await getUsersfuntion();
  const relevantButton = document.getElementById("relevantButton");
  relevantButton.addEventListener("click", () => {
    const relevantPosts = posts.filter((post) => post.relevant === 5);
    console.log(relevantPosts);
    // send the relevant posts to the createCard function and clear the previous posts
    const cardsContainer = document.querySelector("#allCards");
    cardsContainer.innerHTML = "";
    relevantPosts.forEach((post) => {
      createCard(post);
    });
  });
};
filterPostsByRelevant(getAllUsers);

const sortPostsByDate = async (getUsersfuntion) => {
  let posts = await getUsersfuntion();
  const sortButton = document.getElementById("latestButton");
  sortButton.addEventListener("click", () => {
    //2024-07-03
    const latestpost = posts.sort((a, b) => {
      const dateA = convertDateToTimeStamp(a.date);
      const dateB = convertDateToTimeStamp(b.date);
      return dateB - dateA;
    });
    const cardsContainer = document.querySelector("#allCards");
    cardsContainer.innerHTML = "";
    latestpost.forEach((post) => {
      createCard(post);
    });
  });
};
sortPostsByDate(getAllUsers);

const convertDateToTimeStamp = (date) => {
  const [year, month, day] = date.split("-");
  const dateObject = new Date(`${year}-${month}-${day}T00:00:00Z`);
  const timestamp = dateObject.getTime();
  return timestamp;
};

//function to sort by likes
const sortPostsByLikes = async (getUsersfuntion) => {
  let posts = await getUsersfuntion();
  const sortButton = document.getElementById("topButton");
  sortButton.addEventListener("click", () => {
    const latestpost = posts.sort((a, b) => {
      return b.reacciones - a.reacciones;
    });
    const cardsContainer = document.querySelector("#allCards");
    cardsContainer.innerHTML = "";
    latestpost.forEach((post) => {
      createCard(post);
    });
  });
};
sortPostsByLikes(getAllUsers);

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
