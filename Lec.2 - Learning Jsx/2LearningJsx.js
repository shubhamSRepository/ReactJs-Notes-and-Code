/* FEATURES OF REACT */
/*
1. Declatrative
2. Component Based
3. Efficient for creating SPAs(single page applications)
 */





/** RENDERING FUNCTION IN JSX AND DIFFERENT DATA TYPES */
// function sum() {
//     /* to use function inside component as we are using sum() inside App(), sum() must return something*/
//     let a = 10 + 5;
//     return a;
// }

// const header = <h2>Jsx Expression</h2>;

// function App() {
//     var name = "Alexa";
//     var age = 10;
//     let demo = null;
//     let undef;
//     const bool = true;


//     return <>
//         <h1>we are learning jsx</h1>
//         {header}
//         <p>String: {name}</p>
//         <p>Number: {age}</p>
//         <p>Null value: {demo}</p>
//         <p>undefined value: {undef}</p>
//         <p>Boolean value: {bool}</p>
//         <p>Calling a function: {sum()}</p>
//     </>

// /* Null value ,undefined value, Boolean value will print nothing on screen */

// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);






/** Fahrenheit to celcius converter */
// const App = () => {

//     let tempF= 202;
//     let tempC = (tempF - 32)*( 5/9) ;

//      return (
//        <>
//        <h2>Temperature Converter</h2>
//        <p>Temperature in fahrenheit: {tempF}</p>
//        <p>Temperature in celcius: {tempC}</p>


//        </>
//      );
//    };

//    const rootElement = ReactDOM.createRoot(document.getElementById("root"));
//    rootElement.render(<App />);



/** RENDERING ARRAY AND OBJECT TO JSX */

// const arr = [1,2,3];

// const obj = {
//    name:"shubham",
//    age:26
// }

// function App(){

//     return(
//         <>
//         <p>Array: {arr}</p>
//         <p>Object-Name: {obj.name}</p>
//         <p>Object-Age: {obj.age}</p>

//         </>
//     )
// }

/* we cannot render object directly to dsx but we can render elements of object */

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);




/* Printing each element of array in a new line  */
// const arr = [1,2,3];

// const obj = {
//    name:"shubham",
//    age:26
// }

// function App(){

//     return(
//         <>
//         <p>Array: {arr.map((num)=><h3>{num}</h3>)}</p>
//         <p>Object-Name: {obj.name}</p>
//         <p>Object-Age: {obj.age}</p>

//         </>
//     )
// }

/* Loops do not work in React because they don't return any value so we use maps and filters */
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);







/*KEYS IN REACT */
/*
'key' is a property in react.
Arrays are also known as lists in React. So whenever we use lists in React, React expects us
to provide a unique key to every element of list, it is not mandatory but it is good practice.
 */

function Car() {
    const cars = ["BMW", "Porshe", "Ford", "Audi"];

    return (
        <>

            <h1>List of Cars</h1>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}> {car} </li>
                ))}
            </ul>
        </>
    )
}

// /* In above code we have assigned index number as a key to the elements of list 'cars'. */

// ReactDOM.createRoot(document.getElementById("root")).render(<Car />);







/* STUDENTS INFORMATION ASSIGNMENT */

// const students = [
//     {
//         Name: "Peter Parker",
//         Age: 45,
//         SuperHero: "Spider Man"
//     },
//     {
//         Name: "Thor Odinson",
//         Age: 1000,
//         SuperHero: "Thor"
//     },
//     {
//         Name: "Steve Rodgers",
//         Age: 110,
//         SuperHero: "Captain America"
//     },
//     {
//         Name: "Tony Stark",
//         Age: 50,
//         SuperHero: "Iron Man"
//     },
// ];

// function Student() {
//     return (
//         <>
//             <h1> Student Details </h1>
//             <table>

//                 <thead>
//                     <tr>
//                         <th> Name</th>
//                         <th> Age </th>
//                         <th> SuperHero </th>
//                     </tr>
//                 </thead>

//                 <tbody>

//                     {students.map((student,index) => (
//                         <tr key = {index}>
//                             <td>{student.Name}</td>
//                             <td>{student.Age}</td>
//                             <td>{student.SuperHero}</td>
//                         </tr>
//                     ))}

//                 </tbody>

//             </table>
//         </>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Student />);





/* ADDING IMAGES TO STUDENTS INFORMATION ASSIGNMENT */

// const students = [
//     {
//         Name: "Peter Parker",
//         Age: 45,
//         SuperHero: "Spider Man",
//         Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsBI-8tOmkOHwOE_vj_FvrLis_OzLVV5gpw&usqp=CAU"
//     },
//     {
//         Name: "Thor Odinson",
//         Age: 1000,
//         SuperHero: "Thor",
//         Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSYOobL0njpY62EpobBwY-f3B7OezMASevw&usqp=CAU"
//     },
//     {
//         Name: "Steve Rodgers",
//         Age: 110,
//         SuperHero: "Captain America",
//         Image: "https://kbimages1-a.akamaihd.net/a5b3900b-38e6-4c4e-ad26-064292e85620/353/569/90/False/marvel-s-captain-america-1.jpg"
//     },
//     {
//         Name: "Tony Stark",
//         Age: 50,
//         SuperHero: "Iron Man",
//         Image: "https://i.pinimg.com/550x/5d/d2/c8/5dd2c8f82ef46e0db3fe07a6e3285c2f.jpg"
//     },
// ];

// function Student() {
//     return (
//         <>
//             <h1> Student Details </h1>
//             <table>

//                 <thead>
//                     <tr>
//                         <th> Name</th>
//                         <th> Age </th>
//                         <th> SuperHero </th>
//                         <th> Image </th>
//                     </tr>
//                 </thead>

//                 <tbody>

//                     {students.map((student, index) => (
//                         <tr key={index}>
//                             <td>{student.Name}</td>
//                             <td>{student.Age}</td>
//                             <td>{student.SuperHero}</td>
//                             <td><img src={student.Image} /></td>
//                         </tr>
//                     ))}

//                 </tbody>

//             </table>
//         </>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Student />);



/* RENDERING TWO COMPONENTS SIMULTANEOUSLY (CAR AS WELL STUDENT COMPONENT) */

// function App() {
//     return <>
//         <Car />
//         <Student />
//     </>
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);