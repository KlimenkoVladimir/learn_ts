import React, { FC } from "react";
import { IUser } from "./types/types";

interface UserItemProps {
  user: IUser;
}

const UswrItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      {user.id}. {user.name} проживает в городе {user.address.city} по улице
      {user.address.street}
    </div>
  );
};

export default UswrItem;
