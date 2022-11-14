import React from 'react';
import style from './App.module.css'
import  ContactsPage  from './components/ContactsPage/ContactsPage';

function App() {

  return (
    <div className={style.wrapperConteiner}>
      <ContactsPage />
    </div>
  );
}

export default App;
