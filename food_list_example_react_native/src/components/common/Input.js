import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, label, placeHolder, secureTextEntry }) => {
    const {
        inputStyle,
        labelStyle,
        containerStyle } = styles;


    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

//secureTextEntry: password
//hinted TextInput with placeholder property
//disable auto correct with autoCorrect={'false'}
//<TextInput> requires height and width like <Image>
//onChangeText gets called whenever users type in <TextInput>
//value is the value of <TextInput> when it gets rerendered
//<TextInput> has no idea what value is in it

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        //paddingLeft: 5,
        fontSize: 20,
        lineHeight: 23,
        flex: 3
    },
    labelStyle: {
        fontSize: 20,
        paddingLeft: 10,
        flex: 1
    },
    containerStyle: {
        flexDirection: 'row',
        height: 50,
        flex: 1, //fill all available space
        alignItems: 'center'
    }
});

export { Input };