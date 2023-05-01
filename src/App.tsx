import React from "react";
import Layout from "./components/UI/Layout/Layout";
import Header from "./components/UI/header/Header";
import UsersLayout from "./components/lib/UsersLayout";
import mockResponse from "./tmp/MockResponse.json";
import useFetchUsers from "./hooks/useFetchUsers";

const USERS_URL = "https://randomuser.me/api/?results=10";

function App() {
  const [users, setUsers] = useFetchUsers(USERS_URL);
  return (
    <Layout>
      <Header
        title="Welcome to the Users Library"
        image_url="https://cdn-icons-png.flaticon.com/512/666/666201.png"
      />
      {users && <UsersLayout users={users} />}
    </Layout>
  );
}

export default App;
