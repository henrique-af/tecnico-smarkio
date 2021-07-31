import React, { useState, useEffect } from 'react';
import './App.css';
import { create, findAll, getAudio } from "./services/smarkio";

function App() {

  const [comments, setComments] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const listComments = () => {
    setLoading(true)
    findAll()
      .then(response => {
        setAllComments(response.data)
        setLoading(false)
      })
  }

  const handleSubmit = () => {
    if (comments) {
      setLoading(true)
      create({ comments })
        .then(response => {
          setComments("")
          listComments()
        })
      return
    }
    alert("Digite algo antes de cadastrar!");
  }

  const handleAudio = (comment) => {
    setLoading(true)
    const payload = {
      text: comment
    }

    getAudio(payload).then(response => {
      const buffer = response.data.buffer.data;
      const arrayBuffer = new ArrayBuffer(buffer.length);
      const view = new Uint8Array(arrayBuffer);
      for (let i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
      }
      const audioContext = new AudioContext();
      audioContext.decodeAudioData(arrayBuffer,
        function (buffer) {
          setLoading(false)
          audioContext.resume();
          const outputSource = audioContext.createBufferSource();
          outputSource.connect(audioContext.destination);
          outputSource.buffer = buffer;
          outputSource.start(0);
        })
    })
  }

  useEffect(() => { listComments() }, [])

  return (
    <div className="app">
      <div className="container">
        {
          loading && (
            <div className="background">
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
          )}
        <div className="form">
          <h2>Comentário</h2>
          <textarea
            value={comments}
            name="formComentario"
            onChange={(event) => setComments(event.target.value)}
          />
          <input type="submit" className="button1" value="Cadastrar" onClick={handleSubmit} />
        </div>
        <div className="vertical-line"></div>
        <div className="comment1">
          <h2>Comentários</h2>
          {allComments.map(comment => {
            return (
              <div className="comment2" key={comment.id}>
                <p>{comment.comments}</p>
                <button className="button2" onClick={() => handleAudio(comment.comments)}>Ouvir</button>
              </div>)
          })}

        </div>
      </div>
    </div>
  );
}
export default App;
