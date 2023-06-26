import MessageCard from "./MessageCard";

const MessageSection = () => {
  return (
    <div className="">
      <h3 className="text-faded font-[700]">Messages</h3>
      <div className="flex items-center justify-end">
        <button className="text-[#3B6FEE] text-sm">View More</button>
      </div>
      <div className="my-5">
        {[1, 2, 3].map((msg) => (
          <MessageCard key={msg} />
        ))}
      </div>
    </div>
  );
};

export default MessageSection;
