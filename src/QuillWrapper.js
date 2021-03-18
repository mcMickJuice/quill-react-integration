import React from 'react'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'
import mountQuill from './mountQuill'

const QuillWrapper = (props) => {
  const mountRef = React.useRef()
  let quill = React.useRef(null)

  React.useEffect(() => {
    if (mountRef.current != null) {
      quill.current = mountQuill(mountRef.current)

      quill.current.on('text-change', (delta) => {
        props.onChange(quill.current.getContents())
      })
    }
  }, [])

  function handleBullseyeClick(size) {
    let range = quill.current.getSelection(true)
    quill.current.insertEmbed(range.index, 'bullseye', size, Quill.sources.USER)
    quill.current.setSelection(range.index + 1)
  }

  function handleFontAdjustKeyup(event) {
    if (event.keyCode === 13) {
      const val = Number(event.target.value)

      event.target.value = null

      // is this is font sizing an out of box feature or do I need a blot?
      quill.current.format('font-adjust', val)
    }
  }

  function handleColorSelect(evt) {
    const value = evt.target.value

    quill.current.format('color', value)
  }

  return (
    <div>
      <div>
        <button
          onClick={() => handleBullseyeClick('normal')}
          id="normal-bullseye"
        >
          Normal ◎
        </button>
        <button
          onClick={() => handleBullseyeClick('large')}
          id="large-bullseye"
        >
          Large ◎
        </button>
      </div>
      <div>
        <label htmlFor="fontAdj">Font Adjustment (%)</label>
        <input onKeyUp={handleFontAdjustKeyup} id="fontAdj" type="number" />
      </div>
      <div>
        <label htmlFor="color-picker">Pick a Color</label>
        <input onChange={handleColorSelect} type="color" id="color-picker" />
      </div>
      <div ref={mountRef} id="editor"></div>
    </div>
  )
}

export default QuillWrapper
