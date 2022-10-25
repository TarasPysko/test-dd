import { Pagination } from "./pagination";
import { UserTile } from "./UserTile";

export const UsersBlock = ({ users }) => {
  return (
    <div className="flex jusify-center flex-col items-center gap-[30px] mb-[50px]">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[20px] mx-auto">
        {users.map((user, i) => {
          return <UserTile user={user} key={user.login.uuid} />;
        })}
      </div>
      {/* <Pagination /> */}
    </div>
  );
};
