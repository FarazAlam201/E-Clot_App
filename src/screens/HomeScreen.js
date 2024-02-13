import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, FlatList } from "react-native"
import AppIcons from "../constants/AppIcon";
import ButtonComponents from "../components/ButtonComponent";
import AppColor from "../theme/AppColor";
import AppStrings from "../constants/AppString";
import TextComponents from "../components/TextComponent";
import CategoriesComponents from "../components/CategoriesComponent";
import ItemsComponents from "../components/ItemsComponent";
import ProductListing from "../json/ProductListingJson";
import CustomModal from "../components/ModalComponent";
import ButtonComponent from "../components/ButtonComponent";
import { AppRoutes } from "../routes/AppRoutes";
import { useNavigation } from "@react-navigation/native";


const HomePageScreen = () => {
    const navigation = useNavigation()
    const [isAlertVisible, setAlertVisible] = useState(false);
    const openModal = () => {
        setAlertVisible(true);
    };

    const closeModal = () => {
        setAlertVisible(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: AppColor.dark }}>
            <View style={styles.conatiner}>
                <View style={{ left: 24 }} >
                    <AppIcons.icProfile />
                </View>
                <View style={styles.circle}>
                    <View style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        position: "absolute"
                    }}>
                        <View style={{
                            paddingHorizontal: 12,
                            top: 12
                        }}>
                            <TouchableOpacity onPress={openModal} >
                                <AppIcons.icBag />
                            </TouchableOpacity>
                            <CustomModal isVisible={isAlertVisible} onClose={closeModal}>
                                <View style={styles.container}>
                                    <TextComponents
                                        style={styles.emailText}
                                        placeholder={"Item Name"}
                                        keyboardType={"email-address"}
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style={styles.container}>
                                    <TextComponents
                                        style={styles.emailText}
                                        placeholder={"Item Price"}
                                        keyboardType={"email-address"}
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style={styles.container}>
                                    <TextComponents
                                        style={styles.emailText}
                                        placeholder={"Color Code"}
                                        keyboardType={"email-address"}

                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style={[styles.container]}>
                                    <TextComponents
                                        style={styles.emailText}
                                        placeholder={"Details"}
                                        keyboardType={"email-address"}
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View>
                                    <ButtonComponent
                                        style={styles.btnStyle}
                                        text={"Submit"}
                                        btnLabelStyle={styles.btnText}

                                    />
                                </View>

                            </CustomModal>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                top: 24,
                borderRadius: 100,
                backgroundColor: AppColor.lightDark,
                margin: 24,
                flexDirection: 'row',
            }}>
                <View style={{
                    paddingHorizontal: 19,
                    justifyContent: "center"
                }} >
                    <AppIcons.icSearch />
                </View>
                <TextComponents
                    style={styles.searchStyle}
                    placeholder={AppStrings.Search}
                    secureTextEntry={false}
                />

            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingTop: 24 }}>
                <Text style={[styles.textStyle]}>
                    {AppStrings.Categories}
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate(AppRoutes.seeAll)}
                >
                    <View>
                        <Text style={[styles.textStyle, { fontWeight: "400" }]}>
                            {AppStrings.SeeAll}
                        </Text>

                    </View>
                </TouchableOpacity>

            </View>
            <ScrollView
                overScrollMode='never'

            >
                <CategoriesComponents />
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={[styles.textStyle, { paddingTop: 24 }]}>
                        {AppStrings.topSelling}
                    </Text>
                    <View>
                        <Text style={[styles.textStyle, { fontWeight: "400", paddingTop: 24 }]}>
                            {AppStrings.SeeAll}
                        </Text>
                    </View>
                </View>

                <FlatList
                    overScrollMode='never'
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 16 }}
                    data={ProductListing}
                    renderItem={({ item }) => {
                        return (

                            <View style={{ paddingHorizontal: 13 }}>
                                <ItemsComponents
                                    key={item.id ? item.id.toString() : Math.random().toString()}
                                    img={item?.productImage}
                                    text={item?.productName}
                                    icon={AppIcons.icApple}
                                    priceText={item?.productPrice}
                                    numberOfLines={1}
                                    item={item}
                                />
                            </View>
                        )
                    }}
                    keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}

                />
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 100,
        height: 50
    },
    conatiner: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 15,

    },
    circle: {
        borderRadius: 100,
        borderWidth: 0.2,
        backgroundColor: AppColor.primary,
        width: 40,
        height: 40,
        right: 24,
        position: "relative",
    },
    searchStyle: {
        fontFamily: "Roboto-Light",
        fontWeight: "400",
        letterSpacing: -0.400,
        fontSize: 16,
        color: AppColor.white,
    },
    textInput: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 160,
        paddingHorizontal: 19,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: AppColor.white,
        paddingHorizontal: 24,

    },
    emailText: {
        fontFamily: "Roboto-Light",
        fontWeight: "400",
        letterSpacing: -0.400,
        fontSize: 16,
        paddingHorizontal: 15,
        color: AppColor.white,
    },
    container: {
        borderRadius: 4,
        backgroundColor: AppColor.lightDark,
        marginTop: 10,
        marginHorizontal: 24,
    },
    btnStyle: {
        width: 250,
        paddingVertical: 15,
        backgroundColor: AppColor.lightDark,
        marginTop: 16,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",

    },

})
export default HomePageScreen;