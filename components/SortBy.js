export const SortBy = ({ changeSortBy, sortBy }) => {
  return (
    <form>
      <select
        className="border rounded-[5px] w-[100px] h-[30px]"
        defaultValue={sortBy}
        onChange={(e) => changeSortBy(e)}
      >
        <option selected value="name">
          Name
        </option>
        <option value="last-name" selected>
          Last name
        </option>
        <option value="email">Email</option>
      </select>
    </form>
  );
};
