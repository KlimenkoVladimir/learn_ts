import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import List from "./List";
import UserItem from "./UserItem";
import { IUser } from "./types/types";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem key={user.id} user={user}></UserItem>
      )}
    ></List>
  );
};

export default UsersPage;
