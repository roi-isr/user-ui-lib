import React from 'react';
import Layout from './components/UI/Layout/Layout';
import Header from './components/UI/header/Header';
import UsersLayout from './components/lib/UsersLayout'
import styles from'./App.module.scss';

function App() {
  return (
    <Layout>
      <Header 
        title='Welcome to the Users Library'
        image_url='https://cdn-icons-png.flaticon.com/512/666/666201.png'
      />
      <UsersLayout users={[]}/>
    </Layout>
  );
}

export default App;
