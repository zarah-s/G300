import Assets from "../../../../assets/assets";
interface Props {
  count: number;
  label: string;
}
const OverviewCard = ({ count, label }: Props) => {
  return (
    <div className="w-full h-44 border-fadedborder relative border-2 p-2 rounded-lg flex items-center justify-center flex-col">
      <h2 className="text-[#1F1F39] font-[700] text-2xl">{count}</h2>
      <p className="font-[400] text-faded">{label}</p>
      <div className="bg-[#3788D8] p-1 rounded-full absolute top-3 left-3">
        <Assets.Students />
      </div>
    </div>
  );
};

export default OverviewCard;
