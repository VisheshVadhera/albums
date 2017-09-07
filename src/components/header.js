//Import library for making a Component
import React from 'react';
import { Text, View } from 'react-native';


//Make a Component
const Header = () => {
  const { textStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the Component available to other parts of the app
export default Header;
