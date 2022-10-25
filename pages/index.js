import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { FilterBlock } from "../components/FilterBlock";
import { UsersBlock } from "../components/UsersBlock";
import { ModalWindow } from "../components/ModalWindow";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterBy, setFilterBy] = useState("any");
  const [sortBy, setSortBy] = useState("name");
  const [visibleModalWindow, setVisibleModalWindow] = useState(false);
  const [serchUserBy, setSerchUserBy] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://randomuser.me/api/?results=200
    `
      )
      .then(({ data }) => {
        setUsers(data.results);
      });
  }, []);

  const changeSortBy = (e) => {
    return setSortBy(e.target.value);
  };
  const changeFilterBy = (e) => {
    return setFilterBy(e.target.value);
  };
  const searchUser = users.filter((user) => {
    return (
      user.name.first.toLowerCase().indexOf(serchUserBy.toLowerCase()) > -1 ||
      user.name.last.toLowerCase().indexOf(serchUserBy.toLowerCase()) > -1 ||
      user.email.toLowerCase().indexOf(serchUserBy.toLowerCase()) > -1
    );
  });
  const filteredUsers = () => {
    if (filterBy === "male") {
      return searchUser.filter((user) => {
        return user.gender === "male";
      });
    } else if (filterBy === "female") {
      return searchUser.filter((user) => {
        return user.gender === "female";
      });
    } else {
      return searchUser;
    }
  };
  const sortedUsers = () => {
    if (sortBy === "name") {
      return filteredUsers().sort((a, b) => {
        return a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1;
      });
    }
    if (sortBy === "last-name") {
      return filteredUsers().sort((a, b) => {
        return a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1;
      });
    }
    if (sortBy === "email") {
      return filteredUsers().sort((a, b) => {
        return a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1;
      });
    }
  };

  const paginationUsers = () => {
    return sortedUsers().slice(currentPage * 20, (currentPage + 1) * 20);
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      {visibleModalWindow && (
        <ModalWindow setVisibleModalWindow={setVisibleModalWindow} />
      )}
      <Header serchUserBy={serchUserBy} setSerchUserBy={setSerchUserBy} />
      <FilterBlock
        changeSortBy={changeSortBy}
        sortBy={sortBy}
        filterBy={filterBy}
        changeFilterBy={changeFilterBy}
        visibleModalWindow={visibleModalWindow}
        setVisibleModalWindow={setVisibleModalWindow}
      />
      <UsersBlock
        users={paginationUsers()}
        usersLength={sortedUsers()}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
