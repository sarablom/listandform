
const list = document.querySelector(".list");
const form = document.querySelector(".form");
const titel = document.querySelector(".titel");
const description = document.querySelector(".description");
const example = document.querySelector(".example");


let items = [];
let titleInput = "";
let descriptionInput = "";
let exampleInput = "";

titel.addEventListener("change", (e) => {
  titleInput = e.target.value;
});

description.addEventListener("change", (e) => {
  descriptionInput = e.target.value;
});

example.addEventListener("change", (e) => {
  exampleInput = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let randomId = Math.floor(Math.random() * 10000);

  const newObject = {
    id: randomId,
    name: titleInput,
    description: descriptionInput,
    code: exampleInput,
  };

  const htmlString = `<li class="list__item" id=${randomId}>
            <h2 class="list-title">${titleInput}</h2>
            <button class="list-btn btn">Delete item</button>
            <h3>Description</h3>
            <p class="column">${descriptionInput}</p>
            <h3>Example code</h3>
            <p class="column">${exampleInput}</p>
          </li>`;

  list.innerHTML += htmlString;
  items.push(newObject);
  form.reset();
  localStorage.setItem('items', JSON.stringify(items));
});

const displayItems = () => {
  if (JSON.parse(localStorage.getItem("items"))) {
    const newItemsArray = JSON.parse(localStorage.getItem("items"))

    const htmlString = newItemsArray
    .map((item) => {
      return `<li class="list__item" id=${item.id}>
           <h2 class="list-title">${item.name}</h2>
           <button class="list-btn btn">Delete item</button>
           <h3>Description</h3>
           <p class="column">${item.description}</p>
           <h3>Example code</h3>
           <p class="column">${item.code}</p>
       </li>`;
    })
    .join("");

    list.innerHTML += htmlString;

  } else {
    const htmlString = items
    .map((item) => {
      return `<li class="list__item" id=${item.id}>
           <h2 class="list-title">${item.name}</h2>
           <button class="list-btn btn">Delete item</button>
           <h3>Description</h3>
           <p class="column">${item.description}</p>
           <h3>Example code</h3>
           <p class="column">${item.code}</p>
       </li>`;
    })
    .join("");

    list.innerHTML += htmlString;

    
  }
 
  // const deleteBtn = document.querySelectorAll(".list-btn");
    
  //   deleteBtn.addEventListener('click', (e) => {
  //     console.log(e.target.parentElement.id);
    
    //   for(let i = 0; i < items.length; i++){ 
        
    //     if (items[i] === item.id) { 
    
    //         items.splice(i, 1); 
    //     }
    
    // }
    // })
};

displayItems();

// const items = [
//   {
//     id: "1",
//     name: "Array length",
//     description: "Get the length of an array",
//     code: "let length = array.length;",
//   },
//   {
//     id: "2",
//     name: "For each",
//     description: "Executes a provided function once for each array element",
//     code: "array1.forEach(element => console.log(element));",
//   },
//   {
//     id: "3",
//     name: "Map",
//     description:
//       "creates a new array populated with the results of calling a provided function on every element in the calling array",
//     code: "const map1 = array1.map(x => x * 2);",
//   },
//   {
//     id: "4",
//     name: "Find",
//     description:
//       "Returns the value of the first element in the provided array that satisfies the provided testing function",
//     code: "const found = array1.find(element => element > 10);",
//   },
//   {
//     id: "5",
//     name: "Filter",
//     description:
//       "Creates a new array with all elements that pass the test implemented by the provided function",
//     code: "const result = words.filter(word => word.length > 6);",
//   },
//   {
//     id: "6",
//     name: "Reduce",
//     description:
//       "Executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value",
//     code: "const reducer = (previousValue, currentValue) => previousValue + currentValue;",
//   },
//   {
//     id: "7",
//     name: "Some",
//     description:
//       "Tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array",
//     code: "const even = (element) => element % 2 === 0;",
//   },
//   {
//     id: "8",
//     name: "Every",
//     description:
//       "Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value",
//     code: "array1.every(isBelowThreshold)",
//   },
//   {
//     id: "9",
//     name: "DOM",
//     description:
//       "Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value",
//     code: "-",
//   },
//   {
//     id: "10",
//     name: "document.querySelector",
//     description:
//       "Används för att hitta ett element i DOM, med hjälp av en CSS-selektor.",
//     code: "let button = document.querySelector('.form button');",
//   },
//   {
//     id: "11",
//     name: "element.addEventListener",
//     description: "Används för att lägga till funktionalitet till ett element.",
//     code: 'myBtn.addEventListener("click", function() {});',
//   },
//   {
//     id: "12",
//     name: "element.innerText",
//     description: "Används för att lägga till text i ett HTML-element.",
//     code: "htmlElement.innerText = string",
//   },
//   {
//     id: "13",
//     name: "element.innerHTML",
//     description: "Används för att lägga till HTML-element.",
//     code: 'document.getElementById("demo").innerHTML = "Hello World";',
//   },
//   {
//     id: "14",
//     name: "document.createElement",
//     description: "Anävnds för att skapa ett nytt element.",
//     code: 'var node = document.createElement("LI");',
//   },
  // {
  //   id: "15",
  //   name: "element.appendChild",
  //   description: "Använda för att lägga till ett element.",
  //   code: 'document.getElementById("myList").appendChild(node);',
  // },
// ];
