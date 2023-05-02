import React from "react";
import Layout from "./components/UI/layout/Layout";
import Header from "./components/UI/header/Header";
import UsersLayout from "./components/lib/UsersLayout";
import useFetchUsers from "./hooks/useFetchUsers";

const USERS_URL = "https://randomuser.me/api/?results=10";

function App() {
  useFetchUsers(USERS_URL);
  return (
    <Layout>
      <Header
        title="Welcome to the Users Library"
        image_url="https://cdn-icons-png.flaticon.com/512/666/666201.png"
      />
      <UsersLayout />
    </Layout>
  );
}

export default App;
