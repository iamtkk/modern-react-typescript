import type {SyntheticEvent} from 'react'

export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) => console.log('click event bubbles on <div>')
  const onButtonClick = (e: SyntheticEvent) => {
    console.log('mouse click occurs on <button> and call stopPropagation')
    e.stopPropagation()
  }
  return (
    <div onClick={onDivClick}>
      <div>StopPropagation</div>
      <button onClick={onButtonClick}>Click me and stop event propagation</button>
    </div>
  )
}
