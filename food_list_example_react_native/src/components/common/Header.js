import React from 'react';
import { Text, View } from 'react-native';


//Make a Component
//Make header receive argument props

const Header = (props) => {
    const { textStyle, viewStyle } = styles; //destructuring referencing from object
    //multiline JSX -> parantheses ()

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
    //get headerText from argument props. put JS objects in curly braces 
    //use prop to use referenced style in component
};

const styles = {
    viewStyle: {
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 56,
        paddingLeft: 15,
        elevation: 3,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
//Make the Component available to other parts of the apps
//this is required when using export trick in index.js

export { Header };