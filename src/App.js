/* eslint-disable prettier/prettier */

// usei o compucfuc pra importar as configurações que fiz 

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native'; //SafeAreaView serve tanto pro ANdroid como pro iOS funcionarem de modo correto, a imagem ficar no lugar certo da tela

// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import ContadorDisplay from './components/contador/ContadorDisplay';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar'
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/relacao/DigiteSeuNome';
// import Quadrado from './components/layout/Quadrado';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

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

    {/* <Pai /> */}

    {/* <ContadorDisplay /> */}
    {/* <ContadorV2 /> */}

    {/* <Diferenciar /> */}

    {/* <ParImpar num={3}/> */}

{/*//componente dentro de outro componete*/}
    {/* <Familia> 
        <Membro nome="Bia" sobrenome="Arruda" />
        <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
        <Membro nome="Ana" sobrenome="Arruda" />
        <Membro nome="Julia" sobrenome="Arruda" />
    </Familia> */}

    {/* <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}}/>
    <UsuarioLogado usuario={{nome: 'Mary', email: 'gua@email.com'}}/>
    <UsuarioLogado usuario={{nome: 'Ana'}}/>
    <UsuarioLogado usuario={{email: 'carlos@gui.com'}}/>
    <UsuarioLogado usuario={null}/>
    <UsuarioLogado usuario={{}}/> */}

    {/* <ListaProdutos /> */}
    
    {/* <ListaProdutosV2 /> */}

    {/* <DigiteSeuNome /> */}

    {/* <FlexboxV1 /> */}

    {/* <FlexboxV2 /> */}

    {/* <FlexboxV3 /> */}

    {/* <FlexboxV4 /> */}

    <Mega qtdeNumeros={7} />

  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#B0C4DE',  
  },
});
