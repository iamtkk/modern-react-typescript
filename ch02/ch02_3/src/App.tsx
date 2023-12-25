import React, {Component} from 'react'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

export default class App extends Component {
  render() {
    const isLoading = false
    const children = (
      <ul>
        <ClassComponent href="http://www.google.com" text="go to Google" />
        <ArrowComponent href="http://www.naver.com" text="go to Naver" />
      </ul>
    )
    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && children}
      </div>
    )
  }
}
