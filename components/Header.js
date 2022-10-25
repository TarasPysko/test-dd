import { SearchUsers } from "./SearchUsers";

export const Header = ({ serchUserBy, setSerchUserBy }) => {
  return (
    <div className="flex justify-between px-[100px] py-[20px] border-b">
      <h1 className="font-bold">Users</h1>
      <SearchUsers serchUserBy={serchUserBy} setSerchUserBy={setSerchUserBy} />
      Today is the 24th of October
    </div>
  );
};
