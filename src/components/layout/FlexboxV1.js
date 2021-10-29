import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
   return (
       <View style={style.FlexV1}>
            <Quadrado cor='purple'/>
            <Quadrado cor='pink' />
            <Quadrado cor='white' />
            <Quadrado cor='green' />
            <Quadrado cor='red' />
       </View>
   )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "space-evenly",
        backgroundColor: '#000'
    }
})
//FlexGrow cresce no eixo da coluna