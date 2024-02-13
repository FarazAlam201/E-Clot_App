import React from "react";
import { Text, TouchableOpacity, View, StyleSheet,Image } from 'react-native';
import AppColor from "../theme/AppColor";

const ButtonComponent = props => {
    const { text, icon, onPress, style, btnLabelStyle, img,addBag } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.button, styles.buttonText, style ? { ...style } : {}]}>
                {icon ? < props.icon /> : null}
                {img ? <Image source={img}/> : null}

                <View>
                    <Text
                        style={
                            btnLabelStyle !== undefined
                                ? [styles.buttonText, btnLabelStyle]
                                : [styles.buttonText, { ...btnLabelStyle }]
                        }>
                        {text}
                       
                        </Text>
                   
                </View>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: AppColor.lightDark,
        borderRadius: 50,
        padding: 10,
        elevation: 5,
        shadowOpacity: 0.5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: AppColor.white,
        fontFamily: "Roboto-Bold",
        letterSpacing: -0.496,
        fontSize: 16,
        alignItems: "center"
    },

});
export default ButtonComponent;

