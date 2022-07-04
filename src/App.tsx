import { selectAirQualityStations } from "./services/api";
import { useAppSelector } from "./store";
import "./styles.css";

export default function App() {
  const airQualityStations = useAppSelector(selectAirQualityStations);

  return (
    <div className="App">
        RTK Typing of Selector
    </div>
  );
}
