// Borderless Yield - Opportunities Page
import { useState } from 'react';
import { FaMapMarkerAlt, FaCoins } from 'react-icons/fa';

const sampleProjects = [
  {
    id: 1,
    name: "TukTuk Solar Upgrade",
    country: "Kenya",
    target: 3000,
    raised: 1200,
    stablecoin: "cKES",
  },
  {
    id: 2,
    name: "Coffee Farm Expansion",
    country: "Colombia",
    target: 5000,
    raised: 3500,
    stablecoin: "cCOP",
  },
  {
    id: 3,
    name: "Youth Tech Bootcamp",
    country: "Ghana",
    target: 2500,
    raised: 900,
    stablecoin: "cGHS",
  },
];

export default function Opportunities() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? sampleProjects
      : sampleProjects.filter(p => p.country === filter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Investment Opportunities
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Kenya", "Colombia", "Ghana"].map(region => (
          <button
            key={region}
            onClick={() => setFilter(region)}
            className={`px-4 py-2 rounded-full font-semibold ${
              filter === region
                ? "bg-blue-600 text-white"
                : "bg-white border border-blue-600 text-blue-600"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => {
          const progress = (project.raised / project.target) * 100;
          return (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {project.name}
              </h3>
              <p className="flex items-center text-gray-600 mb-1">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                {project.country}
              </p>
              <p className="flex items-center text-gray-600 mb-4">
                <FaCoins className="mr-2 text-yellow-500" />
                Target: ${project.target} | Raised: ${project.raised}
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full font-semibold">
                Invest with {project.stablecoin}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
              }
