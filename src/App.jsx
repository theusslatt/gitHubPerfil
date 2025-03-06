import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true) ;
  const [nomeUsuario, setNomeUsuario] = useState('');

  {/* comentario no React no return */}

  return (
    <>
    <div className="container">
      <input className="digiteAqui" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digite seu usuário GitHub:"/>
    </div>

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