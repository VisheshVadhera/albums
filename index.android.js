//Place code for android

//Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


//Create a Component, it's a function
//which returns JSX
const App = () => (
    <Header headerText={'Albums'} />
);

//Render the Component
AppRegistry.registerComponent('albums', () => App);
