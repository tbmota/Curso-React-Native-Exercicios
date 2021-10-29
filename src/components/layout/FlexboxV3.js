import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
   return (
       <View style={style.FlexV3}>
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
        flexDirection: "row-reverse",
        justifyContent: "space-evenly",
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})
//FlexGrow cresce no eixo da coluna