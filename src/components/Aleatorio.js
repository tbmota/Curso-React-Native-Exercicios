//passar dois números min e max e gerar um aleatório entre os 2 valores. construir, importar e mostrar a tela
import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  const delta = props.max - props.min + 1;
  const aleatorio = parseInt(Math.random() * delta) + props.min;
  return (
    <Text style={Estilo.txtG}>
      O valor máximo é {props.max} e o valor mínimo é {props.min}. {'\n'} O
      aleatório entre eles é: {aleatorio}
    </Text>
  );
};

//propriedades são somente leitura
