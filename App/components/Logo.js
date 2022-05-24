import React from 'react';
import Svg, {G, Path } from 'react-native-svg';

export function Logo({width, height}) {
  return (
        <Svg height={height} width={width} viewBox='0 0 75.324 70.406'>
        <G transform="translate(0.091 -0.156)" />
            <Path d="M7.069,7.039,33.862.111,26.773,26.764.11,33.744Z" transform="translate(37.564 0) rotate(45)" fill="#00adef"/>
            <Path d="M.023,7.084l26.66-7,19.66,19.656L19.737,26.695Z" transform="translate(18.769 18.91) rotate(45)" fill="#0298d1"/>
            <Path d="M7.172.023,26.708,19.734,19.735,46.315.087,26.661Z" transform="translate(56.364 18.927) rotate(45)" fill="#02506e"/>
            <G transform="translate(6.666 27.445)">
                <Path d="M-6.192-24.427,13.343-13.045v5.89L-6.192-18.847Z" transform="translate(15.069 25.958)" fill="#fff"/>
                <Path d="M0,0,19.535,11.382v5.89L0,5.58Z" transform="translate(28.413 33.57) rotate(180)" fill="#fff"/>
                <Path d="M5.255.015,23.129,10.356l-5.338,3.057L.009,3.056Z" transform="translate(11.493 26.752) rotate(-120)" fill="#fff"/>
            </G>
            <G transform="translate(31.327 29.001)">
                  <Path d="M-6.192-7.155,13.343-18.537v-5.89L-6.192-12.735Z" transform="translate(15.069 39.194)" fill="#fff"/>
                  <Path d="M0,17.272,19.535,5.89V0L0,11.692Z" transform="translate(28.413 17.272) rotate(180)" fill="#fff"/>
                  <Path d="M5.217,13.348,23.091,3.007,17.753-.05-.029,10.307Z" transform="translate(23.047 13.532) rotate(120)" fill="#fff"/>
            </G>
          </Svg>
    )
}
