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
  const [animal, setAnimal] = useState("cat");
  const [numPagina, setNumPagina] = useState(1);

  const url = "http://petstore-demo-endpoint.execute-api.com/petstore/pets?type="+animal+"&page=1";

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
        <button className='selected' onClick={()=>setAnimal("cat")}>Cats</button>
        <button className='no_selected' onClick={()=>setAnimal("dog")}>Dogs</button>
        <button className='no_selected' onClick={()=>setAnimal("fish")}>Fishs</button>
        </div>
        <ul> 
          {loadedAnimal.map((animall)=> (
            <div>
            <li className='title'><span>id</span><span>Precio</span></li>
            <li className='odd'><span>{animall.id}</span><span>{animall.price}</span></li>
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