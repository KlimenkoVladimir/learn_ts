import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
function App() {
  return (
    <BrowserRouter>
      <NavLink to="/users">Список пользователей</NavLink>
      <NavLink to="/todos">Список дел</NavLink>
      <Routes>
        <Route path={"/users"} element={<UsersPage />}></Route>

        <Route path={"/todos"} element={<TodosPage />}></Route>

        <Route path="/users/:id" element={<UserItemPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
