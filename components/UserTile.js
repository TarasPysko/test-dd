export const UserTile = ({ user }) => {
  return (
    <div className="flex flex-col items-center w-[250px] h-[200px] mx-auto">
      <img className="rounded-full" src={user.picture.large} />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p> {user.email}</p>
    </div>
  );
};
