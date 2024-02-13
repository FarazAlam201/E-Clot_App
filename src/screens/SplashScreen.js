import React, { useEffect } from "react";
import { Image, View } from "react-native"
import AppColor from "../theme/AppColor";
import AppImages from "../constants/AppImages";
import { useNavigation } from "@react-navigation/native";
import { AppRoutes } from "../routes/AppRoutes";

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(AppRoutes.signIn);
        }, 1000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{
            flex: 1,
            backgroundColor: AppColor.primary,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <Image source={AppImages.imgClot} />
        </View>
    )
}
export default SplashScreen;