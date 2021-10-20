/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';

import Pai from './components/direta/Pai';

export default () => (
  <SafeAreaView style={style.App}>
    {/* <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}

    {/* <MinMax min="3" max="20" //para string/>
      <MinMax min="1" max="94"/> */}

    {/*para valor numérico uso {} */}
    {/* <MinMax min={3} max={20}/>
      <MinMax min={1} max={94}/>  */}

    {/* <Aleatorio min={3} max={20}/> */}

    {/* <Titulo principal="Cadastro Produto"
          segundario="Tela de Cadastro de Produto"/> */}
    {/* <> </> //se usar tags vazias quero dizer que estou envolvendo com fragments => React.Fragment. Se for usar alguma propriedade relacionada coloco o fragment. ex.: <React.Fragment key="1"*/}

    {/* <Botao/> */}
    {/* <Contador inicial={100} passo={13} /> */}

    <Pai />
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
