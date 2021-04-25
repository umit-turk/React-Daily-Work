import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

function Contacts() {
  return <div className="Contacts"></div>
}

function Chat() {
  return <div className="Chat"></div>
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  )
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />
}

ReactDOM.render(<App />, document.getElementById('root'))
