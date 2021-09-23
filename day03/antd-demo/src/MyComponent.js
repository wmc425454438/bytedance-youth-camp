import { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export class MyComponent extends Component {
    render() {
        return <div></div>
    }
}

MyComponent.contextType = ThemeContext