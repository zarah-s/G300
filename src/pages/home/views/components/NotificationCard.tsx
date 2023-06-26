const NotificationCard = () => {
  return (
    <div
      className="bg-white p-2 rounded-lg my-3 flex items-start justify-between"
      style={{
        boxShadow: "0px 1px 12px 0px #B8B8D233",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center flex-col w-10 h-10 xl:p-7 lg:p-7 md:p-7 sm:p-6 xs:p-6 bg-[#57D6C0] font-[500] rounded-lg text-white">
          <p>20</p>
          <p>MAR</p>
        </div>
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
      <div className="">
        <small className="text-[#1D1C1C] font-[500]">11:00AM</small>
      </div>
    </div>
  );
};

export default NotificationCard;
