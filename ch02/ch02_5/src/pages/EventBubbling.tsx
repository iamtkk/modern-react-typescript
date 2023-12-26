import type {SyntheticEvent} from 'react'

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log('clcik event bubbles on <div>', isTrusted, target, bubbles, currentTarget)
  }
  const onButtonClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log(
      'click event starts at <button>',
      isTrusted,
      target,
      bubbles,
      currentTarget
    )
  }
  return (
    <div onClick={onDivClick}>
      <div>EventBubbling</div>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  )
}
