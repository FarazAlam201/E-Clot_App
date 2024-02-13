
import React from "react";
import { } from "react-native"
import { AppRoutes } from "../routes/AppRoutes";
import SplashScreen from "../screens/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../screens/productDetails/ProductDetailScreen";
import SignInScreen from "../screens/signInScreens/SignInScreen";
import PasswordSignInScreen from "../screens/signInScreens/PasswordSignInScreen";
import SiginUpScreen from "../screens/SiginUpScreen";
import BottomNavigation from "./BottomNavigation";
import AddressScreen from "../screens/profileScreens/AddressScreen";
import AddressTextScreen from "../screens/profileScreens/AddressTextScreen";
import SeeAllItems from "../screens/categories/SeeAllItems";
import HoodiesScreen from "../screens/categories/HoodiesScreen";
import ExploreNotification from "../screens/notification/ExploreNotification";
import OrderExplore from "../screens/order/OrderExplore";
import { firebase } from "./config";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={AppRoutes.splash}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={AppRoutes.splash} component={SplashScreen} />
            <Stack.Screen name={AppRoutes.signIn} component={SignInScreen} />
            <Stack.Screen name={AppRoutes.bottomTabs} component={BottomNavigation} />
            <Stack.Screen name={AppRoutes.detail} component={ProductDetailScreen} />
            <Stack.Screen name={AppRoutes.password} component={PasswordSignInScreen} />
            <Stack.Screen name={AppRoutes.createAccount} component={SiginUpScreen} />
            <Stack.Screen name={AppRoutes.address} component={AddressScreen} />
            <Stack.Screen name={AppRoutes.addressTextScreen} component={AddressTextScreen} />
            <Stack.Screen name={AppRoutes.seeAll} component={SeeAllItems} />
            <Stack.Screen name={AppRoutes.hoodiesScreen} component={HoodiesScreen} />
            <Stack.Screen name={AppRoutes.exploreNotification} component={ExploreNotification}/>
            <Stack.Screen name={AppRoutes.exploreOrder} component={OrderExplore}/>

        </Stack.Navigator>
    )
}
export default StackNavigation;