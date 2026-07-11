import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const experienceData = [
  { exp: "0-2", salary: 35000 },
  { exp: "3-5", salary: 55000 },
  { exp: "6-8", salary: 82000 },
  { exp: "9-12", salary: 110000 },
  { exp: "13+", salary: 145000 },
];

const industryData = [
  { industry: "IT", salary: 120000 },
  { industry: "Finance", salary: 98000 },
  { industry: "Healthcare", salary: 91000 },
  { industry: "Retail", salary: 73000 },
  { industry: "Education", salary: 64000 },
];

const educationData = [
  { name: "Bachelor", value: 45 },
  { name: "Master", value: 30 },
  { name: "PhD", value: 15 },
  { name: "Diploma", value: 10 },
];

const COLORS = [
  "#0F5132",
  "#198754",
  "#28A745",
  "#74C69D",
];

function Charts() {
  return (
    
    <div className="grid lg:grid-cols-2 gap-8 relative z-10">
      {/* Experience */}

      <div className="card p-8">

        <h3 className="text-2xl font-bold text-primary mb-6">
          Salary by Experience
        </h3>

        <ResponsiveContainer width="100%" height={300}>

          <LineChart data={experienceData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="exp" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="salary"
              stroke="#0F5132"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* Industry */}

      <div className="card p-6">

        <h3 className="text-2xl font-bold text-primary mb-6">
          Industry Comparison
        </h3>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={industryData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="industry" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="salary"
              fill="#198754"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Education */}

      <div className="card p-6 lg:col-span-2">

        <h3 className="text-2xl font-bold text-primary mb-6">
          Education Distribution
        </h3>

        <ResponsiveContainer width="100%" height={350}>

          <PieChart>

            <Pie
              data={educationData}
              dataKey="value"
              outerRadius={120}
              label
            >

              {educationData.map((entry,index)=>(
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Charts;