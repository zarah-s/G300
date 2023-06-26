import Assets from "../../../../assets/assets";

const MessageCard = () => {
  return (
    <div
      className="bg-white p-2 rounded-lg my-3 flex items-start justify-between"
      style={{
        boxShadow: "0px 1px 12px 0px #B8B8D233",
      }}
    >
      <div className="flex items-center gap-3">
        <img src={Assets.Profile} alt="" />
        <div className="">
          <p className="text-[#222124] font-[600]">Esther Magli</p>
          <p className="line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eius ipsa itaque fuga facilis aliquam recusandae, ex natus
            accusamus! Perspiciatis est possimus eligendi facilis alias
            repellendus laboriosam tenetur doloremque! Voluptate!
          </p>
        </div>
      </div>
      <small className="text-[#1D1C1C] font-[500]">11:00AM</small>
    </div>
  );
};

export default MessageCard;
