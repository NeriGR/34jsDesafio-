const posts = [
    {
      author: "Jane Doe",
      date: "2024-07-02",
      title: "Introducción a JavaScript",
      content: "JavaScript es un lenguaje de programación esencial para el desarrollo web. Permite crear sitios web interactivos y dinámicos. Aprender JavaScript es fundamental para cualquier desarrollador web.",
      hashtag: "#javascript #html #css",
      reacciones: 85,
      comentarios: 23,
      relevant: 5,
      img: "https://picsum.photos/id/1/200/300"
    },
    {
      author: "John Smith",
      date: "2024-07-03",
      title: "Estilos con CSS",
      content: "CSS se utiliza para dar estilo a los sitios web. Desde colores hasta fuentes y layouts, CSS es la herramienta para hacer que tus sitios web se vean bien.",
      hashtag: "#css #html #sass",
      reacciones: 68,
      comentarios: 12,
      relevant: 2,
      img: "https://picsum.photos/id/2/200/300"
    },
    {
      author: "Alice Johnson",
      date: "2024-07-04",
      title: "Ventajas de usar Bootstrap",
      content: "Bootstrap es un framework de CSS que facilita la creación de sitios web responsive. Con sus componentes predefinidos, puedes desarrollar sitios web rápidamente y con menos esfuerzo.",
      hashtag: "#bootstrap #css #html",
      reacciones: 92,
      comentarios: 30,
      relevant: 3,
      img: "https://picsum.photos/id/3/200/300"
    },
    {
      author: "Bob Brown",
      date: "2024-07-05",
      title: "HTML5: Novedades y Mejores Prácticas",
      content: "HTML5 ha traído muchas mejoras al desarrollo web, incluyendo nuevas etiquetas y APIs que facilitan la creación de contenido multimedia y aplicaciones web ricas.",
      hashtag: "#html #css #javascript",
      reacciones: 74,
      comentarios: 18,
      relevant: 4,
      img: "https://picsum.photos/id/4/200/300"
    },
    {
      author: "Clara White",
      date: "2024-07-06",
      title: "Creando Componentes con React",
      content: "React es una biblioteca de JavaScript para construir interfaces de usuario. Su enfoque basado en componentes permite desarrollar aplicaciones web modulares y mantenibles.",
      hashtag: "#react #javascript #html",
      reacciones: 88,
      comentarios: 27,
      relevant: 2,
      img: "https://picsum.photos/id/5/200/300"
    },
    {
      author: "Daniel Green",
      date: "2024-07-07",
      title: "Sass: Hojas de Estilo Avanzadas",
      content: "Sass es una extensión de CSS que permite usar variables, anidamiento y mixins. Facilita la escritura y mantenimiento de hojas de estilo grandes y complejas.",
      hashtag: "#sass #css #bootstrap",
      reacciones: 79,
      comentarios: 20,
      relevant: 4,
      img: "https://picsum.photos/id/6/200/300"
    },
    {
      author: "Emma Davis",
      date: "2024-07-08",
      title: "Fundamentos de JavaScript ES6",
      content: "ES6, o ECMAScript 2015, introdujo muchas mejoras en JavaScript, como las flechas (arrow functions), clases, y promesas. Estas características hacen el código más legible y eficiente.",
      hashtag: "#javascript #react #html",
      reacciones: 94,
      comentarios: 35,
      relevant: 1,
      img: "https://picsum.photos/id/7/200/300"
    },
    {
      author: "Frank Harris",
      date: "2024-07-09",
      title: "CSS Grid: Diseño Moderno",
      content: "CSS Grid es una técnica de diseño de layout que permite crear layouts complejos y responsive de manera sencilla y eficiente. Es una herramienta poderosa para los desarrolladores modernos.",
      hashtag: "#css #html #sass",
      reacciones: 76,
      comentarios: 22,
      relevant: 2,
      img: "https://picsum.photos/id/8/200/300"
    },
    {
      author: "Grace Lee",
      date: "2024-07-10",
      title: "Bootstrap 5: Nuevas Funcionalidades",
      content: "Bootstrap 5 ha introducido nuevas funcionalidades y mejoras, como el soporte para Flexbox y la eliminación de jQuery. Estas mejoras hacen que Bootstrap sea más rápido y fácil de usar.",
      hashtag: "#bootstrap #css #html",
      reacciones: 89,
      comentarios: 29,
      relevant: 2,
      img: "https://picsum.photos/id/9/200/300"
    },
    {
      author: "Henry Clark",
      date: "2024-07-11",
      title: "HTML Semántico: Buenas Prácticas",
      content: "El uso de HTML semántico mejora la accesibilidad y el SEO de tu sitio web. Etiquetas como <article>, <section> y <nav> hacen que el contenido sea más comprensible para los motores de búsqueda y los usuarios.",
      hashtag: "#html #css #javascript",
      reacciones: 65,
      comentarios: 17,
      relevant: 5,
      img: "https://picsum.photos/id/10/200/300"
    },
    {
      author: "Irene Young",
      date: "2024-07-12",
      title: "Introducción a los Hooks de React",
      content: "Los Hooks de React permiten usar estado y otras características de React sin escribir una clase. Hooks como useState y useEffect han simplificado el desarrollo de componentes funcionales.",
      hashtag: "#react #javascript #css",
      reacciones: 93,
      comentarios: 31,
      relevant: 2,
      img: "https://picsum.photos/id/11/200/300"
    },
    {
      author: "Jack King",
      date: "2024-07-13",
      title: "Variables en Sass: Cómo Utilizarlas",
      content: "Las variables en Sass te permiten almacenar valores reutilizables, como colores y tamaños de fuente. Esto hace que sea más fácil mantener y actualizar tu hoja de estilo.",
      hashtag: "#sass #css #bootstrap",
      reacciones: 70,
      comentarios: 19,
      relevant: 5,
      img: "https://picsum.photos/id/12/200/300"
    },
    {
      author: "Karen Baker",
      date: "2024-07-14",
      title: "JavaScript Asíncrono con Promesas",
      content: "Las promesas en JavaScript permiten manejar operaciones asíncronas de manera más eficiente. Promesas como fetch facilitan la realización de solicitudes HTTP sin bloquear la ejecución del código.",
      hashtag: "#javascript #react #html",
      reacciones: 87,
      comentarios: 26,
      relevant: 4,
      img: "https://picsum.photos/id/13/200/300"
    },
    {
      author: "Larry Adams",
      date: "2024-07-15",
      title: "Flexbox: Diseño Flexible con CSS",
      content: "Flexbox es un módulo de CSS que proporciona un diseño de caja flexible. Permite distribuir el espacio y alinear los elementos de manera eficiente, especialmente en layouts responsivos.",
      hashtag: "#css #html #sass",
      reacciones: 81,
      comentarios: 24,
      relevant: 2,
      img: "https://picsum.photos/id/14/200/300"
    },
    {
      author: "Maria Scott",
      date: "2024-07-16",
      title: "Creando Formularios con Bootstrap",
      content: "Bootstrap ofrece componentes y clases para crear formularios responsivos y accesibles. Estos elementos facilitan la creación de formularios atractivos y funcionales.",
      hashtag: "#bootstrap #css #html",
      reacciones: 77,
      comentarios: 21,
      relevant: 2,
      img: "https://picsum.photos/id/15/200/300"
    },
    {
      author: "Nathan Hill",
      date: "2024-07-17",
      title: "HTML5 Canvas: Dibujando en la Web",
      content: "La etiqueta <canvas> de HTML5 permite dibujar gráficos y animaciones directamente en la página web. Es una herramienta poderosa para crear juegos y aplicaciones interactivas.",
      hashtag: "#html #css #javascript",
      reacciones: 91,
      comentarios: 28,
      relevant: 5,
      img: "https://picsum.photos/id/16/200/300"
    },
    {
      author: "Olivia Mitchell",
      date: "2024-07-18",
      title: "React Router: Navegación en SPA",
      content: "React Router es una librería que permite manejar la navegación en aplicaciones de una sola página (SPA). Facilita la creación de rutas y la gestión del estado de la aplicación.",
      hashtag: "#react #javascript #html",
      reacciones: 90,
      comentarios: 30,
      relevant: 3,
      img: "https://picsum.photos/id/17/200/300"
    },
    {
      author: "Paul Turner",
      date: "2024-07-19",
      title: "Mixins en Sass: Reutilización de Estilos",
      content: "Los mixins en Sass permiten definir estilos que se pueden reutilizar en varias partes de tu hoja de estilo. Esto reduce la repetición de código y facilita el mantenimiento.",
      hashtag: "#sass #css #bootstrap",
      reacciones: 78,
      comentarios: 22,
      relevant: 2,
      img: "https://picsum.photos/id/18/200/300"
    },
    {
      author: "Quincy Nelson",
      date: "2024-07-20",
      title: "Async/Await en JavaScript: Simplificando el Código Asíncrono",
      content: "La sintaxis async/await en JavaScript permite escribir código asíncrono de manera más clara y legible. Facilita el manejo de promesas y errores en funciones asíncronas.",
      hashtag: "#javascript #react #html",
      reacciones: 95,
      comentarios: 32,
      relevant: 5,
      img: "https://picsum.photos/id/19/200/300"
    },
    {
      author: "Rachel Robinson",
      date: "2024-07-21",
      title: "CSS Transitions y Animations",
      content: "CSS proporciona herramientas para crear transiciones y animaciones suaves en tus elementos. Estas técnicas mejoran la experiencia del usuario al agregar dinamismo a tu sitio web.",
      hashtag: "#css #html #sass",
      reacciones: 84,
      comentarios: 25,
      relevant: 4,
      img: "https://picsum.photos/id/20/200/300"
    },
    {
        author: "Steve Rogers",
        date: "2024-07-22",
        title: "Componentes React Reutilizables",
        content: "Crear componentes reutilizables en React mejora la eficiencia y la mantenibilidad del código. Los componentes bien diseñados pueden ser utilizados en múltiples partes de la aplicación.",
        hashtag: "#react #javascript #html",
        reacciones: 95,
        comentarios: 33,
        relevant: 2,
        img: "https://picsum.photos/id/101/200/300"
      },
      {
        author: "Tina Brown",
        date: "2024-07-23",
        title: "Control de Flujo en Sass",
        content: "Sass permite el uso de estructuras de control como @if, @for, y @each, lo que te permite escribir hojas de estilo más dinámicas y complejas.",
        hashtag: "#sass #css #bootstrap",
        reacciones: 74,
        comentarios: 18,
        relevant: 4,
        img: "https://picsum.photos/id/102/200/300"
      },
      {
        author: "Uma Patel",
        date: "2024-07-24",
        title: "JavaScript DOM: Manipulación de Elementos",
        content: "El DOM de JavaScript permite acceder y manipular elementos HTML en la página. Con métodos como getElementById y querySelector, puedes cambiar dinámicamente el contenido y estilo de tu sitio web.",
        hashtag: "#javascript #html #css",
        reacciones: 80,
        comentarios: 21,
        relevant: 1,
        img: "https://picsum.photos/id/103/200/300"
      },
      {
        author: "Victor Lee",
        date: "2024-07-25",
        title: "Transiciones y Animaciones en CSS",
        content: "CSS ofrece propiedades para crear transiciones y animaciones suaves en tus elementos. Con transition y animation, puedes añadir efectos visuales atractivos a tu sitio web.",
        hashtag: "#css #html #sass",
        reacciones: 78,
        comentarios: 20,
        relevant: 2,
        img: "https://picsum.photos/id/104/200/300"
      },
      {
        author: "Wendy Harris",
        date: "2024-07-26",
        title: "Bootstrap Grid: Sistema de Diseño",
        content: "El sistema de grid de Bootstrap permite crear layouts responsivos con facilidad. Sus clases predefinidas para columnas y filas facilitan la organización del contenido en la página.",
        hashtag: "#bootstrap #css #html",
        reacciones: 84,
        comentarios: 23,
        relevant: 4,
        img: "https://picsum.photos/id/105/200/300"
      },
      {
        author: "Xavier Lewis",
        date: "2024-07-27",
        title: "HTML5 y Local Storage",
        content: "HTML5 introdujo la API de Local Storage, que permite almacenar datos en el navegador del usuario. Es útil para guardar preferencias y estados de aplicaciones web sin necesidad de un servidor.",
        hashtag: "#html #javascript #css",
        reacciones: 82,
        comentarios: 22,
        relevant: 3,
        img: "https://picsum.photos/id/106/200/300"
      },
      {
        author: "Yolanda Martin",
        date: "2024-07-28",
        title: "Estado Global en React con Context API",
        content: "La Context API de React permite gestionar el estado global de la aplicación de manera eficiente. Evita el 'prop drilling' y facilita el acceso a datos en toda la aplicación.",
        hashtag: "#react #javascript #html",
        reacciones: 96,
        comentarios: 34,
        relevant: 4,
        img: "https://picsum.photos/id/107/200/300"
      },
      {
        author: "Zachary Evans",
        date: "2024-07-29",
        title: "Funciones Anidadas en Sass",
        content: "Sass permite definir funciones personalizadas que pueden ser reutilizadas en tu hoja de estilo. Esto mejora la modularidad y la reutilización del código CSS.",
        hashtag: "#sass #css #bootstrap",
        reacciones: 73,
        comentarios: 19,
        relevant: 2,
        img: "https://picsum.photos/id/108/200/300"
      },
      {
        author: "Angela Campbell",
        date: "2024-07-30",
        title: "Eventos en JavaScript",
        content: "Los eventos en JavaScript permiten interactuar con el usuario. Con addEventListener, puedes capturar y manejar eventos como clics y movimientos del mouse para mejorar la interactividad del sitio.",
        hashtag: "#javascript #html #css",
        reacciones: 85,
        comentarios: 24,
        relevant: 4,
        img: "https://picsum.photos/id/109/200/300"
      },
      {
        author: "Brian Wright",
        date: "2024-07-31",
        title: "Diseño de Menús con CSS",
        content: "Con CSS puedes diseñar menús de navegación atractivos y funcionales. Utilizando flexbox o grid, puedes crear menús horizontales y verticales que se adapten a cualquier dispositivo.",
        hashtag: "#css #html #sass",
        reacciones: 77,
        comentarios: 20,
        relevant: 3,
        img: "https://picsum.photos/id/110/200/300"
      },
      {
        author: "Charlotte Turner",
        date: "2024-08-01",
        title: "Bootstrap Modal: Ventanas Emergentes",
        content: "Los modales de Bootstrap permiten crear ventanas emergentes de manera sencilla. Son útiles para mostrar información adicional sin redirigir al usuario a otra página.",
        hashtag: "#bootstrap #css #html",
        reacciones: 88,
        comentarios: 27,
        relevant: 3,
        img: "https://picsum.photos/id/111/200/300"
      },
      {
        author: "Derek Carter",
        date: "2024-08-02",
        title: "HTML5 Video y Audio",
        content: "HTML5 permite la inclusión de video y audio nativos en la página web sin necesidad de plugins. Las etiquetas <video> y <audio> facilitan la reproducción de contenido multimedia.",
        hashtag: "#html #css #javascript",
        reacciones: 81,
        comentarios: 22,
        relevant: 4,
        img: "https://picsum.photos/id/112/200/300"
      },
      {
        author: "Elaine Stewart",
        date: "2024-08-03",
        title: "Gestión de Estado con Redux",
        content: "Redux es una librería para gestionar el estado de aplicaciones JavaScript. Es comúnmente utilizada con React para manejar el estado global de manera predecible y eficiente.",
        hashtag: "#react #javascript #html",
        reacciones: 92,
        comentarios: 29,
        relevant: 5,
        img: "https://picsum.photos/id/113/200/300"
      },
      {
        author: "Felix Richardson",
        date: "2024-08-04",
        title: "Anidamiento en Sass: Mejor Organización",
        content: "El anidamiento en Sass permite estructurar el CSS de manera jerárquica, reflejando la estructura del HTML. Esto mejora la legibilidad y organización de la hoja de estilo.",
        hashtag: "#sass #css #bootstrap",
        reacciones: 69,
        comentarios: 18,
        relevant: 4,
        img: "https://picsum.photos/id/114/200/300"
      },
      {
        author: "Grace Morgan",
        date: "2024-08-05",
        title: "Manipulación de Arrays en JavaScript",
        content: "JavaScript ofrece varios métodos para manipular arrays, como map, filter y reduce. Estos métodos facilitan la transformación y manejo de datos en tus aplicaciones.",
        hashtag: "#javascript #html #css",
        reacciones: 87,
        comentarios: 26,
        relevant: 4,
        img: "https://picsum.photos/id/115/200/300"
      },
      {
        author: "Harry Reed",
        date: "2024-08-06",
        title: "Tipografía Web con CSS",
        content: "Con CSS puedes controlar la tipografía de tu sitio web, desde fuentes hasta tamaños y estilos. Utilizando @font-face, puedes incluir fuentes personalizadas para mejorar el diseño.",
        hashtag: "#css #html #sass",
        reacciones: 75,
        comentarios: 19,
        relevant: 1,
        img: "https://picsum.photos/id/116/200/300"
      },
      {
        author: "Isabel Foster",
        date: "2024-08-07",
        title: "Botones Personalizados con Bootstrap",
        content: "Bootstrap facilita la creación de botones personalizados con sus clases predefinidas. Puedes ajustar colores, tamaños y estilos para que se adapten al diseño de tu sitio web.",
        hashtag: "#bootstrap #css #html",
        reacciones: 79,
        comentarios: 20,
        relevant: 1,
        img: "https://picsum.photos/id/117/200/300"
      },
      {
        author: "Jason Hughes",
        date: "2024-08-08",
        title: "HTML5 Drag and Drop",
        content: "La API de Drag and Drop de HTML5 permite a los usuarios arrastrar y soltar elementos dentro de la página web. Es ideal para crear interfaces interactivas y personalizables.",
        hashtag: "#html #css #javascript",
        reacciones: 84,
        comentarios: 23,
        relevant: 2,
        img: "https://picsum.photos/id/118/200/300"
      },
      {
        author: "Karen Perry",
        date: "2024-08-09",
        title: "Implementando React Context",
        content: "React Context es una herramienta poderosa para compartir datos entre componentes sin necesidad de pasar props manualmente. Simplifica la gestión de estado en aplicaciones complejas.",
        hashtag: "#react #javascript #html",
        reacciones: 93,
        comentarios: 30,
        relevant: 3,
        img: "https://picsum.photos/id/119/200/300"
      },
      {
        author: "Larry Campbell",
        date: "2024-08-10",
        title: "Compilación de Sass a CSS",
        content: "Sass necesita ser compilado a CSS para ser usado en navegadores. Herramientas como Node-sass o Dart-sass facilitan esta tarea, permitiendo usar todas las características avanzadas de Sass.",
        hashtag: "#sass #css #bootstrap",
        reacciones: 71,
        comentarios: 20,
        relevant: 2,
        img: "https://picsum.photos/id/120/200/300"
      },
      {
        author: "Maria Phillips",
        date: "2024-08-11",
        title: "JSON en JavaScript",
        content: "JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos. Es fácil de leer y escribir para humanos, y fácil de parsear y generar para máquinas.",
        hashtag: "#javascript #html #css",
        reacciones: 82,
        comentarios: 21,
        relevant: 1,
        img: "https://picsum.photos/id/150/200/300"
      },
      {
        author: "Nathan Lewis",
        date: "2024-08-12",
        title: "Animaciones con Sass",
        content: "Sass permite crear animaciones CSS con mayor facilidad mediante mixins y funciones personalizadas. Esto mejora la legibilidad y la modularidad de tus animaciones.",
        hashtag: "#sass #css #bootstrap",
        reacciones: 73,
        comentarios: 18,
        relevant: 5,
        img: "https://picsum.photos/id/151/200/300"
      },
      {
        author: "Olivia Brooks",
        date: "2024-08-13",
        title: "Fetch API en JavaScript",
        content: "La Fetch API permite realizar solicitudes HTTP de manera fácil y eficiente. Es una alternativa moderna a XMLHttpRequest y es compatible con promesas para un manejo asíncrono más limpio.",
        hashtag: "#javascript #html #css",
        reacciones: 86,
        comentarios: 25,
        relevant: 3,
        img: "https://picsum.photos/id/152/200/300"
      },
      {
        author: "Paul Rivera",
        date: "2024-08-14",
        title: "Bootstrap y Flexbox: Uniendo Fuerzas",
        content: "Bootstrap 5 integra Flexbox para un diseño de layout más flexible y eficiente. Esto permite crear diseños complejos con menos código y mejor rendimiento.",
        hashtag: "#bootstrap #css #html",
        reacciones: 87,
        comentarios: 26,
        relevant: 2,
        img: "https://picsum.photos/id/153/200/300"
      },
      {
        author: "Quinn Ross",
        date: "2024-08-15",
        title: "HTML5 y SEO",
        content: "HTML5 ofrece nuevas etiquetas y atributos que mejoran la accesibilidad y el SEO de los sitios web. Etiquetas como <article>, <header> y <footer> ayudan a estructurar mejor el contenido.",
        hashtag: "#html #css #javascript",
        reacciones: 83,
        comentarios: 22,
        relevant: 4,
        img: "https://picsum.photos/id/154/200/300"
      },
      {
        author: "Rachel Clark",
        date: "2024-08-16",
        title: "React y Componentes de Clase",
        content: "Aunque los componentes funcionales son la norma en React, los componentes de clase siguen siendo útiles para ciertos casos. Entender ambos enfoques es clave para ser un desarrollador React competente.",
        hashtag: "#react #javascript #html",
        reacciones: 91,
        comentarios: 28,
        relevant: 5,
        img: "https://picsum.photos/id/155/200/300"
      },
      {
        author: "Steve Martinez",
        date: "2024-08-17",
        title: "Estructura de Proyectos con Sass",
        content: "Una buena estructura de proyectos en Sass facilita el mantenimiento y la escalabilidad. Organiza tus archivos en módulos y utiliza @import para mantener tu código limpio y ordenado.",
        hashtag: "#sass #css #bootstrap",
        reacciones: 70,
        comentarios: 19,
        relevant: 2,
        img: "https://picsum.photos/id/156/200/300"
      },
      {
        author: "Tina Foster",
        date: "2024-08-18",
        title: "Arrays Multidimensionales en JavaScript",
        content: "Los arrays multidimensionales en JavaScript permiten almacenar datos en estructuras complejas. Son útiles para manejar tablas de datos y otras colecciones de datos anidadas.",
        hashtag: "#javascript #html #css",
        reacciones: 78,
        comentarios: 20,
        relevant: 2,
        img: "https://picsum.photos/id/157/200/300"
      },
      {
        author: "Uma Harris",
        date: "2024-08-19",
        title: "Componentes Personalizados en Bootstrap",
        content: "Bootstrap permite la creación de componentes personalizados utilizando sus utilidades y mixins. Esto te permite mantener un diseño consistente mientras añades funcionalidad única.",
        hashtag: "#bootstrap #css #html",
        reacciones: 84,
        comentarios: 23,
        relevant: 3,
        img: "https://picsum.photos/id/158/200/300"
      },
      {
        author: "Victor Kelly",
        date: "2024-08-20",
        title: "HTML5 y Formularios Dinámicos",
        content: "HTML5 facilita la creación de formularios dinámicos con nuevas características como validación de campos y tipos de input específicos. Esto mejora la experiencia del usuario y reduce la necesidad de JavaScript adicional.",
        hashtag: "#html #css #javascript",
        reacciones: 80,
        comentarios: 21,
        relevant: 4,
        img: "https://picsum.photos/id/159/200/300"
      }
  ];


const savePost = async (postObject) => {
    await saveAllPost(posts)
    let response = await fetch(
        "https://js-7259a-default-rtdb.firebaseio.com/.json",
        {
            method: "POST",
            body: JSON.stringify(postObject),
        }
    );
    let data = await response.json();
    console.log(data);
    
    return data
 }

const saveAllPost = (postsArray) => {
    postsArray.forEach(posts => {
    savePost(posts)
    });
}
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
}
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
}
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