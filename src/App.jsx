import { useState,useEffect } from 'react'
import './App.css';
import { initializeFireBase } from './config/config';
import { collection,getDocs  } from 'firebase/firestore/lite';

function App() {
  const  {db} = initializeFireBase();

  // const checkConnection = async () =>{
  //   const connected =  collection(db,"test");
  //   const getConnection = await getDocs(connected);
  //   console.log(getConnection.docs)
  // }

  // useEffect(()=>{
  //   checkConnection()
  // },[])
  
  return (
    <>
    </>
  )
}

export default App
