import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PokemonsContainer } from "./containers/PokemonsContainer";
import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/", 
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer/>
        </main>
    </ApolloProvider>
  );
}

export default App;
