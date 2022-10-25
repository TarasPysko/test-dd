export const Select = ({ onChange, defaultValue, values }) => {
  return (
    <>
      <label className="mr-[10px]" htmlFor="sort">
        Sort by
      </label>
      <select
        id="sort"
        className="border rounded-[5px] w-[100px] h-[30px]"
        defaultValue={defaultValue}
        onChange={(e) => onChange(e)}
      >
        {values.map((value) => {
          return (
            <option value={value.toLowerCase().split(" ").join("-")}>
              {value}
            </option>
          );
        })}
      </select>
    </>
  );
};
