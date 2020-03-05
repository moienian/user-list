import React from "react";
import UserItem from "./UserItem";
import AverageAge from "./AverageAge";
import myUsers from "./users.json";

const isUser = () => {
  return myUsers.filter(user => user.role === "user");
};

const avgAdmin = () => {
  const admins = myUsers.filter(user => user.role === "admin");
  const ages = admins.map(res => res.age);
  const sum = ages.reduce((total, current) => (current += total));
  return sum / ages.length;
};

const UserList = () => {
  return (
    <div>
      {isUser().map((user, id) => {
        return <UserItem key={id} name={user.name} />;
      })}
      {<AverageAge average={avgAdmin()} />}
    </div>
  );
};

export default UserList;
