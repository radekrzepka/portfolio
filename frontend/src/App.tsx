import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";

const client = new ApolloClient({
	uri: "http://localhost:1337/graphql",
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div className="bg-websiteBackground pl-6 pt-12 font-font text-whiteTextColor lg:flex lg:px-24 lg:pt-0">
				<SideBar />
				<Main />
			</div>
		</ApolloProvider>
	);
};

export default App;
