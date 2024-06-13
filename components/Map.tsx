"use client";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { mapServices } from "@/lib/map-services";

const markerIcon = new L.Icon({
  iconUrl: "/marker.svg",
  iconRetinaUrl: "/marker.svg",
  iconSize: new L.Point(50, 75),
  className: "marker-icon",
});

const Map = () => {
  const mapBox = mapServices[1];

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="z-0 border-[3px] border-gray-4000"
    >
      <TileLayer attribution={mapBox.attribution} url={mapBox.url} />
      <Marker position={[51.505, -0.09]} icon={markerIcon}>
        <Popup>RealHome Base</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
