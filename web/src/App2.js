import {useState,useEffect} from 'react';
import api from './api';
import './App.css';


import MaterialTable from "material-table";
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
const columns= [
  { title: 'Artista', field: 'artista' },
  { title: 'País de Origen', field: 'pais' },
  { title: 'Género(s)', field: 'genero' },
  { title: 'Ventas Estimadas (millones)', field: 'ventas', type: 'numeric'}
];
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function App() {

  const styles= useStyles();
  const [data, setData]= useState([]);

  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [artistaSeleccionado, setArtistaSeleccionado]=useState({
    artista: "",
    genero: "",
    id: "",
    pais: "",
    ventas: ""
  })
  const handleChange=e=>{
    const {name, value}=e.target;
    setArtistaSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }









const [pessoas,setPessoas] = useState([]);
const [loading,setLoading] = useState(false);
const [nome,setNome] = useState('');
const [ativo,setAtivo] = useState('');
const [email,setEmail] = useState('');
const [role,setRole] = useState('');




const getPessoas = async ()=>{
    setLoading(true)
      await api.get(`/pessoas`)
      .then((res)=>{
          setPessoas(res.data)
          console.log(res.data)
      })
      .catch((error)=>{
        alert("Ocorreu um erro"+error)
        console.log("Ocorreu um erro!"+error)
      })
      setLoading(false);
  };




  const handleFormSubmit = async(e) =>{
    e.preventDefalt();
   // alert("enviado")
    await api.post(`/pessoas`,{
      nome:nome,
      ativo:ativo,
      email:email,
      role:role
    })
  }
  
  useEffect(()=>{
    getPessoas();
  },[]);
  return (
    <div>
      <h1>Material ui </h1>

      <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar Artista</Button>
      <br /><br />
      <MaterialTable
          columns={columns}
          data={data}
          title="Artistas Musicales con Mayores Ventas"  
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar Artista',
              onClick: (event, rowData) => seleccionarArtista(rowData, "Editar")
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar Artista',
              onClick: (event, rowData) => seleccionarArtista(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />

     {/*
     <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={} columns={columns} pageSize={5} checkboxSelection />
    </div>
     
     
     */ } 
      <hr/>

      <hr/> <br/><br/>
      <br/><br/><br/><br/><br/><br/><h1>Cadastrar Pessoa</h1>
      <hr/>
      <form onSubmit={handleFormSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={e=>setNome(e.target.value)} />
        </label><br/>
        <label>
          Status:
        <input type="text" value={ativo} onChange={e=>setAtivo(e.target.value)}/>
        </label><br/>
        <label>
          Email:
        <input type="email" value={email}onChange={e=>setEmail(e.target.value)} />
        </label><br/>
        <label>
          Perfil:
        <input type="text" value={role}onChange={e=>setRole(e.target.value)} />
        </label><br/>
        <input type="submit" value="Enviar"></input>

      </form>




      <h1>Lista de Pessoas</h1>
      <hr/>
      {loading === true && <h2>Carregando Dados</h2>}
      <table border="1">
      <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Status</th>
            <th>Email</th>
            <th>Perfil</th>
            <th>Data Inscrição</th>
          </tr>    
      </thead>   
      {pessoas.map((item,index)=>{
        return (
          <tbody key={index}>
            <tr>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.ativo}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.createdAt}</td>
            </tr>
          </tbody>
        )
        })}
      </table>

      <br/><button onClick={getPessoas}>Atualizar lista</button>

     {/** <br/><button onClick={getPessoas}>Atualizar lista</button>*/}
 
      <hr/>
      
      
      
    </div>
  );
}

export default App;
