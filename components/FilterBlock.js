import { FilterBy } from "./FilterBy";
import { SortBy } from "./SortBy";

export const FilterBlock = ({
  changeSortBy,
  sortBy,
  changeFilterBy,
  filterBy,
  visibleModalWindow,
  setVisibleModalWindow,
}) => {
  return (
    <div className="flex px-[100px] py-[20px] justify-between">
      <div className="flex gap-[30px]">
        {/*  <SortBy changeSortBy={changeSortBy} sortBy={sortBy} />
        <FilterBy changeFilterBy={changeFilterBy} filterBy={filterBy} /> */}
      </div>
      <button
        onClick={() => setVisibleModalWindow(!visibleModalWindow)}
        className="text-center border rounded-[5px] w-[100px] h-[30px]"
      >
        Apply
      </button>
    </div>
  );
};
