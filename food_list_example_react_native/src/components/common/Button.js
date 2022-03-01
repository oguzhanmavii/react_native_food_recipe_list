import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, buttonTextStyle } = styles;


    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        flex: 1, //expand as much ap
        alignSelf: 'stretch', //fill limits of container
        backgroundColor: '#F50057',
        borderRadius: 4,
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        alignSelf: 'center',  //tell text to center itself in parent
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',  //boldness of text
        paddingTop: 10,
        paddingBottom: 10
    }
};

//this is required when using export trick in index.js

export { Button };

