import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { AppRoutes } from "../routes/AppRoutes";
import HomePageScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/order/OrderScreen";
import ProfileScreen from "../screens/profileScreens/ProfileScreen";
import AppIcons from "../constants/AppIcon";
import NotificationScreen from "../screens/notification/NotificationScreen";
import AppColor from "../theme/AppColor";

const Bottom = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Bottom.Navigator
            initialRouteName={AppRoutes.homepage}
            screenOptions={{
                activeTintColor: AppColor.dark,
                inactiveTintColor: AppColor.primary,
                tabBarActiveTintColor: AppColor.dark,
                tabBarInactiveTintColor: AppColor.primary,
                tabBarStyle: [styles.tabBarStyle],
                tabBarShowLabel: false
            }}

        >
            <Bottom.Screen name={AppRoutes.homepage} component={HomePageScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <AppIcons.icHome style={{ color: color }} />
                        ) : (
                            <AppIcons.icHomeActive style={{ color: AppColor.darkPurple }} />
                        )
                }}
            />
            <Bottom.Screen name={AppRoutes.notification} component={NotificationScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <AppIcons.icActiveNotification style={{ color: color }} />
                        ) : (
                            <AppIcons.icNotificationbing style={{ color: AppColor.darkPurple }} />
                        )
                }}

            />
            <Bottom.Screen name={AppRoutes.order} component={OrderScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <AppIcons.icOrderActive style={{ color: color }} />
                        ) : (
                            <AppIcons.icOrderNoActice style={{ color: AppColor.darkPurple }} />
                        )
                }}

            />
            <Bottom.Screen name={AppRoutes.profile} component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <AppIcons.icActiveProfileTab style={{ color: color }} />
                        ) : (
                            <AppIcons.icProfileNoActive style={{ color: AppColor.darkPurple }} />
                        )
                }} />
        </Bottom.Navigator>
    )



}
const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: AppColor.dark,
        paddingTop: Platform.OS === 'android' ? 2 : 0,
        height: Platform.OS === 'android' ? 70 : 90,
        justifyContent: "space-between"
    },
});
export default BottomNavigation;