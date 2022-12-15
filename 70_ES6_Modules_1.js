// The idea behind a module is that it's a file of reuseable code
// We can import sections of pre-written code to use whenever
// Great for any general utility values and functions
// Helps to make your code more reusable and maintainable
// Think of modules as seperate chapters of a book

import {PI, getCircumference, getArea} from "./70_ES6_Modules_2_math_util.js";
// after from the file path can be absolute or relative (we have used relative path)
// import * as MathUtil from "./math_util.js";

console.log(PI); // console.log(MathUtil.PI);

let circumference = getCircumference(10); // MathUtil.getCircumference(10);
console.log(circumference);

let area = getArea(10); // MathUtil.getArea(10);
console.log(area);

/*
<body>
    <script type="module" src="70_ES6_Modules_1.js"></script>
</body>
*/