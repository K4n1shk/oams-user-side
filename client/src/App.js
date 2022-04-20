import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import Loading from "./components/Loading";
import Form from "./components/Form";

function App() {
	const user = localStorage.getItem("token");
	const userLogged = localStorage.getItem("user");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{user && <Route path="/contact" element={<Contact />} />}
			{user && <Route path="/about" data={userLogged} element={<About />} />}
			{user && <Route path="/loading" exact element={<Loading />} />}
			{user && <Route path="/form" exact element={<Form />} />}
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="*" exact element={<Error />} />
		</Routes>
	);
}

export default App;
