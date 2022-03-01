import React from 'react';
import { View } from 'react-native';


const CardItem = (props) => {
    const { cardItemStyle } = styles;

    return (
        <View style={[cardItemStyle, props.style]}>
            {props.children}
        </View>
    );
};


const styles = {
    cardItemStyle: {
        borderBottomWidth: 1, //seperate different sections
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', //put items horizontally
        borderColor: '#ddd',
        position: 'relative'
    }
}
//default of flexDirection is 'column'

//this is required when using export trick in index.js
export { CardItem };