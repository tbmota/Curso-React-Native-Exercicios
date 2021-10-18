import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'


// export default () => <Text style={Estilo.txtG}>Primeiro Componente!!</Text>

   export default () => {
      console.warn('Opa!') 
      return (
         <Text style={Estilo.txtG}>Primeiro Componente!!</Text>
      )
   }
   // console.warn('Opa!') aparece amarelo no app yellowbox
   
        
    
