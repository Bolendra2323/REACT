// Below is a functional Component

// import React from 'react'

// const User = () => {
//   return (
//     <h1>Hello I am writing User component in functional component</h1>
//   )
// }

// export default User

// ***************************************************************************************************************************

// Below is a class Component

// In a class component never forget to write render ,
// import React, { Component } from "react";

// export default class User extends Component {
//   render() {
//     return <h1> Hello User I am using class component</h1>;
//   }
// }

// ***************************************************************************************************************************

// Here below functional Component is the child component

// import React from "react";

// function User(props){
//     return(
//         <div>
//             <h1>Hello User I am learning pass function as Props</h1>
//             <button onClick={props.data}>Click Me</button>
//         </div>
//     )
// }

// export default User;

// ***************************************************************************************************************************

// Here i will be using render method

// import React from 'react';
// class User extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             email:"bolendra10@gmail.com"
//         }
//     }
//     render(){
//         console.log("Rener Method",this.state.email)
//         return(
//             <div>
//                 <h1>User Component</h1>
//                 <button onClick={()=>this.setState({email:"NewBolendra@gmail.com"})}>Update Email</button>
//             </div>
//         )
//     }
// }

// export default User;

// ***************************************************************************************************************************
// UseEffect with condition

// import "./App.css";
// import React, { useEffect, useState } from "react";
// function App(props) {
//   useEffect(() => {
//     alert("count is:-" + props.count);
//   }, [props.count]);
//   return (
//     <div className="App">
//       <h1>Count Props: {props.count}</h1>
//       <h1>Data Props:{props.data}</h1>
//     </div>
//   );
// }
// export default App;

// ***************************************************************************************************************************

// Reuse Component in Loop

// function User(props) {
//   return (
//     <div>
//       <span>{props.data.name} </span>
//       <span>{props.data.email} </span>
//       <span>{props.data.contact} </span>

//     </div>
//   );
// }

// export default User;

// ***************************************************************************************************************************

// Send data from child component to parent component

// function User(props)
// {

//   const name="Bolendra Moran"
//   return (
//     <div>
//       <h1>User Name is:-</h1>
//       <button onClick={()=>props.getData(name)}>Click Me</button>
//     </div>
//   )
// }

// export default User;

// ***************************************************************************************************************************



