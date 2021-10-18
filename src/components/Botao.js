import React from 'react';
import {Button} from 'react-native';

export default props => {
  //estou passando uma referência, só será executado ao clica e não de forma imediata
  function executar() {
    console.warn('Exec!!!');
  }

  return <Button title="Executar!" onPress={executar} />;
};
