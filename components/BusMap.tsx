"use client";

import { useMemo } from "react";

type BusLine = {
  id: number;
  name: string;
  route_number: string;
  current_location: {
    latitude: number;
    longitude: number;
    address: string;
    timestamp?: string;
  };
  status: "Active" | "Maintenance" | "Out of Service";
  passengers: {
    current: number;
    capacity: number;
    utilization_percentage: number;
  };
  driver: {
    name: string;
    id: string;
    shift_start: string;
    shift_end: string;
  };
};

const getStatusColor = (status: BusLine["status"]) => {
  switch (status) {
    case "Active":
      return "text-emerald-500 bg-emerald-500/10";
    case "Maintenance":
      return "text-amber-500 bg-amber-500/10";
    case "Out of Service":
      return "text-red-500 bg-red-500/10";
    default:
      return "text-zinc-500 bg-zinc-500/10";
  }
};

const BusMap: React.FC<{ busLines: BusLine[] }> = ({ busLines }) => {
  const L = require("leaflet");
  const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");

  const position: [number, number] = [3.139, 101.6869];
  const zoom = 11;

  const createBusIcon = (color: string) => {
    return new L.DivIcon({
      className: "custom-bus-icon",
      html: `<div style="background-color: ${color};" class="w-7 h-7 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-950 shadow-lg text-white font-bold text-xs">🚌</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -7],
    });
  };

  const activeIcon = useMemo(() => createBusIcon("#10b981"), []);
  const maintenanceIcon = useMemo(() => createBusIcon("#f59e0b"), []);
  const outOfServiceIcon = useMemo(() => createBusIcon("#ef4444"), []);
  const unknownIcon = useMemo(() => createBusIcon("#71717a"), []);

  const getBusIcon = (status: BusLine["status"]) => {
    switch (status) {
      case "Active":
        return activeIcon;
      case "Maintenance":
        return maintenanceIcon;
      case "Out of Service":
        return outOfServiceIcon;
      default:
        return unknownIcon;
    }
  };

  const activeBuses = busLines.filter(
    (line) => line.status === "Active" || line.status === "Maintenance"
  );

  return (
    <div className="w-full h-[400px] rounded-lg shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {activeBuses.map((line) => {
          if (
            line.current_location &&
            line.current_location.latitude &&
            line.current_location.longitude
          ) {
            const position: [number, number] = [
              line.current_location.latitude,
              line.current_location.longitude,
            ];
            const icon = getBusIcon(line.status);

            return (
              <Marker key={line.id} position={position} icon={icon}>
                <Popup>
                  <div className="font-sans text-sm p-1">
                    <h3 className="font-bold text-base mb-1">
                      {line.route_number}: {line.name}
                    </h3>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        className={`font-semibold ${getStatusColor(
                          line.status
                        )} px-1 rounded`}
                      >
                        {line.status}
                      </span>
                    </p>
                    <p>
                      <strong>Driver:</strong> {line.driver.name}
                    </p>
                    <p>
                      <strong>Load:</strong> {line.passengers.current}/
                      {line.passengers.capacity} (
                      {line.passengers.utilization_percentage}%)
                    </p>
                    {line.current_location.timestamp && (
                      <p className="mt-1 text-xs text-zinc-500">
                        Last updated:{" "}
                        {new Date(
                          line.current_location.timestamp
                        ).toLocaleTimeString()}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            );
          }
          return null;
        })}
      </MapContainer>
    </div>
  );
};

export default BusMap;
