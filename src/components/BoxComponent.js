import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import AppColor from "../theme/AppColor";
import AppIcons from "../constants/AppIcon";
import DropDownPicker from "react-native-dropdown-picker";
const BoxComponents = props => {
    const { icon, text, size, minusIcon,count, } = props
    return (
        <View style={styles.sizeBox}>
            <View style={styles.textContainer}>
                <Text style={{
                    color: AppColor.white,
                    fontSize: 16,
                    fontWeight: "400"
                }}>{text}</Text>
            </View>
           
            <View style={styles.middleContainer}>
                <Text style={{
                    color: AppColor.white,
                    fontSize: 16,
                    fontWeight: "400"
                }}>{size}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <AppIcons.icArrowDown />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    sizeBox: {
        flexDirection: 'row',
        backgroundColor: AppColor.lightDark,
        width: 342,
        borderRadius: 100,
        left: 20,
        height: 56,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 16,

    },
    middleContainer: {
        paddingRight: 29,
    },
    iconContainer: {
        paddingRight: 16
    }

})
export default BoxComponents;