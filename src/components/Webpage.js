import { Component } from "react",
import { FillerText } from "./FillerText.js"


export class Webpage extends Component {
  render(){
    return (
      <div>
        <h1>"The world's coolest webpage"</h1>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}
