import React from "react";
import Image from "next/image";

const Card = ({textTask}) => {
  return (
    <div className=" bg-slate-100 text-slate-900 rounded-xl p-3 flex flex-col gap-8">
      <div className="flex justify-between">
        <p className="font-medium">{textTask}</p>
        <Image src="/icons/edit.svg" width={20} height={20} alt="" />
      </div>
      <div className="flex justify-between">
        <Image src="/images/avatar1.png" width={50} height={50} alt="" />
        <Image src="icons/message-square.svg" width={20} height={20} alt="" />
      </div>
    </div>
  );
};

export default Card;
