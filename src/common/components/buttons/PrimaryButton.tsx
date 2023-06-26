interface Props {
  text: string;
  className?: string;
  onClick: VoidFunction;
}
const PrimaryButton = ({ onClick, text, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#3B6FEE] text-white px-12 py-4 rounded-full font-light text-sm ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
