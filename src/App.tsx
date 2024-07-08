import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<div className="p-6 grow">
					<Main />
				</div>
				<Footer />
			</>
		);
	}
}

export default App;
