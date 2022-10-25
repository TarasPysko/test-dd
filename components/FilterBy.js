export const FilterBy = ({ changeFilterBy, filterBy }) => {
  return (
    <select
      className="border rounded-[5px] w-[100px] h-[30px]"
      defaultValue={filterBy}
      onChange={(e) => changeFilterBy(e)}
      name="select"
    >
      <option value="Any">Any</option>
      <option value="male" selected>
        Male
      </option>
      <option value="female">Female</option>
    </select>
  );
};
