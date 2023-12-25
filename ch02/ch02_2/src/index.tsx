import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as D from './data'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const children = D.makeArray(10).map((_, i) => (
  <div key={i}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} alt="random_avatar" />
  </div>
))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
console.log(children)
const virtualDom = <div>{children}</div>
root.render(virtualDom)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
