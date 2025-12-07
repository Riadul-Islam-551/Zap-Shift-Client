import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.6, 89.8333];
  const serviceCenter = useLoaderData();
  const mapRef= useRef(null);
  // console.log(serviceCenter);

  const handleLocation = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    console.log(location);
    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      mapRef.current.flyTo(coord, 14)
    }
  };

  return (
    <div className="px-5">
      <h1 className="text-2xl text-secondary font-bold mt-16">
        We are available in 64 districts
      </h1>
      <div className="my-4">
        <form onSubmit={handleLocation}>
          <label className="input relative outline-none border-none bg-accent-content rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              name="location"
            />
            <button className="btn btn-primary text-secondary rounded-full absolute right-0">
              Search
            </button>
          </label>
        </form>
      </div>
      <div className="h-[500px] w-full mb-16">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="h-[500px] rounded-2xl"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenter.map((center) => (
            <Marker position={[center.latitude, center.longitude]}>
              <Popup>
                {center.district}
                <br />
                Covered Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
