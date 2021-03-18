import 'quill/dist/quill.snow.css'
import Quill from 'quill'
import BullseyeEmbedBlot from './BullseyeEmbedBlot'
import FontAdjust from './FontAdjust'

const toolbarOptions = [
  ['bold', 'italic', 'underline'],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ size: ['small', false, 'large'] }],
  [{ color: ['#cc0000', 'black'] }], // default takes color from theme
  ['clean'] // remove formatting button
]

/**
 * this is bigbullseye
 * <span style="color: #cc0000;"><span class="h-sr-only">Target</span><span aria-hidden="true">◎</span></span>
 *
 */

Quill.register(BullseyeEmbedBlot)
Quill.register(FontAdjust)

function mountQuill(element) {
  const instance = new Quill(element, {
    theme: 'snow',
    modules: {
      toolbar: toolbarOptions
    }
  })

  return instance
}

export default mountQuill
