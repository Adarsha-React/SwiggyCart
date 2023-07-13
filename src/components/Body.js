const Body = () => {
  return (
    <div className="grid grid-cols-5 gap-2 w-2/3 mx-auto mt-4">
      <div className="border p-2">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zrrcwedyowtr23lwmpp7"
          alt="resImage"
        />
        <div className="my-2">
          <h6 className="text-[10px] font-bold">Anand Sweets & Saviours</h6>
          <p className="text-[9px]">Sweets, Snacks, Desserts</p>
        </div>
        <div className="flex justify-between text-[8px] mb-1">
          <span>4.4 starts</span>
          <span>-</span>
          <span>31 MIN</span>
          <span>-</span>
          <span>₹250 FOR TWO</span>
        </div>
      </div>
    </div>
  );
};

export default Body;
