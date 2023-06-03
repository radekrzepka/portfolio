import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
	return (
		<div className="bg-websiteBackground pl-12 font-font text-whiteTextColor lg:flex lg:pl-24">
			<SideBar />
			<Main />
		</div>
	);
};

export default App;
