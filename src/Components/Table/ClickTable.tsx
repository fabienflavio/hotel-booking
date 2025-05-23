import { FaExternalLinkAlt } from "react-icons/fa";

const data = [
  {
    title: "Home",
    visitors: "56,000",
    percentage: "25%",
    growth: "8%",
    trend: "high",
    color: "text-blue-600",
  },
  {
    title: "About",
    visitors: "35,000",
    percentage: "23%",
    growth: "12%",
    trend: "low",
    color: "text-green-600",
  },
  {
    title: "Contact",
    visitors: "28,000",
    percentage: "18%",
    growth: "15%",
    trend: "high",
    color: "text-yellow-500",
  },
  {
    title: "Services",
    visitors: "33,000",
    percentage: "12%",
    growth: "9%",
    trend: "high",
    color: "text-green-600",
  },
  {
    title: "Products",
    visitors: "98,000",
    percentage: "16%",
    growth: "3%",
    trend: "low",
    color: "text-blue-600",
  },
];

export default function ClickTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-full">
      <h2 className="text-blue-600 text-lg font-semibold mb-4">Clicks</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="pb-2 font-normal">Link</th>
            <th className="pb-2 font-normal">Page Title</th>
            <th className="pb-2 font-normal">Visitors</th>
            <th className="pb-2 font-normal">Percentage</th>
            <th className="pb-2 font-normal">Growth</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50 text-gray-600 font-light">
              <td className="py-3">
                <FaExternalLinkAlt className="text-red-500 w-5 h-5" />
              </td>
              <td>{row.title}</td>
              <td>{row.visitors}</td>
              <td>{row.percentage}</td>
              <td className={`${row.color}`}>
                {row.growth} <span className="lowercase">{row.trend}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
