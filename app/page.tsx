import Image from "next/image";
// Using the imported SVGs as simple components (assuming they are set up for import,
// but for this example, I'll use simple icons or Tailwind classes)

// --- PASTE ALL THE TYPES AND THE 'amanaData' CONSTANT HERE ---
// (As defined in step 1 above)

// app/page.tsx (new content at the top)

// --- Types for Amana Transportation Data ---
type BusStop = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  estimated_arrival: string;
  is_next_stop: boolean;
};

type Incident = {
  id: number;
  type: string;
  description: string;
  reported_by: string;
  reported_time: string;
  status: string;
  priority: "High" | "Medium" | "Low" | "Critical";
};

type BusLine = {
  id: number;
  name: string;
  route_number: string;
  current_location: {
    latitude: number;
    longitude: number;
    address: string;
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
  bus_stops: BusStop[];
  incidents: Incident[];
  vehicle_info: {
    license_plate: string;
    model: string;
    year: number;
    fuel_level: number;
    last_maintenance: string;
  };
  route_info: {
    total_distance: number;
    average_speed: number;
    estimated_completion: string;
    frequency_minutes: number;
  };
};

type OperationalSummary = {
  total_buses: number;
  active_buses: number;
  maintenance_buses: number;
  out_of_service_buses: number;
  total_capacity: number;
  current_passengers: number;
  average_utilization: number;
};

type Filters = {
  available_statuses: string[];
  available_routes: string[];
  applied: {
    status: string | null;
    busId: number | null;
    routeNumber: string | null;
  };
};

type AmanaData = {
  message: string;
  company_info: {
    name: string;
    founded: string;
    headquarters: string;
    industry: string;
    description: string;
  };
  bus_lines: BusLine[];
  operational_summary: OperationalSummary;
  filters: Filters;
};

// --- Data Constant ---
const amanaData: AmanaData = {
  message: "Amana Transportation bus data retrieved successfully",
  company_info: {
    name: "Amana Transportation",
    founded: "2019",
    headquarters: "Kuala Lumpur, Malaysia",
    industry: "Public Transportation",
    description:
      "Modern public bus service connecting key areas in Kuala Lumpur and surrounding regions, focused on reliability and passenger comfort.",
  },
  bus_lines: [
    {
      id: 1,
      name: "KLCC - Petaling Jaya Express",
      route_number: "B101",
      current_location: {
        latitude: 3.158,
        longitude: 101.711,
        address: "Jalan Ampang, near KLCC Twin Towers, Kuala Lumpur",
      },
      status: "Active",
      passengers: {
        current: 32,
        capacity: 45,
        utilization_percentage: 71,
      },
      driver: {
        name: "Ahmad Rahman",
        id: "DRV001",
        shift_start: "06:00",
        shift_end: "18:00",
      },
      bus_stops: [
        {
          id: 1,
          name: "KLCC Station",
          latitude: 3.1578,
          longitude: 101.7114,
          estimated_arrival: "14:20",
          is_next_stop: true,
        },
        {
          id: 2,
          name: "Pavilion KL",
          latitude: 3.149,
          longitude: 101.7101,
          estimated_arrival: "14:28",
          is_next_stop: false,
        },
        {
          id: 3,
          name: "Mid Valley Megamall",
          latitude: 3.1177,
          longitude: 101.6774,
          estimated_arrival: "14:42",
          is_next_stop: false,
        },
        {
          id: 4,
          name: "KL Sentral",
          latitude: 3.1338,
          longitude: 101.6869,
          estimated_arrival: "14:50",
          is_next_stop: false,
        },
        {
          id: 5,
          name: "Universiti Malaya",
          latitude: 3.1204,
          longitude: 101.6535,
          estimated_arrival: "15:05",
          is_next_stop: false,
        },
        {
          id: 6,
          name: "Petaling Jaya SS2",
          latitude: 3.1147,
          longitude: 101.624,
          estimated_arrival: "15:18",
          is_next_stop: false,
        },
        {
          id: 7,
          name: "1 Utama Shopping Centre",
          latitude: 3.1502,
          longitude: 101.6154,
          estimated_arrival: "15:35",
          is_next_stop: false,
        },
      ],
      incidents: [
        {
          id: 1,
          type: "Route",
          description: "Route deviation",
          reported_by: "Driver-1A",
          reported_time: "12:12 AM",
          status: "Resolved",
          priority: "High",
        },
        {
          id: 2,
          type: "Passenger",
          description: "Unruly passenger",
          reported_by: "Driver-1B",
          reported_time: "10:38 PM",
          status: "Reported",
          priority: "Medium",
        },
      ],
      vehicle_info: {
        license_plate: "WKL 2891",
        model: "Scania K230UB",
        year: 2019,
        fuel_level: 75,
        last_maintenance: "2024-12-01",
      },
      route_info: {
        total_distance: 28.5,
        average_speed: 25,
        estimated_completion: "16:00",
        frequency_minutes: 20,
      },
    },
    {
      id: 2,
      name: "Old Town - Mont Kiara Connector",
      route_number: "B205",
      current_location: {
        latitude: 3.139,
        longitude: 101.6869,
        address: "KL Sentral Transportation Hub, Kuala Lumpur",
      },
      status: "Active",
      passengers: {
        current: 28,
        capacity: 40,
        utilization_percentage: 70,
      },
      driver: {
        name: "Siti Aminah",
        id: "DRV002",
        shift_start: "05:30",
        shift_end: "17:30",
      },
      bus_stops: [
        {
          id: 1,
          name: "KL Sentral",
          latitude: 3.1338,
          longitude: 101.6869,
          estimated_arrival: "14:15",
          is_next_stop: false,
        },
        {
          id: 2,
          name: "Central Market",
          latitude: 3.1427,
          longitude: 101.6964,
          estimated_arrival: "14:25",
          is_next_stop: true,
        },
        {
          id: 3,
          name: "Chinatown",
          latitude: 3.1436,
          longitude: 101.6958,
          estimated_arrival: "14:30",
          is_next_stop: false,
        },
        {
          id: 4,
          name: "Titiwangsa LRT",
          latitude: 3.1729,
          longitude: 101.7016,
          estimated_arrival: "14:45",
          is_next_stop: false,
        },
        {
          id: 5,
          name: "Mont Kiara",
          latitude: 3.1727,
          longitude: 101.6509,
          estimated_arrival: "15:00",
          is_next_stop: false,
        },
        {
          id: 6,
          name: "Sri Hartamas",
          latitude: 3.1653,
          longitude: 101.6493,
          estimated_arrival: "15:10",
          is_next_stop: false,
        },
      ],
      incidents: [
        {
          id: 1,
          type: "Weather",
          description: "Storm warning",
          reported_by: "Driver-2A",
          reported_time: "11:35 PM",
          status: "Reported",
          priority: "Critical",
        },
      ],
      vehicle_info: {
        license_plate: "WKL 1547",
        model: "Mercedes-Benz Citaro",
        year: 2020,
        fuel_level: 60,
        last_maintenance: "2024-11-28",
      },
      route_info: {
        total_distance: 22.3,
        average_speed: 22,
        estimated_completion: "15:30",
        frequency_minutes: 25,
      },
    },
    {
      id: 3,
      name: "Airport - City Circle",
      route_number: "B350",
      current_location: {
        latitude: 2.7456,
        longitude: 101.7072,
        address: "KLIA Express Station, Sepang, Selangor",
      },
      status: "Active",
      passengers: {
        current: 15,
        capacity: 50,
        utilization_percentage: 30,
      },
      driver: {
        name: "Lim Wei Ming",
        id: "DRV003",
        shift_start: "04:00",
        shift_end: "16:00",
      },
      bus_stops: [
        {
          id: 1,
          name: "KLIA Terminal 1",
          latitude: 2.7456,
          longitude: 101.7072,
          estimated_arrival: "14:30",
          is_next_stop: false,
        },
        {
          id: 2,
          name: "KLIA Terminal 2",
          latitude: 2.7389,
          longitude: 101.6997,
          estimated_arrival: "14:40",
          is_next_stop: false,
        },
        {
          id: 3,
          name: "Putrajaya Central",
          latitude: 2.9264,
          longitude: 101.6964,
          estimated_arrival: "15:10",
          is_next_stop: true,
        },
        {
          id: 4,
          name: "Cyberjaya",
          latitude: 2.9213,
          longitude: 101.6543,
          estimated_arrival: "15:25",
          is_next_stop: false,
        },
        {
          id: 5,
          name: "Bandar Tun Razak",
          latitude: 3.0733,
          longitude: 101.7317,
          estimated_arrival: "15:55",
          is_next_stop: false,
        },
        {
          id: 6,
          name: "KL City Centre",
          latitude: 3.1519,
          longitude: 101.7077,
          estimated_arrival: "16:20",
          is_next_stop: false,
        },
        {
          id: 7,
          name: "Batu Caves",
          latitude: 3.2379,
          longitude: 101.684,
          estimated_arrival: "16:45",
          is_next_stop: false,
        },
        {
          id: 8,
          name: "Gombak Terminal",
          latitude: 3.2642,
          longitude: 101.7003,
          estimated_arrival: "17:00",
          is_next_stop: false,
        },
      ],
      incidents: [],
      vehicle_info: {
        license_plate: "WKL 3429",
        model: "Volvo B8RLE",
        year: 2018,
        fuel_level: 40,
        last_maintenance: "2024-12-03",
      },
      route_info: {
        total_distance: 85.2,
        average_speed: 35,
        estimated_completion: "17:30",
        frequency_minutes: 45,
      },
    },
    {
      id: 4,
      name: "University Express",
      route_number: "B410",
      current_location: {
        latitude: 3.1204,
        longitude: 101.6535,
        address: "Universiti Malaya Main Campus, Kuala Lumpur",
      },
      status: "Maintenance",
      passengers: {
        current: 0,
        capacity: 35,
        utilization_percentage: 0,
      },
      driver: {
        name: "Raj Kumar",
        id: "DRV004",
        shift_start: "06:30",
        shift_end: "18:30",
      },
      bus_stops: [
        {
          id: 1,
          name: "Universiti Malaya",
          latitude: 3.1204,
          longitude: 101.6535,
          estimated_arrival: "N/A",
          is_next_stop: false,
        },
        {
          id: 2,
          name: "UCSI University",
          latitude: 3.0411,
          longitude: 101.7089,
          estimated_arrival: "N/A",
          is_next_stop: false,
        },
        {
          id: 3,
          name: "Taylor's University",
          latitude: 3.0653,
          longitude: 101.6075,
          estimated_arrival: "N/A",
          is_next_stop: false,
        },
        {
          id: 4,
          name: "Sunway University",
          latitude: 3.0653,
          longitude: 101.6037,
          estimated_arrival: "N/A",
          is_next_stop: false,
        },
        {
          id: 5,
          name: "INTI International University",
          latitude: 3.0534,
          longitude: 101.5934,
          estimated_arrival: "N/A",
          is_next_stop: false,
        },
        {
          id: 6,
          name: "Monash University Malaysia",
          latitude: 3.0653,
          longitude: 101.6016,
          estimated_arrival: "N/A",
          is_next_stop: false,
        },
      ],
      incidents: [
        {
          id: 1,
          type: "Weather",
          description: "Flood on route",
          reported_by: "Driver-4A",
          reported_time: "11:26 PM",
          status: "Canceled",
          priority: "Low",
        },
      ],
      vehicle_info: {
        license_plate: "WKL 7856",
        model: "Isuzu NPR",
        year: 2017,
        fuel_level: 85,
        last_maintenance: "2024-12-05",
      },
      route_info: {
        total_distance: 45.8,
        average_speed: 20,
        estimated_completion: "N/A",
        frequency_minutes: 30,
      },
    },
    {
      id: 5,
      name: "Shopping District Shuttle",
      route_number: "B520",
      current_location: {
        latitude: 3.149,
        longitude: 101.7101,
        address: "Pavilion Kuala Lumpur, Bukit Bintang",
      },
      status: "Active",
      passengers: {
        current: 42,
        capacity: 45,
        utilization_percentage: 93,
      },
      driver: {
        name: "Fatimah Zahra",
        id: "DRV005",
        shift_start: "07:00",
        shift_end: "19:00",
      },
      bus_stops: [
        {
          id: 1,
          name: "Pavilion KL",
          latitude: 3.149,
          longitude: 101.7101,
          estimated_arrival: "14:22",
          is_next_stop: false,
        },
        {
          id: 2,
          name: "Lot 10 Shopping Centre",
          latitude: 3.1479,
          longitude: 101.71,
          estimated_arrival: "14:25",
          is_next_stop: true,
        },
        {
          id: 3,
          name: "Times Square KL",
          latitude: 3.1427,
          longitude: 101.7105,
          estimated_arrival: "14:32",
          is_next_stop: false,
        },
        {
          id: 4,
          name: "Suria KLCC",
          latitude: 3.158,
          longitude: 101.7123,
          estimated_arrival: "14:40",
          is_next_stop: false,
        },
        {
          id: 5,
          name: "Avenue K",
          latitude: 3.1612,
          longitude: 101.7197,
          estimated_arrival: "14:48",
          is_next_stop: false,
        },
        {
          id: 6,
          name: "Intermark Mall",
          latitude: 3.1606,
          longitude: 101.7209,
          estimated_arrival: "14:52",
          is_next_stop: false,
        },
        {
          id: 7,
          name: "Ampang Park LRT",
          latitude: 3.1615,
          longitude: 101.713,
          estimated_arrival: "15:00",
          is_next_stop: false,
        },
        {
          id: 8,
          name: "Low Yat Plaza",
          latitude: 3.1468,
          longitude: 101.7099,
          estimated_arrival: "15:08",
          is_next_stop: false,
        },
        {
          id: 9,
          name: "Fahrenheit 88",
          latitude: 3.1472,
          longitude: 101.7097,
          estimated_arrival: "15:12",
          is_next_stop: false,
        },
      ],
      incidents: [
        {
          id: 1,
          type: "Traffic",
          description: "Heavy traffic jam",
          reported_by: "Driver-5A",
          reported_time: "12:40 AM",
          status: "Resolved",
          priority: "Low",
        },
      ],
      vehicle_info: {
        license_plate: "WKL 9123",
        model: "BYD K9",
        year: 2021,
        fuel_level: 95,
        last_maintenance: "2024-11-30",
      },
      route_info: {
        total_distance: 12.7,
        average_speed: 15,
        estimated_completion: "15:30",
        frequency_minutes: 15,
      },
    },
  ],
  operational_summary: {
    total_buses: 5,
    active_buses: 4,
    maintenance_buses: 1,
    out_of_service_buses: 0,
    total_capacity: 215,
    current_passengers: 117,
    average_utilization: 53,
  },
  filters: {
    available_statuses: ["Active", "Maintenance", "Out of Service"],
    available_routes: ["B101", "B205", "B350", "B410", "B520"],
    applied: {
      status: null,
      busId: null,
      routeNumber: null,
    },
  },
} as AmanaData; // Cast to use the type defined above

const getStatusColor = (status: BusLine["status"]) => {
  switch (status) {
    case "Active":
      return "text-emerald-600 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-900/50";
    case "Maintenance":
      return "text-amber-600 dark:text-amber-400 bg-amber-100/50 dark:bg-amber-900/50";
    case "Out of Service":
      return "text-red-600 dark:text-red-400 bg-red-100/50 dark:bg-red-900/50";
    default:
      return "text-zinc-600 dark:text-zinc-400 bg-zinc-100/50 dark:bg-zinc-900/50";
  }
};

const getPriorityColor = (priority: Incident["priority"]) => {
  switch (priority) {
    case "Critical":
      return "text-red-600";
    case "High":
      return "text-orange-500";
    case "Medium":
      return "text-yellow-500";
    case "Low":
      return "text-zinc-400";
    default:
      return "text-zinc-400";
  }
};

const Card: React.FC<{
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
}> = ({ title, value, description, icon }) => (
  <div className="flex flex-col rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {title}
      </p>
      {icon}
    </div>
    <p className="mt-1 text-3xl font-semibold text-foreground">{value}</p>
    <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
      {description}
    </p>
  </div>
);

const BusLineDetails: React.FC<{ line: BusLine }> = ({ line }) => (
  <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-700">
    <h3 className="text-lg font-semibold text-foreground">
      Route Details ({line.route_number})
    </h3>

    {/* Two-Column Grid for Details */}
    <div className="mt-3 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
      <div className="space-y-2">
        <p>
          <strong>Driver:</strong> {line.driver.name} (ID: {line.driver.id})
        </p>
        <p>
          <strong>Vehicle:</strong> {line.vehicle_info.model} (
          {line.vehicle_info.year})
        </p>
        <p>
          <strong>License Plate:</strong>{" "}
          <span className="font-mono text-xs inline-block bg-zinc-100 dark:bg-zinc-700 px-2 py-0.5 rounded">
            {line.vehicle_info.license_plate}
          </span>
        </p>
        <p>
          <strong>Fuel Level:</strong> {line.vehicle_info.fuel_level}%
        </p>
      </div>
      <div className="space-y-2">
        <p>
          <strong>Current Location:</strong> {line.current_location.address}
        </p>
        <p>
          <strong>Total Distance:</strong> {line.route_info.total_distance} km
        </p>
        <p>
          <strong>Avg. Speed:</strong> {line.route_info.average_speed} km/h
        </p>
        <p>
          <strong>Next Stop:</strong>{" "}
          {line.bus_stops.find((s) => s.is_next_stop)?.name || "N/A"}
        </p>
      </div>
    </div>

    {/* Incidents Table */}
    {line.incidents.length > 0 && (
      <div className="mt-4">
        <h4 className="font-semibold text-sm text-red-500 dark:text-red-400">
          Incidents ({line.incidents.length})
        </h4>
        <div className="mt-2 border border-red-200 dark:border-red-700 rounded-lg overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-red-50 dark:bg-red-900/50">
                <th className="p-2 font-medium">Type</th>
                <th className="p-2 font-medium">Description</th>
                <th className="p-2 font-medium">Priority</th>
                <th className="p-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {line.incidents.map((incident) => (
                <tr
                  key={incident.id}
                  className="border-t border-red-100 dark:border-red-800"
                >
                  <td className="p-2">{incident.type}</td>
                  <td className="p-2">{incident.description}</td>
                  <td
                    className={`p-2 font-medium ${getPriorityColor(
                      incident.priority
                    )}`}
                  >
                    {incident.priority}
                  </td>
                  <td className="p-2">{incident.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
  </div>
);

export default function Dashboard() {
  const { operational_summary, bus_lines, company_info } = amanaData;
  const criticalIncidents = bus_lines
    .flatMap((line) => line.incidents)
    .filter((i) => i.priority === "Critical" && i.status !== "Resolved").length;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {company_info.name} Dashboard
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          {company_info.description}
        </p>
      </header>

      {/* Operational Summary Cards */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Operational Summary
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            title="Total Buses"
            value={operational_summary.total_buses}
            description="Total vehicles in the fleet."
            icon={<span className="text-xl">🚌</span>}
          />
          <Card
            title="Active Buses"
            value={operational_summary.active_buses}
            description={`${operational_summary.maintenance_buses} in maintenance.`}
            icon={<span className="text-xl text-emerald-500">🟢</span>}
          />
          <Card
            title="Current Passengers"
            value={operational_summary.current_passengers}
            description={`Total capacity: ${operational_summary.total_capacity}`}
            icon={<span className="text-xl">🧑‍🤝‍🧑</span>}
          />
          <Card
            title="Avg. Utilization"
            value={`${operational_summary.average_utilization}%`}
            description={`System-wide passenger load.`}
            icon={
              <span
                className={`text-xl ${
                  operational_summary.average_utilization > 70
                    ? "text-red-500"
                    : "text-zinc-500"
                }`}
              >
                📈
              </span>
            }
          />
        </div>
        {criticalIncidents > 0 && (
          <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300 font-medium flex items-center">
            ⚠️{" "}
            <span className="ml-2">
              {criticalIncidents} Critical Incident
              {criticalIncidents > 1 ? "s" : ""} Reported Across Fleet.
              Immediate attention required.
            </span>
          </div>
        )}
      </section>

      {/* Bus Line Status Table */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Bus Line Status ({bus_lines.length} Routes)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
            <thead className="bg-zinc-100 dark:bg-zinc-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                >
                  Route
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                >
                  Passengers
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                >
                  Next Stop / ETA
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                >
                  Location
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-700 dark:bg-zinc-900">
              {bus_lines.map((line) => (
                <tr
                  key={line.id}
                  className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm font-semibold text-foreground">
                      {line.route_number}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {line.name}
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${getStatusColor(
                        line.status
                      )}`}
                    >
                      {line.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                    {line.passengers.current} / {line.passengers.capacity}
                    <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400">
                      ({line.passengers.utilization_percentage}%)
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {line.bus_stops.find((s) => s.is_next_stop)?.name || "N/A"}
                    <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400">
                      (
                      {line.bus_stops.find((s) => s.is_next_stop)
                        ?.estimated_arrival || "N/A"}
                      )
                    </span>
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400 max-w-sm truncate"
                    title={line.current_location.address}
                  >
                    {line.current_location.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed View - Can be shown on click, but for a simple dashboard, we can just list them */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Detailed Bus Information
        </h2>
        <div className="space-y-6">
          {bus_lines.map((line) => (
            <div
              key={line.id}
              className="p-6 rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800 shadow-lg"
            >
              <header className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">
                  {line.name}
                </h3>
                <span
                  className={`inline-flex rounded-full px-4 py-1.5 text-sm font-bold ${getStatusColor(
                    line.status
                  )}`}
                >
                  {line.status}
                </span>
              </header>
              <BusLineDetails line={line} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
