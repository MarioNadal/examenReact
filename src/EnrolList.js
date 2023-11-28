import "./EnrolList.css";
import {useState, useEffect, useCallback} from 'react'
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import './classes.css'

// Columns for the detail list.
const columns = [
  {
    key: "fname",
    name: "First Name",
    fieldName: "fname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "lname",
    name: "Last Name",
    fieldName: "lname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "program",
    name: "Program",
    fieldName: "program",
    minWidth: 60,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "email",
    name: "Email",
    fieldName: "email",
    minWidth: 130,
    maxWidth: 200,
    isResizable: true,
  },
];

const EnrolList = () => {
  const [enteredNombre, setEnteredNombre] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('')
  const [enteredProgram, setEnteredProgram] = useState('UG')
  const [enteredEmail, setEnteredEmail] = useState('')

  const [nombreIncorrecto, setNombreIncorrecto] = useState('');
  const [lastNameIncorrecto, setLastNameIncorrecto] = useState('')
  const [emailIncorrecto, setEmailIncorrecto] = useState('')

  const [items, addItems] = useState([{key:1, fname: "Mario", lname: "Nadal Ara", program:"PG", email:"mario@gmail.com"}])

  function updateNombre(event){
    setEnteredNombre(event.target.value)
  }
  function updateLastName(event){
    setEnteredLastName(event.target.value)
  }
  function updateProgram(event){
    setEnteredProgram(event.target.value)
  }
  function updateEmail(event){
    setEnteredEmail(event.target.value)
  }

  const validateTodo = useCallback(
    function(){
      if(enteredNombre===""||enteredNombre.length>10){
        setNombreIncorrecto(<p>El nombre no es válido. No debe estar vacio ni tener más de 10 carácteres</p>)
      }else{
        setNombreIncorrecto(<span></span>)
      }
      if(enteredLastName===""||enteredLastName.length>15){
        setLastNameIncorrecto(<p>El Last Name no es válido. No debe estar vacio ni tener más de 15 carácteres</p>)
      }else{
        setLastNameIncorrecto(<span></span>)
      }
      if(enteredEmail===""||enteredEmail.length>15||!enteredEmail.includes("@")){
        setEmailIncorrecto(<p>El Email no es válido. No debe estar vacio, ni tener más de 15 carácteres y debe incluir un @</p>)
      }else{
        setEmailIncorrecto(<span></span>)
      }
      if(enteredNombre===""||enteredNombre.length>10||enteredLastName===""||enteredLastName.length>15||enteredEmail===""||enteredEmail.length>15||!enteredEmail.includes("@")){
        document.getElementById('buttonEnviar').disabled = true;
      }else{
        document.getElementById('buttonEnviar').disabled = false;
      }
    },
    [enteredNombre, enteredLastName, enteredEmail]
  )

  useEffect(
    function(){
      validateTodo();
    },
    [validateTodo]
  )


  const enviarDatos = (e) => {
    e.preventDefault();
    addItems([
      ...items,
        {key: 1,
        fname: enteredNombre,
        lname: enteredLastName,
        program: enteredProgram,
        email: enteredEmail
  }])
  }


  return (
    <div className="enrolList">
      <form className="form">
        <div>
          <label>Nombre </label>
          <input type="nombre" onChange={updateNombre}></input>
          {nombreIncorrecto}
          <p></p>
          <label>Last name  </label>
          <input type="lastName" onChange={updateLastName}></input>
          {lastNameIncorrecto}
          <p></p>
          <label>Program  </label>
          <select type="program" onChange={updateProgram}>
            <option defaultValue="UG">UG</option>
            <option value="PG">PG</option>
          </select>
          <p></p>
          <label>Email  </label>
          <input type="email" onChange={updateEmail}></input>
          {emailIncorrecto}
          <p></p>
        </div>
        <p></p>
        <button type ='submit' onClick={enviarDatos} id="buttonEnviar">Enviar</button>
        <p></p>
      </form>
      <DetailsList items={items} columns={columns} />
    </div>
  );
};
export default EnrolList;