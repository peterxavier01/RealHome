"use client";

import L, { LatLngTuple } from "leaflet";
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
  const center: LatLngTuple = [6.5227873428325145, 3.3711407893425207];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className="z-0 border-[3px] border-gray-4000"
    >
      <TileLayer attribution={mapBox.attribution} url={mapBox.url} />
      <Marker position={center} icon={markerIcon}>
        <Popup>RealHome Base</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
