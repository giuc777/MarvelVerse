import { useEffect, useState } from "react";
import caracters from "../../functions/caracters";
import Card from "./Cards";
import Carrusel from "./Carrusel";
import { Link } from "react-router-dom";
import './styles/heros.css'

const Heros = () => {
  const [charactersData, setCharactersData] = useState([]); // Cambia el nombre del estado a charactersData
  const [end, setEnd] = useState('2')
  const [start, setStart] =useState('1')
  const [characters, setCharacters] = useState(false)
  

  const key = import.meta.env.VITE_API_KEY_PUBLIC;
  const hash = import.meta.env.VITE_HAS_API;

  useEffect(() => {
    const fetchNewCharacters = async () => {
      
      try {
        const newCharactersResult = await caracters(key, hash);
        setCharactersData(newCharactersResult);
        setCharacters(false)
        setStart(1); // Reiniciar el inicio de la lista a 1
        setEnd(2); // Reiniciar el final de la lista a 2
      } catch (error) {
        console.error("Error fetching new characters:", error);
      }
    };

    fetchNewCharacters();
  }, [key, hash, characters]); // Agrega las dependencias key y hash al array de dependencias



  const NewCharacters = ()=>{
    setCharacters(true)
  }

  const Avanzar = () => {
    setStart(start+1)
    setEnd(end+1)
  };

  const Back = ()=>{
    setStart(start -1)
    setEnd(end - 1)
  }

  return (
    <>
    <section className="SectionHeros">
      
      <article id="ListaDePersonajes">
          <h2 className="text-center letter_Marvel titleCarrouselHeros display-3">Personajes: </h2>
          <h3 className="letter_Montserra display-6 subtittle1" >Lista de Personajes: </h3>
          {charactersData.length > 0
            ? charactersData.slice(start, end).map((hero, index)=>{
              const comics = hero.urls[0].url
              return (
                <Carrusel name={hero.name} 
                description={hero.description.length > 0 ? hero.description : 'No hay información'} 
                img={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} 
                Comincs={comics}
                position={start}
                handleClickRight={Avanzar}
                handleClickLeft={Back}
                key={index}
                end ={end}
                max={charactersData.length}
                />
              )
            })
          : <span>Loading..</span>}
          <button onClick={()=>{NewCharacters()}} className="ButtonNewheros letter_Marvel">Nuevos personajes</button>
      </article>
    </section>
    
    </>
  );
};

export default Heros;

