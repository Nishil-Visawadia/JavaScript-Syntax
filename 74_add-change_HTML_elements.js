// add / change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

/*
const nameTag = document.createElement("h1");
nameTag.innerHTML = window.prompt("Enter your name");
document.body.append(nameTag);
*/

/*
const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("Enter your name");
document.body.append(nameTag);
*/

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
// myList.append(listItem);
// myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);


/*
<body>
    <ul id="fruit">
        <li>apple</li>
        <li>orange</li>
        <li>banana</li>
    </ul>
    <script src="74_add-change_HTML_elements.js"></script>
</body>
*/