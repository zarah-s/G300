import Assets from "../../../../assets/assets";

const TableRow = () => {
  return (
    <tr className="bg-white border-b hover:bg-[#F6F6F6] cursor-pointer">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>

      <th scope="row" className="px-6 py-4 font-medium ">
        <div className="flex items-center gap-3">
          <img src={Assets.Base} alt="" />
          <div className="">
            <p className="font-[600] text-[#222124]">Esther Magli</p>
            <p className="text-[#5F5F61] font-[500]">@Esther</p>
          </div>
        </div>
      </th>
      <td className="px-6 py-4">
        <div className="flex items-center gap-1 bg-[#EBF1FD] justify-center p-1 rounded-full">
          <div className="bg-[#105DFB] w-2 h-2 rounded-full" />
          <p className="text-[#105DFB] font-[500]">Active</p>
        </div>
      </td>
      <td className="px-6 py-4">Admin</td>
      <td className="px-6 py-4">esther@yahoo.com</td>
    </tr>
  );
};

export default TableRow;
