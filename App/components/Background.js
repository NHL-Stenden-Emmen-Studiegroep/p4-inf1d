import * as React from "react"
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={428}
      height={926}
      viewBox="0 0 428 926"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0H428V926H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Optional loading screens" clipPath="url(#a)">
        <Path fill="#fff" d="M0 0H428V926H0z" />
        <G transform="translate(-432 -322)">
          <Circle
            data-name="Ellipse 1"
            cx={347.5}
            cy={347.5}
            r={347.5}
            transform="translate(55 266)"
            fill="#0075a2"
          />
          <Circle
            data-name="Ellipse 2"
            cx={347.5}
            cy={347.5}
            r={347.5}
            transform="translate(486 595)"
            fill="#008fc6"
          />
          <Circle
            data-name="Ellipse 3"
            cx={347.5}
            cy={347.5}
            r={347.5}
            transform="translate(0 915)"
            fill="#fff"
          />
          <Circle
            data-name="Ellipse 4"
            cx={347.5}
            cy={347.5}
            r={347.5}
            transform="translate(520)"
            fill="#fff"
          />
          <G
            data-name="Rectangle 6"
            transform="translate(427 317)"
            fill="none"
            stroke="#707070"
            strokeWidth={5}
          >
            <Path stroke="none" d="M0 0H438V936H0z" />
            <Path d="M2.5 2.5H435.5V933.5H2.5z" />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent

// import Colors from "../constants/Colors";
// import { StyleSheet } from 'react-native';
// import { View } from "../components/Themed";




// const Background = () => {
//     return(
//         <>
//         <View style={[styles.circleBL, styles.circle]}></View>
//         <View style={[styles.circleBR, styles.circle]}></View>
//         <View style={[styles.circleTL, styles.circle]}></View>
//         <View style={[styles.circleTR, styles.circle]}></View>
//         </>
//     );
// }

// const rad = 700;

// const styles = StyleSheet.create({
//     circle: {
//         height: rad,
//         width: rad,
//         borderRadius: rad,
//         position: "absolute",
//     },

//     circleTL: {
//         backgroundColor: Colors.light.colorBlue700,
//         top: -150,
//         left: -300,
//         zIndex: -5
//     },

//     circleTR: {
//         backgroundColor: Colors.light.bgColorWhite,
//         top: -300,
//         right: -400,
//         zIndex: -3,
//     },

//     circleBR: {
//         backgroundColor: Colors.light.colorBlue500,
//         bottom : -150,
//         right: -350,
//         zIndex: -4,
//     },

//     circleBL: {
//         backgroundColor: Colors.light.bgColorWhite,
//         bottom: -350,
//         left: -450,
//         zIndex: -3,
//     }
// })




// export default Background;