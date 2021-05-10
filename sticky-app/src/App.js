import './App.css';
import {useRef, useEffect, useState} from 'react'
import React from 'react'
import MainContext from './MainContext';
import LeaveCommentText from './components/LeaveCommentText';
import Note from '../src/components/Note';
import NoteBox from './components/NoteBox';

function App() {
  const screen = useRef(null)
  const [mode, setMode] = useState(false)
  const [notes, setNotes] = useState(localStorage.notes && JSON.parse(localStorage.notes) || [])
  const [position, setPosition] = useState({
    x:0,
    y:0
  })

  const [boxVisible, setBoxVisible] = useState(false)

  const [boxPosition, setBoxPosition] = useState({
    x:0,
    y:0
  })

  useEffect(()=> {
    screen.current.focus()
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [[notes]])
  
  const handleKeyUp = (e) => {
    if(e.key === 'c'){
      setMode(!mode)
      setBoxVisible(false) // c ye tekrar basarsak box gelecek.
    }
    if(e.key === 'Escape'){
      setBoxVisible(false)
    }
  }

  const handleMouseMove = (e) => {
    
    setPosition({
      x: [e.pageX, e.clientX],
      y: [e.pageY, e.clientY]
    })
  }


  const handleClick = (e) => {
    if(mode){
    setBoxPosition({
      x: position.x[0],
      y:position.y[0]
    })
    setBoxVisible(true)
  }
  }

  const data = {
    position,
    boxPosition,
    setMode,
    notes,
    setNotes,
    setBoxVisible
  }

  return (
    <MainContext.Provider value={data}> {/*  value değerine alt componentlerden de erişebiliyoruz*/}
    <div ref={screen} onClick={handleClick} onMouseMove={handleMouseMove} tabIndex={0} onKeyUp={handleKeyUp} className={`screen${mode &&  ' editable'}`}> {/* focuslanabilmek için tabIndex belirlemeliyiz */}


    <img style={{opacity: '.7'}} src="https://webso.cool/images/radyosfer.jpg" />

    {mode &&  <LeaveCommentText />}


    {notes && notes.map((note, key) => <Note key={key} note={note} />)}

    {boxVisible && <NoteBox />}

    </div>

    </MainContext.Provider>
  );
}

export default App;
