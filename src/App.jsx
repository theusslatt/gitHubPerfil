import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/reposlist";

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true) ;
  const [nomeUsuario, setNomeUsuario] = useState('');

  {/* comentario no React no return */}

  return (
    <>
  <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

    {nomeUsuario.length > 4 && (  
      <> 
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario />
    )}

      <button onClick={ () => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle from</button> */}
    </>
  )
}

export default App