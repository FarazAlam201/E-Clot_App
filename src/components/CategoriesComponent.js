import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import AppColor from "../theme/AppColor";
import AppStrings from "../constants/AppString";
import AppIcons from "../constants/AppIcon";

const CategoriesComponents = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center" }}>
            <View style={{
                paddingTop: 16,
                left: 13
            }}  >
               <AppIcons.icHoddies />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingTop: 5,
                            fontWeight: "400",
                        }]}
                    >{AppStrings.Hoodies}</Text>

            </View>
            <View style={{
                paddingTop: 16,
                left: 13.5

            }}  >
               <AppIcons.icShort />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingHorizontal: 5, paddingTop: 5,
                            fontWeight: "400",
                        }]}
                    >{AppStrings.shorts}</Text>
            </View>
            <View style={{
                paddingTop: 16,
                left: 13

            }}  >
                 <AppIcons.icShoes />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingHorizontal: 8, paddingTop: 5,
                            fontWeight: "400",
                        }]}
                    >{AppStrings.shoes}</Text>
            </View>
            <View style={{
                paddingTop: 16,
                left: 13

            }}  >
               <AppIcons.icBag2 />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingHorizontal: 14, paddingTop: 5,
                            fontWeight: "400",
                        }]}
                    >{AppStrings.bag}</Text>
            </View>
            <View style={{
                paddingTop: 16,
                left: 13

            }}  >
                <AppIcons.icAccessories />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingTop: 5,
                            fontWeight: "400",
                            right: 12
                        }]}
                    >{AppStrings.accessories}</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: AppColor.white,
    },

})
export default CategoriesComponents;