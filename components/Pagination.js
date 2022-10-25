export const Pagination = ({ currentPage, pageLenght }) => {
  return (
    <div className="flex">
      <div className="flex border width-[20px] height-[10px]">{"<"}</div>
      <div className="flex border width-[20px] height-[10px]">1</div>
      <div className="flex border width-[20px] height-[10px]">{">"}</div>
    </div>
  );
};
