import React from 'react';
import Input from './Input';

function Login(props) {
	return (
		<form className='form'>
			<Input type='text' placeholder='Username' />
			<Input type='Password' placeholder='Password' />
			{props.isRegistered === false && (
				<input type='password' placeholder='Confirm Password' />
			)}

			<button type='submit'>
				{props.isRegistered ? 'Login' : 'Register'}
			</button>
		</form>
	);
}

export default Login;

//////////////// hover over button /////////////

// import React, { useState } from "react";

// function App() {
//   const [changeText, setChangeText] = useState("Hello");
//   const [isMouseOver, setIsMouseOver] = useState(false);

//   function handleClick() {
//     setChangeText("Submitted");
//   }

//   function onMouseOver() {
//     setIsMouseOver(true);
//   }

//   function onMouseOut() {
//     setIsMouseOver(false);
//   }

//   return (
//     <div className="container">
//       <h1>{changeText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         style={{ backgroundColor: isMouseOver ? "black" : "white" }}
//         onClick={handleClick}
//         onMouseOver={onMouseOver}
//         onMouseOut={onMouseOut}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;

//////////// hello state ///////////

// function App() {
// 	const [name, setName] = useState("");
// 	const [headingText, setHeading] = useState("");

// 	function handleChange(event) {
// 	  setName(event.target.value);
// 	}

// 	function handleClick(event) {
// 	  setHeading(name);

// 	  event.preventDefault();
// 	}

// 	return (
// 	  <div className="container">
// 		<h1>Hello {headingText}</h1>
// 		<form onSubmit={handleClick}>
// 		  <input
// 			onChange={handleChange}
// 			type="text"
// 			placeholder="What's your name?"
// 			value={name}
// 		  />
// 		  <button>Submit</button>
// 		</form>
// 	  </div>
// 	);
//   }

//   export default App;
