import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [cadastro, setCadastro] = useState('')
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/get').then((response) => {
      setComentarios(response.data)
    });
  }, []);

  const cadastrar = () => {
    Axios.post('http://localhost:5000/post', {
      comments: cadastro
    });

    setComentarios((comentarios) => {
      return [
        ...comentarios,
        { comments: cadastro }
      ]
    });

    document.getElementsByName('formComentario').value='';

  };

//

  return (
    <div className="app">
      <div className="container">
        <div className="form">
          <h2>Comentário</h2>
          <textarea name="formComentario"/>
          <input type="submit" className="button1" value="Cadastrar" onClick={cadastrar}/>
        </div>
        <div className="vertical-line"></div>
        <div className="comment1">
          <h2>Comentários</h2>
              <div className="comment2">
                <p></p>
                <button className="button2">Ouvir</button>
              </div>
        </div>
      </div>
    </div>
  );
}


export default App;
