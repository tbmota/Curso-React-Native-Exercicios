import React, {Component} from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends Component { 

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: [] 
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde }) //estou salvando o valor numérico
    }

    // constructor(props) {
    //     super(props)

    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo 
    }
    //se for verdadeira significa que o número está dentro do limite que estabeleci. Função recursiva, que chama a si mesmo

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({numeros})
    }
    //retorna os números atuais mais os números gerados a partir desta função
    //sempre que for alterar o estado do componente eu chamo o setState

    // gerarNumeros = () => {
    //     const { qtdeNumeros } = this.state
    //     const numeros = []
            
    //         for(let i = 0; i < qtdeNumeros; i++) {
    //             const n = this.gerarNumeroNaoContido(numeros)
    //             numeros.push(n)
    //         }
    //     numeros.sort((a, b) => a - b)
    //     this.setState({numeros})
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'} //quando for digitar vai subir o teclado numérico
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()} 
                </View>
            </>
        )
    }
}
//componente baseado em classe
//Mega é uma classe (forma diferente de definir uma função) que extende um Componente, ou seja, ela tbm é um Componente
//quando crio um componente numa classe, estou instanciando um componente baseado na classe. Acesso os atributos e comportamentos desta instância usando o .this

//ou posso inicializar através de um 
// constructor(props){
//     super(props)

//     this.state = {
//         qtdeNumeros: props.qtdeNumeros + 100
//     }
// }

// Function.prototype.bind () O método bind () cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.

// +'11' => numérico
// '11' => string

// O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.

// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

//O método sort() ordena os elementos do próprio array e retorna o array

//{this.exibirNumeros()} sempre que o estado for modificado esta função será chamada