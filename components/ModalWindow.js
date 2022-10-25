export const ModalWindow = ({ setVisibleModalWindow }) => {
  const heightPage = document.documentElement.offsetHeight;
  return (
    <div
      className={`fixed w-full h-full backdrop-blur-sm bg-white/30 flex justify-center items-center`}
    >
      <div className="relative w-[300px] h-[400px] bg-white border rounded-[15px] flex flex-col justify-center items-center">
        <button
          onClick={() => setVisibleModalWindow(false)}
          className="absolute top-[10px] right-[10px] w-[30px] h-[30px] rounded-[5px] flex justify-center items-center border"
        >
          X
        </button>
        <input
          placeholder="Name"
          className="border h-[40px] mb-[10px] pl-[10px] rounded-[5px]"
        />
        <input
          placeholder="Last name"
          className="border h-[40px] mb-[10px] pl-[10px] rounded-[5px]"
        />
        <input
          placeholder="email"
          className="border h-[40px] mb-[10px] pl-[10px] rounded-[5px]"
        />
        <button
          onClick={() => setVisibleModalWindow(false)}
          className="text-center border rounded-[5px] w-[100px] h-[30px] bg-amber-200 mt-[30px]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
