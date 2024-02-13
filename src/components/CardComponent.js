import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppColor from '../theme/AppColor'
import AppStrings from '../constants/AppString'
import AppIcons from '../constants/AppIcon'

const CardComponent = props => {
    const { text, title, icon, date,
        editText, style, lableStyle,
        onPress, lineNumber, editTextStyle,
        viewStyle, iconStyle, disabled } = props
    return (
        <View style={[styles.container, style && { ...style }]}>
            {title && <Text style={styles.txtStyle}>{title}</Text>}

            <View style={[styles.viewStyle, viewStyle && { ...viewStyle }]}>
                {text && <Text numberOfLines={lineNumber}

                    style={[styles.txtStyle,
                    lableStyle && { ...lableStyle }]}>{text}</Text>}
                <View style={{right:44}}>
                    <TouchableOpacity
                        disabled={disabled}
                        onPress={onPress}
                        style={styles.txtStyle}
                    >
                        {editText && <Text style={[styles.editClick, editTextStyle && { ...editTextStyle }]}>
                            {editText}</Text>}
                        {icon && <props.icon
                            style={[styles.iconStyle, iconStyle && { ...iconStyle }]}
                        />}
                    </TouchableOpacity>
                </View>

            </View>
            <View>
                {date && <Text style={[styles.txtStyle,
                lableStyle && { ...lableStyle }]} >{date}</Text>}

            </View>
        </View>
    )
}

export default CardComponent

const styles = StyleSheet.create({

    container: {
        borderRadius: 8,
        backgroundColor: AppColor.lightDark,
        elevation: 5,
        shadowOpacity: 0.5,
        shadowColor: AppColor.lightDark,
    },
    txtStyle: {
        fontSize: 16,
        color: AppColor.white,
        fontFamily: "Roboto-Bold",
        paddingHorizontal: 16,
        marginTop: 7,
    },
    editClick: {
        color: AppColor.primary,
        marginRight: 12,
        fontFamily: "Roboto-Bold",
        fontSize: 16,
    },
    viewStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
    },


})