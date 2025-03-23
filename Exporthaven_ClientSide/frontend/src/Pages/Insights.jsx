import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate, useParams, Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const monthCountries = {
  Jan: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Italy",
    "Japan",
    "Netherlands",
    "Singapore",
    "South Korea",
    "Spain",
    "UAE",
    "UK",
    "USA",
  ],
  Feb: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Italy",
    "Japan",
    "Netherlands",
    "Singapore",
    "South Korea",
    "UAE",
    "UK",
    "USA",
  ],
  Mar: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Malaysia",
    "Maldives",
  ],
  April: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Italy",
    "Singapore",
    "Sweden",
  ],
  May: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Italy",
    "Singapore",
    "Mexico",
    "Spain",
  ],
  June: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Italy",
    "Singapore",
  ],
  July: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Italy",
    "Singapore",
    "Malaysia",
  ],
  Aug: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Singapore",
    "Sweden",
  ],
  Sep: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Mexico",
    "Qatar",
  ],
  Oct: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Italy",
    "Singapore",
  ],
  Nov: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Singapore",
  ],
  Dec: [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Netherlands",
    "South Korea",
    "UAE",
    "UK",
    "USA",
    "Italy",
  ],
};

const productSalesData = {
  australia: { tea: 250, coconut: 180, spices: 120, cinnamon: 90 },
  canada: { tea: 320, coconut: 100, spices: 140, cinnamon: 70 },
  china: { tea: 500, coconut: 120, spices: 350, cinnamon: 110 },
  france: { tea: 280, coconut: 150, spices: 190, cinnamon: 130 },
  germany: { tea: 270, coconut: 130, spices: 160, cinnamon: 100 },
  india: { tea: 420, coconut: 240, spices: 380, cinnamon: 160 },
  italy: { tea: 200, coconut: 170, spices: 230, cinnamon: 120 },
  japan: { tea: 380, coconut: 150, spices: 210, cinnamon: 90 },
  netherlands: { tea: 230, coconut: 120, spices: 140, cinnamon: 80 },
  singapore: { tea: 260, coconut: 190, spices: 170, cinnamon: 110 },
  "south korea": { tea: 290, coconut: 140, spices: 160, cinnamon: 90 },
  spain: { tea: 220, coconut: 160, spices: 190, cinnamon: 100 },
  uae: { tea: 240, coconut: 180, spices: 200, cinnamon: 120 },
  uk: { tea: 400, coconut: 150, spices: 180, cinnamon: 110 },
  usa: { tea: 350, coconut: 200, spices: 230, cinnamon: 140 },
  malaysia: { tea: 280, coconut: 210, spices: 190, cinnamon: 110 },
  maldives: { tea: 190, coconut: 230, spices: 160, cinnamon: 90 },
  sweden: { tea: 240, coconut: 130, spices: 150, cinnamon: 80 },
  mexico: { tea: 210, coconut: 170, spices: 200, cinnamon: 110 },
  qatar: { tea: 230, coconut: 160, spices: 180, cinnamon: 100 },
};

const derivativesData = {
  tea: {
    "English Tea": 45,
    "Black Tea": 30,
    "Green Tea": 25,
  },
  coconut: {
    "Coconut Oil": 40,
    "Coconut Milk": 30,
    "Coconut Cream": 30,
  },
  spices: {
    Chillies: 35,
    Cardamom: 40,
    Pepper: 25,
  },
  cinnamon: {
    "Cinnamon Powder": 55,
    "Cinnamon Tea": 25,
    "Cinnamon Sticks": 20,
  },
};

export const DemandPredictionPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    navigate(`/insights/demand-chart/${country}`);
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
  const { country } = useParams();
  const navigate = useNavigate();
  const countryLower = country.toLowerCase();

  const handleProductClick = (product) => {
    navigate(`/insights/derivatives/${country}/${product}`);
  };

  const getChartData = () => {
    const data = productSalesData[countryLower];
    return {
      labels: ["Tea", "Coconut", "Spices", "Cinnamon"],
      datasets: [
        {
          label: `${country} Sales`,
          data: [data.tea, data.coconut, data.spices, data.cinnamon],
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
          label: (context) => `Sales: ${context.raw}`,
          title: (context) => `${context[0].label}`,
        },
        padding: 12,
        backgroundColor: "rgba(40, 75, 99, 0.9)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 13,
          },
          padding: 20,
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const products = ["tea", "coconut", "spices", "cinnamon"];
        handleProductClick(products[index]);
      }
    },
  };

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
      <p className="text-base text-[#284b63]/80 mb-10">
        Click on any product bar to view its value-added derivatives
      </p>
      <div className="h-[500px] mb-10">
        <Bar data={getChartData()} options={options} />
      </div>
    </div>
  );
};

export const DerivativesChartPage = () => {
  const { country, product } = useParams();

  const getPieChartData = () => {
    const data = derivativesData[product.toLowerCase()];
    const labels = Object.keys(data);
    const values = Object.values(data);

    return {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            "rgba(40, 75, 99, 0.8)",
            "rgba(60, 110, 113, 0.8)",
            "rgba(53, 53, 53, 0.8)",
          ],
          borderColor: ["#284b63", "#3c6e71", "#353535"],
          borderWidth: 2,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 13,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
        padding: 12,
        backgroundColor: "rgba(40, 75, 99, 0.9)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
      },
    },
  };

  return (
    <div className="max-w-[1000px] mx-auto mt-12 p-10 bg-white rounded-2xl shadow-xl">
      <Link
        to={`/insights/demand-chart/${country}`}
        className="inline-flex items-center mb-8 text-[#284b63] font-medium hover:text-[#3c6e71] transition-colors duration-300"
      >
        <span className="mr-2">←</span> Back to Base Products
      </Link>
      <h2 className="text-3xl font-bold text-[#353535] mb-3 capitalize">
        {product} Derivatives for {country}
      </h2>
      <p className="text-base text-[#284b63]/80 mb-10">
        Percentage distribution of value-added products
      </p>
      <div className="h-[500px] max-w-[700px] mx-auto">
        <Pie data={getPieChartData()} options={options} />
      </div>
    </div>
  );
};

const Insights = () => {
  return (
    <>
      <DemandPredictionPage />
    </>
  );
};

export default Insights;
