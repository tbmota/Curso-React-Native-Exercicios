import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    function ObterLista() {
        return Produtos.map(p => {
            return <Text key={p.id}> {p.id}) {p.nome} tem preço R$ {p.preço}</Text>
        })
    }
   return (
       <>
            <Text style={Estilo.txtG}>
                Lista de Produtos
            </Text>
            {ObterLista()}
       </>
   )
}
