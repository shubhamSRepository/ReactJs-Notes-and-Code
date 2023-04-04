/* JAVASCRIPT */
// const heading = document.createElement("h2");
// heading.textContent = "Hello World";
// heading.className = "header";
// document.getElementById("root").append(heading);





/* REACT WITH JS */

// const reactHeading = React.createElement("h1",{className : "head", id:"reactHead", children : "Hello React" });
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);





/* REACT WITH JSX */

// const jsxHeading = <>
//     <h1>Hello jsx</h1>
//     <p>i m jsx</p>
// </>

/* React Frogments
1. '<></>' these are react frangments.
2. we use react fragments when we need to pass more than html element like we are passing in 'jsxHeading'.
*/

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);





/* REACT COMPONENTS */
/*
 There are two ways to create components in react i.e
1. functional component (similar to functions in js)
2. class based components (similar to classes in js)
*/
/* 
Naming of react components starts with a capital letter to differentiate them from native components
such as normal functions.
*/

/* FUNCTIONAL COMPONENTS */
// function App() {

//     return (
//         <>
//             <h1>Hello jsx</h1>
//             <p>i m inside functional component</p>
//         </>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(App());
/*Although is will absolutely fine but '.render(App())' is not a correct way to render functional component
because App() will be considered as function not as a component*/

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);// This is the correct way to render a component






/* FUNCTIONAL COMPONENT USING ARROW FUNCTIONS */

// const App = () => <>
//     <h1>Hello jsx</h1>
//     <p>i m inside functional component using arrow function</p>
// </>

/* 
1.we can skip writing return in arrow function like we did in App because unlike simple functions 
arrow functions implicitly(naturally).
2.arrow function implicitly returns only when curly braces are not provided i.e. we only want to return  one expression.
*/
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);





/** Passing more than one component to .render() */

// const App = () =>( 
//     <>
//         <h1>Hello jsx</h1>
//         <p>i m inside functional component using arrow function</p>
//     </>
// )

// function Name(){
//     return(
//         <>
//         <p>Jsx is JAVASCRIPT xml</p>
//         </>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<><App /><Name/></>); // we have used react fragments to pass two components to .render();




