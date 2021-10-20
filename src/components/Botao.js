import React from 'react';
import {Button} from 'react-native';

export default props => {
  //estou passando uma referência, só será executado ao clica e não de forma imediata
  function executar() {
    console.warn('Execxxx!!!');
  }

  return (
    <>
      <Button title="Executar #01!" onPress={executar} />;
      <Button
        title="Executar #02!"
        onPress={function () {
          console.warn('Exec #02!!!');
        }}
      />
    </>
  );
};
