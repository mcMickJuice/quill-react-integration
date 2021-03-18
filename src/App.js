import './styles.css'
import React from 'react'
import QuillWrapper from './QuillWrapper'

export default function App() {
  const [contents, setContents] = React.useState([])

  return (
    <>
      <div className="App">
        This is a react app that uses quill
        <QuillWrapper onChange={(c) => setContents(c)} />
      </div>
      <pre>{JSON.stringify(contents, null, 2)}</pre>
    </>
  )
}
