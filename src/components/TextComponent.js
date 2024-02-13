import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from "react-native";
import AppColor from '../theme/AppColor';
import AppIcons from '../constants/AppIcon';
const TextComponents = props => {
    const { placeholder,style, obscure, onChangeText, onBlur, value, keyboardType,secureTextEntry,icon,placeholderTextColor } = props;
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={style}
                obscure={obscure}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                
            />
        </View>


    )
}
const styles =StyleSheet.create({
    placeholderStyle:{
        color:AppColor.lightDark,
    }
})
export default TextComponents;

