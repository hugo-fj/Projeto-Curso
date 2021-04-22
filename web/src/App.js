import React, { useState,useEffect} from 'react';

import MaterialTable from "material-table";
import api from './api';
//import {Modal, TextField, Button} from '@material-ui/core';
//import {makeStyles} from '@material-ui/core/styles';



const columns= [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'nome' },
    { title: 'Email', field: 'email' },
    { title: 'teste', field: 'ventas', type: 'numeric'}
  ];


  function App() {
    const [data,setData] = useState([]);
    const [pessoas,setPessoas] = useState([]);

    
const getPessoas = async ()=>{
    //setLoading(true)
      await api.get(`/pessoas`)
      .then((res)=>{
          setData(res.data)
          console.log(res.data)
      })
      .catch((error)=>{
        alert("Ocorreu um erro"+error)
        console.log("Ocorreu um erro!"+error)
      })
      //setLoading(false);
  };

    useEffect(()=>{
        getPessoas();
      },[]);
    return (
    <div>
     
     <MaterialTable
          columns={columns}
          data={data}
          title = "Teste"
         
         
        />
       
    </div>
  );









  }


  export default App;