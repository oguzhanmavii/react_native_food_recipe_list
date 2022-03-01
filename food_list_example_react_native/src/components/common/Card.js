import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
    const { containerStyle } = styles;

    return (
        <View style={props.style, containerStyle}>
            {props.children}
        </View>
    );
    //props.children get all components that are passed in this component
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

//this is required when using export trick in index.js


export { Card };
