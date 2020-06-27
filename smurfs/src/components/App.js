import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../contexts/GlobalState';
import axios from 'axios';
import './App.css';
import SmurfForm from './SmurfForm';

const App = () => {
  const {fetchSuccess, fetchError} = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        fetchSuccess(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        fetchError(err.message);
      });
  }, []);

  return (
    <div>
      <SmurfForm />
    </div>
  )
}

export default App;