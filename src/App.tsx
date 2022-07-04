import { selectAirQualityStations } from "./services/api";
import { useAppSelector } from "./store";
import "./styles.css";

export default function App() {
  const airQualityStations = useAppSelector(selectAirQualityStations);

  // $ tsc --pretty --noEmit
  // src/App.tsx:6:45 - error TS2345: Argument of type '((state: { api: CombinedState<ReplaceTagTypes<{}, "airQualityStations"> & { getStations: QueryDefinition<void, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "airQualityStations", AirQualityStation[], "api">; }, "airQualityStations", "api">; }) => AirQualityStation[] | undefin...' is not assignable to parameter of type '(state: { api: CombinedState<{}, never, "api">; }) => AirQualityStation[] | undefined'.
  //   Types of parameters 'state' and 'state' are incompatible.
  //     Type '{ api: CombinedState<{}, never, "api">; }' is not assignable to type '{ api: CombinedState<ReplaceTagTypes<{}, "airQualityStations"> & { getStations: QueryDefinition<void, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "airQualityStations", AirQualityStation[], "api">; }, "airQualityStations", "api">; }'.
  //       The types of 'api.provided' are incompatible between these types.
  //         Property 'airQualityStations' is missing in type 'InvalidationState<never>' but required in type 'InvalidationState<"airQualityStations">'.

  return (
    <div className="App">
        RTK Typing of Selector
    </div>
  );
}
