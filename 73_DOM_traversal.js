// .firstElementChild
let element_1 = document.body;
let child_1 = element_1.firstElementChild;
child_1.style.backgroundColor = "aqua";

let element_1_1 = document.querySelector("#fruits");
let child_1_1 = element_1_1.firstElementChild;
child_1_1.style.backgroundColor = "lightblue";


// .lastElementChild
let element_2 = document.body;
let child_2 = element_2.lastElementChild;
console.log(child_2);
child_2.style.backgroundColor = "aqua";
// the script element is the last child of the body

let element_2_1 = document.querySelector("#fruits");
let child_2_1 = element_2_1.lastElementChild;
child_2_1.style.backgroundColor = "lightblue";


// .parentElement
let element_3 = document.querySelector("#vegetables");
let parent_3 = element_3.parentElement;
parent_3.style.backgroundColor = "pink";


// .nextElementSibling
let element_4 = document.querySelector("#vegetables");
let sibling_4 = element_4.nextElementSibling;
sibling_4.style.backgroundColor = "red";


// .previousElementSibling
let element_5 = document.querySelector("#vegetables");
let sibling_5 = element_5.previousElementSibling;
sibling_5.style.backgroundColor = "purple";


// .children[]
let element_6 = document.querySelector("#deserts");
let child_6 = element_6.children[0]; // .children[1] or .children[2]
child_6.style.backgroundColor = "lightblue";


// Array.from(.children)
let element_7 = document.querySelector("#vegetables");
let children_7 = Array.from(element_7.children);
children_7.forEach(child => child.style.backgroundColor = "yellow");


/*
<body>
    <ul id="fruits">
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
    </ul>
    <ul id="vegetables">
        <li>Carrots</li>
        <li>Potatoes</li>
        <li>Onions</li>
    </ul>
    <ul id="deserts">
        <li>Ice Cream</li>
        <li>Cake</li>
        <li>Pie</li>
    </ul>

    <script src="73_DOM_traversal.js"></script>
</body>
*/