const Conversation = () => {
  return (
    <div className="flex gap-2 items-center p-2 cursor-pointer rounded hover:bg-sky-500">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" alt="user avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">John Doe</p>
          <span className="text-xl">😁</span>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default Conversation;
