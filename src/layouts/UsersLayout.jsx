import { Outlet } from "react-router-dom";

const students = [
  { id: 1, name: "Stavre" },
  { id: 2, name: "Mia" },
  { id: 3, name: "Petko" },
  { id: 4, name: "Trajko" },
];

export const UsersLayout = () => {
  return (
    <div>
      <h1>Users Layout</h1>
      <Outlet context={students} />
      <footer>Footer Component</footer>
    </div>
  );
};
