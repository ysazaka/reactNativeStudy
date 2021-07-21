import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import componentStyle from '../componentStyle';
import MegaNumber from './MegaNumber';

export default class MegaSena extends Component {
  state = {
    numberQuantity: this.props.numberQuantity,
    numbers: [],
  };

  constructor(props) {
    super(props);

    this.changeNumberQuantity = this.changeNumberQuantity.bind(this);
  }

  changeNumberQuantity = quantity => {
    // The "+" sign guarantee that the "quantity" is a numeric value
    this.setState({numberQuantity: +quantity});
  };

  generateNumberThatDoesntExistOnArray = numbers => {
    const newNumber = parseInt(Math.random() * 60) + 1;

    return numbers.includes(newNumber)
      ? this.generateNumberThatDoesntExistOnArray(numbers)
      : newNumber;
  };

  // First way
  generateNumbers = () => {
    const numbers = Array(this.state.numberQuantity)
      .fill()
      .reduce(
        numbers => [
          ...numbers,
          this.generateNumberThatDoesntExistOnArray(numbers),
        ],
        [],
      )
      .sort((a, b) => a - b);
    // Ascending order
    this.setState({numbers});
  };

  // Second way
//   generateNumbers = () => {
//     const {numberQuantity} = this.state;

//     for (let i = 0; i < numberQuantity.length; i++) {
//       const newNumber = this.generateNumberThatDoesntExistOnArray(numbers);
//       numbers.push(newNumber);
//     }

//     numbers.sort((a, b) => a - b);
//     this.setState({numbers});
//   };

  showNumbers = () => {
      const numbers = this.state.numbers
      return numbers.map(number => {
          return <MegaNumber key ={number} number={number} />
      })
  }

  render() {
    return (
      <>
        <Text style={componentStyle.bigText}>
          Mega-Sena Generator {this.state.numberQuantity}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Quantity of numbers to be generated"
          value={`${this.state.numberQuantity}`}
          onChangeText={this.changeNumberQuantity}
        />
        <Button title="Generate numbers" onPress={this.generateNumbers} />
        <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            {this.showNumbers()}
        </View>
      </>
    );
  }
}
