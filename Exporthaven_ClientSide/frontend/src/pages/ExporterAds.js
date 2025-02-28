import CategoryDropdown from "../components/CategoryDropdown";
import LocationDropdown from "../components/LocationDropdown";

const ExporterAds = () => {
  const [ads, setAds] = useState([]);
  const [filters, setFilters] = useState({ category: "", location: "" });
  const [sortBy, setSortBy] = useState("newest");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/ads/exporters`, {
          params: { ...filters, sort: sortBy },
        });
        setAds(response.data);
      } catch (err) {
        setError("Failed to fetch ads.");
      }
    };
    fetchAds();
  }, [filters, sortBy]);

  return (
    <div>
      <h1>Exporter Ads</h1>
      <div className="filters">
        <CategoryDropdown
          categories={["textiles", "food", "electronics", "machinery"]}
          value={filters.category}
          onChange={(value) => setFilters({ ...filters, category: value })}
          placeholder="All Categories"
        />
        <LocationDropdown
          value={filters.location}
          onChange={(value) => setFilters({ ...filters, location: value })}
          placeholder="Select Location"
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
      {/* Render ads list here */}
    </div>
  );
};

export default ExporterAds;
