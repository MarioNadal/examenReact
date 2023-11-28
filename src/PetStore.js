//http://petstore-demo-endpoint.execute-api.com/petstore/pets?type=cat&page=1
import {useState,useEffect} from 'react';
import React from 'react';
import './PetStore.css';

async function fetchAnimales(url){
  const response = await fetch(url);
  const listadoAnimales = await response.json();
  return listadoAnimales;
}

function PetStore() {
  const [loadedAnimal, setLoadedAnimal] = useState([]);
  const [animal, setAnimal] = useState("albums");
  const [numPagina, setNumPagina] = useState(1);

  const url = "https://jsonplaceholder.typicode.com/"+animal;

  useEffect(function(){
    fetchAnimales(url).then((fetchAnimales)=> setLoadedAnimal(fetchAnimales))
  },[animal])

  const reducePagina = () =>{
    setNumPagina(numPagina-1)
  }

  const aumentaPagina = () =>{
    setNumPagina(numPagina+1)
  }

  return (
    <div>
        <div className='button'>
        <button className='no_selected' onClick={()=>setAnimal("albums")}>Albums</button>
        <button className='no_selected' onClick={()=>setAnimal("todos")}>Todos</button>
        <button className='no_selected' onClick={()=>setAnimal("posts")}>Posts</button>
        </div>
        <ul> 
          {loadedAnimal.map((animall)=> (
            <div>
            <li className='title'><span>id</span><span>Precio</span></li>
            <li className='odd'><span>{animall.id}</span><span>{animall.title}</span></li>
            </div>
            ))}
        </ul>
        <div className='button'>
        <button onClick={reducePagina}> {'<<'} </button>
        <span>Página {numPagina}</span>
        <button onClick={aumentaPagina}> {'>>'} </button>
        <p>{numPagina}</p>
        </div>


    </div>
  )
}

export default PetStore