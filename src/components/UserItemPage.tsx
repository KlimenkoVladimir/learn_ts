import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "./types/types";
import { useParams } from "react-router-dom";

// interface UserItemPageParams {
//   id?: string;
// }

const UsersPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  console.log(typeof params.id);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <button>Назад к списку пользователей</button>
      <h1>Это страница пользователя {user?.name}</h1>
    </div>
  );
};

export default UsersPage;
