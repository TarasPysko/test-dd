import { SelectComponent } from "./SelectComponent";

export const FilterBlock = ({
  changeSortBy,
  sortBy,
  changeFilterBy,
  filterBy,
  visibleModalWindow,
  setVisibleModalWindow,
}) => {
  return (
    <div className="max-w-[1300px] mx-auto flex px-[100px] py-[20px] justify-between">
      <div className="flex gap-[10px]">
        <SelectComponent
          onChange={changeSortBy}
          defaultValue={sortBy}
          values={["Name", "Last Name", "Email"]}
        />
        <SelectComponent
          onChange={changeFilterBy}
          defaultValue={filterBy}
          values={["Any", "Male", "Female"]}
        />
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
