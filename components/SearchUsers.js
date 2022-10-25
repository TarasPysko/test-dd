export const SearchUsers = ({ setSerchUserBy, serchUserBy }) => {
  return (
    <input
      value={serchUserBy}
      onChange={(e) => {
        setSerchUserBy(e.target.value);
      }}
      placeholder="Search user"
      className="border rounded-[5px] px-[10px]"
    />
  );
};
