import { SearchUsers } from "./SearchUsers";

export const Header = ({ serchUserBy, setSerchUserBy }) => {
  return (
    <div className="max-w-[1300px] mx-auto grid md:flex justify-between px-[100px] py-[20px] border-b gap-[10px]">
      <h1 className="font-bold">Users</h1>
      <SearchUsers serchUserBy={serchUserBy} setSerchUserBy={setSerchUserBy} />
      <p> Today is the 24th of October</p>
    </div>
  );
};
