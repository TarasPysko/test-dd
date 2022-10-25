import { PaginationBlock } from "./PaginationBlock";
import { UserTile } from "./UserTile";

export const UsersBlock = ({
  users,
  currentPage,
  setCurrentPage,
  usersLength,
}) => {
  return (
    <div className="flex jusify-center flex-col items-center gap-[30px] mb-[50px]">
      {users.length === 0 ? (
        <div className="mt-[50px]">No matches {":("}</div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[20px] mx-auto">
            {users.map((user, i) => {
              return <UserTile user={user} key={user.login.uuid} />;
            })}
          </div>
          <PaginationBlock
            usersLength={usersLength}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};
