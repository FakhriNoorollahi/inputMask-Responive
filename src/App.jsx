import { useEffect, useState } from "react";
import Input from "./ui/Input";
import ListCiteis from "./components/ListCiteis";
import Loading from "./ui/Loading";

function App() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestedCities, setSuggestedCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedText, setCopiedText] = useState("");

  const handleChange = (e) => {
    setCopiedText("");
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function fetchCityName() {
      try {
        const res = await fetch("./cities.json");
        const { cities } = await res.json();
        setCities(cities);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCityName();
  }, []);

  useEffect(() => {
    if (!search.length) {
      setSuggestedCities([]);
      return;
    }

    const findCities = cities.filter((city) => city.startsWith(search));

    search === findCities[0]
      ? setSuggestedCities([])
      : setSuggestedCities(findCities);
  }, [search]);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Input
            handleChange={handleChange}
            value={copiedText || search}
            hint={suggestedCities}
          />
          <ListCiteis
            suggestedCities={suggestedCities}
            setCopiedText={setCopiedText}
            setSuggestedCities={setSuggestedCities}
          />
        </>
      )}
    </div>
  );
}

export default App;
