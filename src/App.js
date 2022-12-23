import { Routes, Route } from "react-router-dom";
import Layout from "./components/base-route/Layout";
import Login from "./components/base-route/switchable/Login";
import Public from "./components/base-route/switchable/Public";
import DashLayout from "./components/dash-route/DashLayout";
import NotesList from "./components/dash-route/switchable/NotesList";
import UsersList from "./components/dash-route/switchable/UsersList";
import Welcome from "./components/dash-route/switchable/Welcome";

const App = () => {
  const content = (
    <Routes>
      {/* Base Nested Routes starts */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        {/* Dash Nested Routes - START */}
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="notes" elements={<NotesList />} />
          <Route path="users" elements={<UsersList />} />
        </Route>
        {/* Dash Nested Routes - END */}
      </Route>
      {/* Base route ends. */}
    </Routes>
  );
  return content;
};

export default App;
