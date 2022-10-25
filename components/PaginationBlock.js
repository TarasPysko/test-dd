export const PaginationBlock = ({
  currentPage,
  setCurrentPage,
  usersLength,
}) => {
  const allpages = Math.ceil(usersLength.length / 20);
  return (
    <div className="flex text-center gap-[10px]">
      {currentPage === 0 ? null : (
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          className=" border w-[50px] h-[30px] rounded-[5px]"
        >
          <p>Prev</p>
        </button>
      )}

      <button className=" border w-[30px] h-[30px] rounded-[5px]">
        <p>{currentPage + 1}</p>
      </button>
      {currentPage + 1 === allpages ? null : (
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          className="border w-[50px] h-[30px] rounded-[5px]"
        >
          <p>Next</p>
        </button>
      )}
    </div>
  );
};
