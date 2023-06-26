import TableRow from "./components/TableRow";
import PrimaryButton from "../../../common/components/buttons/PrimaryButton";

const StudentsPage = () => {
  return (
    <div className="border-2 border-fadedborder p-5 rounded-lg">
      <h2 className="text-faded font-[700]">Students</h2>

      <div className="relative overflow-x-auto mt-6">
        <table className="w-full text-sm text-left text-[#A1A0A3]">
          <thead className="text-xs text-[#A1A0A3] uppercase bg-[#F6F6F6] ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Level
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4, 5].map((row) => (
              <TableRow key={row} />
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-8">
          <PrimaryButton onClick={() => {}} text="View More" />
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
