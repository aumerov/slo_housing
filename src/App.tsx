import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ReviewPage from "./pages/ReviewPage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<AuthPage />} />
				<Route path="/review" element={<ReviewPage />} />
			</Routes>
		</Router>
	);
};

// const App: React.FC = () => {
//     return (
//         <Router>
//             <Navbar />
//             <Switch>
//                 <Route path="/review/:id" component={ReviewPage} />
//                 {/* Other routes */}
//             </Switch>
//         </Router>
//     );
// };


export default App;

// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";

// function App() {
// 	let items = ["Apple", "orange", "strawberry", "pear"];

//   const handleSelectItem = (item: string) => {
//     console.log(item)
//   }

// 	return (
// 		<div>
// 			<ListGroup items={items} heading="Fruits" onSelectItem={handleSelectItem} />
//       <Alert />
// 		</div>
// 	);
// }

// export default App; // Use somewhere else

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
