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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const GraphView = () => {
  function generateRandomNumberList(length: number) {
    var randomNumberList = [];
    for (var i = 0; i < length; i++) {
      var randomNumber = Math.floor(Math.random() * 1000) + 1;
      randomNumberList.push(randomNumber);
    }
    return randomNumberList;
  }
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Basic",
        data: generateRandomNumberList(labels.length),
        backgroundColor: "#045DD0",
      },
      {
        label: "Intermediate",
        data: generateRandomNumberList(labels.length),
        backgroundColor: "#B3AFD0",
      },
      {
        label: "Advanced",
        data: generateRandomNumberList(labels.length),
        backgroundColor: "#4CDF88",
      },
    ],
  };
  return (
    <div className="border-fadedborder p-5 border-2 rounded-lg grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 my-10 gap-10">
      <div className="w-full">
        <h4 className="text-faded font-[700]">Top performing Courses</h4>
        <div className="border-2 border-[#3788D8] p-4 rounded-lg mt-5">
          <Bar options={options} data={data} />
        </div>
      </div>
      <div className="w-full ">
        <h4 className="text-faded font-[700]">Top performing Courses</h4>
        <div className="border-2 border-[#3788D8] mt-5 p-4 rounded-lg">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default GraphView;
