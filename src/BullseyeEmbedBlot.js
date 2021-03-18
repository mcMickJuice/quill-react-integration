import Quill from 'quill'
import { targetRed } from './constants'

const Embed = Quill.import('blots/embed')

const targetLogo = '◎'

class BullseyeEmbedBlot extends Embed {
  // Creates corresponding DOM node
  static create(value) {
    console.log('value', value)
    const node = super.create()

    // format element to be red
    const span = document.createElement('span')
    span.style = `color:${targetRed};`
    span.innerText = targetLogo
    node.setAttribute('data-bullseyeEmbed', value)
    node.appendChild(span)
    return node
  }

  static value(node) {
    const attr = node.getAttribute('data-bullseyeEmbed')

    // this value is whats set to `attributes.font-adjust`
    // super important
    return attr
  }

  // TODO: style bullseye appropriately
  // handle big vs normal
}

BullseyeEmbedBlot.blotName = 'bullseye'
BullseyeEmbedBlot.tagName = 'span'

export default BullseyeEmbedBlot
