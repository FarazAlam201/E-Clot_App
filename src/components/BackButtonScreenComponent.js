import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AppIcons from '../constants/AppIcon'
import AppColor from '../theme/AppColor'
import { useNavigation } from '@react-navigation/native'

const BackButtonScreenComponent = props => {
    const { style } = props
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
            <View style={[styles.circle, style && { ...style }]}>
                <View style={{
                    justifyContent: "center",
                    alignItems: 'center',
                    position: "absolute"
                }}>
                    <View style={{
                        paddingHorizontal: 12,
                        top: 12
                    }}>
                        <AppIcons.icArrowleft2 />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circle: {
        borderRadius: 100,
        borderWidth: 0.2,
        backgroundColor: AppColor.lightDark,
        width: 40,
        height: 40,
        position: "relative",
       
    },
})
export default BackButtonScreenComponent