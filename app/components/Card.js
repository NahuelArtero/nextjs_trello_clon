import Image from "next/image";

const Card = ({ textTask, id, setDragged }) => {
  function handleDragStart(event) {
    setDragged({
      data: {
        textTask,
        id
      },
      list: event.target.closest("[data-list]").dataset.list
    });
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className=" bg-slate-100 text-slate-900 rounded-xl p-3 flex flex-col gap-8 hover:cursor-move">
      <div className="flex justify-between">
        <p className="font-medium">{textTask}</p>
        <span>
          <Image src="/icons/edit.svg" width={20} height={20} alt="" />
        </span>
      </div>
      <div className="flex justify-between">
        <span className="flex gap-1">
          <Image src="icons/message-square.svg" width={20} height={20} alt="" />
        </span>
        <span>
          <Image src="/images/avatar3.png" width={35} height={35} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Card;
