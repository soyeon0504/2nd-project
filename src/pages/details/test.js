import React, { useState } from "react";

const AddressSelection = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const cities = ["서울특별시", "부산광역시" /* Add other cities as needed */];
  const seoulDistricts = [
    "강남구",
    "강동구",
    "강북구",
    "강서구" /* Add other districts as needed */,
  ];

  const handleCityChange = event => {
    const city = event.target.value;
    setSelectedCity(city);

    // If Seoul is selected, reset the district selection
    if (city === "서울특별시") {
      setSelectedDistrict("");
    }
  };

  const handleDistrictChange = event => {
    const district = event.target.value;
    setSelectedDistrict(district);
  };

  return (
    <div>
      <label>
        City:
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {cities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      {selectedCity === "서울특별시" && (
        <label>
          District:
          <select value={selectedDistrict} onChange={handleDistrictChange}>
            <option value="">Select a district</option>
            {seoulDistricts.map(district => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </label>
      )}
    </div>
  );
};

export default AddressSelection;
