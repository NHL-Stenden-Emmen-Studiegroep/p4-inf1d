import { Component } from "react";
import { TouchableOpacity } from "react-native"

class Button extends Component {
    render() {
        return <TouchableOpacity>{this.props}</TouchableOpacity>;
    }
}

export default Button;