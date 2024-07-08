const URL_POST = "https://js-7259a-default-rtdb.firebaseio.com/.json";
//Funcion para crear post!
const postItem = async (postNew) => {
  try {
    const response = await fetch(URL_POST, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(postNew),
    });
    window.location.href = `../homeIndex.html`;
  } catch (error) {
    alert("Error al enviar los datos");
  }
};

//Manejar el envío del formulario:

const formIndex = document.querySelector("#formPostNew");
formIndex.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputList = document.querySelectorAll(
    '#formPostNew input[type="text"],input[type="url"], textarea'
  );
  console.log(inputList);
  const postData = {};
  inputList.forEach((input) => {
    postData[input.name] = input.value;
  });
  console.log(postData);
  postItem(postData);
});
