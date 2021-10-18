import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

// export default (props) => {
//     console.warn(props) //yellowbox
//     return (
//         <Text style={Estilo.txtG}>
//             O valor de {props.max} é maior que o valor de {props.min}!
//         </Text>
//     ) 
// }

export default props => (
        <Text style={Estilo.txtG}>
            O valor {props.max} é maior que o valor de {props.min}!
        </Text>
    ) 
