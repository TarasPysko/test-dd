import Image from "next/image";

export const UserTile = ({ user }) => {
  return (
    <div className="flex flex-col items-center w-[250px] mx-auto hover:scale-110">
      <img className="rounded-full" src={user.picture.large} />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p> {user.email}</p>
    </div>
  );
};
