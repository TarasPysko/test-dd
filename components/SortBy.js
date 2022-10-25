export const SortBy = ({ changeSortBy, sortBy }) => {
  return (
    <select
      className="border rounded-[5px] w-[100px] h-[30px]"
      defaultValue={sortBy}
      onChange={(e) => changeSortBy(e)}
      name="select"
    >
      <option value="name">Name</option>
      <option value="last-name" selected>
        Last name
      </option>
      <option value="email">Email</option>
    </select>
  );
};
