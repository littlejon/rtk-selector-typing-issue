// import { useReducer } from "react";
import "./styles.css";
// import { useGetPokemonByNameQuery } from "./services/api";

// function Bulbasaur() {
//   const { data, isError, isLoading } = useGetPokemonByNameQuery("bulbasaur");

//   return (
//     <div>
//       {isError ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <>
//           <h3>{data.species.name}</h3>
//           <img src={data.sprites.front_shiny} alt={data.species.name} />
//         </>
//       ) : null}
//     </div>
//   );
// }

export default function App() {
//   const [isBulbasaurMounted, toggleIsBulbasaurMounted] = useReducer(
//     (state) => !state,
//     true
//   );
  return (
    <div className="App">
        RTK Typing of Selector
      {/* <h1>Data fetching/caching example - RTK Query</h1>
      <p>
        This example demonstrates an implementation of data caching and request
        lifecycle status monitoring using RTK Query.
      </p>
      <p>
        Open your network tab, then click 'Toggle bulbasaur' to unmount/remount
        the component.
      </p>
      <p>
        You will observe that only one request for bulbsaur will be sent for the
        session.
      </p>
      <p>
        Try throttling your network speed, and you will also observe that some
        'Loading' text is presented while the request is in flight.
      </p>
      <button onClick={toggleIsBulbasaurMounted}>Toggle bulbasaur</button>
      {isBulbasaurMounted && <Bulbasaur />} */}
    </div>
  );
}
