import "./App.css";
import Data from "./components/Data";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
	return (
		<div className="App d-flex">
			<Data />
			<Error />
			<Loading />
		</div>
	);
}

export default App;
