import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate, useParams, Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Base URL for ML API, configurable via environment variable
const mlApiUrl = process.env.REACT_APP_ML_API_URL || "http://localhost:5001";

// List of countries
const allCountries = [
  "Albania",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Belarus",
  "Belgium",
  "Bolivia",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Costa Rica",
  "Croatia (Hrvatska)",
  "Cyprus",
  "Czech Republic (Czechia)",
  "Denmark",
  "Ecuador",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Guatemala",
  "Guinea",
  "Haiti",
  "Hong Kong",
  "Hungary",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast (Cote D'ivoire)",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Korea South (Korea, Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lebanon",
  "Libyan Arab Jamahiriya",
  "Lithuania",
  "Malaysia",
  "Maldives",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Mongolia",
  "Morocco",
  "Myanmar",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Papua New Guinea",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Saudi Arabia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "Spain",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan, Province of China",
  "Thailand",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uzbekistan",
  "Viet Nam",
];

// List of months
const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Map months to countries
const monthCountries = {};
months.forEach((m) => {
  monthCountries[m] = allCountries;
});

export const DemandPredictionPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    navigate(`/insights/demand-chart/${selectedMonth}/${country}`);
  };

  return (
    <div
      className="flex min-h-screen font-sans bg-gradient-to-br from-[#ffffff] to-[#f8f9fa]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left half: Month selection */}
      <div className="w-1/2 backdrop-blur-md bg-white/80 p-12 text-center border-r border-[#d9d9d9]/20">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl text-[#353535] font-bold mb-3 tracking-tight">
            SELECT MONTH
          </h1>
          <p className="text-sm text-[#284b63] mb-8 opacity-80">
            Choose a month for demand prediction
          </p>
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(monthCountries).map((month, index) => (
              <div
                key={index}
                className={`py-4 px-2 rounded-xl font-medium cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedMonth === month
                    ? "bg-[#284b63] text-white shadow-lg"
                    : "bg-white/80 text-[#353535] hover:bg-[#3c6e71] hover:text-white shadow-md hover:shadow-lg"
                }`}
                onClick={() => setSelectedMonth(month)}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right half: Country selection */}
      <div className="w-1/2 backdrop-blur-sm bg-black/20 p-12 text-center">
        <div className="max-w-lg mx-auto">
          {selectedMonth ? (
            <>
              <h2 className="text-3xl text-white font-bold mb-8 tracking-tight">
                SELECT COUNTRY
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {monthCountries[selectedMonth].map((country, index) => (
                  <div
                    key={index}
                    className={`px-6 py-3 rounded-full font-medium cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                      selectedCountry === country
                        ? "bg-[#284b63] text-white shadow-lg"
                        : "bg-white/20 text-white hover:bg-[#3c6e71] backdrop-blur-md shadow-md hover:shadow-lg"
                    }`}
                    onClick={() => handleCountryClick(country)}
                  >
                    {country}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <h2 className="text-xl text-white/80 italic">
                Please select a month
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const DemandChartPage = () => {
  const { month, country } = useParams();
  const [predictions, setPredictions] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPredictions = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${mlApiUrl}/api/predict?month=${month}&country=${country}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch predictions");
        }
        const data = await res.json();
        if (data.error) {
          setError(data.error);
        } else {
          setPredictions(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
  }, [month, country]);

  const getChartData = () => {
    const labels = Object.keys(predictions);
    const values = Object.values(predictions);

    return {
      labels,
      datasets: [
        {
          label: `Predicted Exports for ${country} - ${month}`,
          data: values,
          backgroundColor: [
            "rgba(40, 75, 99, 0.8)",
            "rgba(60, 110, 113, 0.8)",
            "rgba(53, 53, 53, 0.8)",
            "rgba(217, 217, 217, 0.8)",
          ],
          borderColor: ["#284b63", "#3c6e71", "#353535", "#d9d9d9"],
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `Predicted: ${context.raw}`,
          title: (context) => `${context[0].label}`,
        },
        padding: 12,
        backgroundColor: "rgba(40, 75, 99, 0.9)",
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 13 },
      },
      legend: {
        display: true,
        position: "top",
        labels: { font: { size: 13 }, padding: 20 },
      },
    },
  };

  if (loading) return <p>Loading predictions...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="max-w-[1000px] mx-auto mt-12 p-10 bg-white rounded-2xl shadow-xl">
      <Link
        to="/insights"
        className="inline-flex items-center mb-8 text-[#284b63] font-medium hover:text-[#3c6e71] transition-colors duration-300"
      >
        <span className="mr-2">←</span> Back to Selection
      </Link>
      <h2 className="text-3xl font-bold text-[#353535] mb-4">
        Base Product Sales for {country}
      </h2>
      {error && (
        <p className="text-red-600 mb-4">Error fetching predictions: {error}</p>
      )}
      <div className="h-[500px] mb-10">
        {Object.keys(predictions).length > 0 ? (
          <Bar data={getChartData()} options={options} />
        ) : (
          <p>No predictions available or still loading...</p>
        )}
      </div>
    </div>
  );
};

const Insights = () => {
  return <DemandPredictionPage />;
};

export default Insights;
