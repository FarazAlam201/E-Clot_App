import React, { useState, useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text, ScrollView, Alert } from "react-native"
import AppColor from "../../theme/AppColor";
import AppIcons from "../../constants/AppIcon";
import AppStrings from "../../constants/AppString";
import ButtonComponent from "../../components/ButtonComponent";
import ProductQuantity from "../../components/ProductQuantity";
import DropdownComponent from "../../components/DropDownComponent";
import { useNavigation } from "@react-navigation/native";

const ProductDetailScreen = (props) => {
const navigation = useNavigation()
    const product = props?.route?.params?.item
    const [count, setCount] = useState(1)
    const [totalAmount, setTotalAmount] = useState()
    console.log(product)

    useEffect(() => {
        setTotalAmount(product?.productPrice)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: AppColor.dark }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ padding: 24 }}>
                    <View style={styles.iconStyle}>
                        <View style={{
                            position: "absolute",
                        }}>
                            <TouchableOpacity 
                            onPress={()=>navigation.goBack()}
                            >
                                <AppIcons.icArrowleft2 />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 24 }}>
                    <View style={styles.iconStyle}>
                        <View style={{
                            position: "absolute",
                        }}>
                            <TouchableOpacity>
                                <AppIcons.icHeart />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View>
            </View>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Image source={product?.productImage} />
            </View>
            <View style={{ padding: 24 }}>
                <Text style={{ color: AppColor.white }}>{product?.productName}</Text>
                <View style={{ paddingTop: 15 }}>
                    <Text style={{ color: AppColor.primary }}>{product?.productPrice}</Text>
                </View>
            </View>
            <ScrollView>


                <View style={{ paddingHorizontal: 24 }}>
                    <DropdownComponent
            
                        value={product?.productSize[0]?.id}
                        items={product?.productSize?.map(e => {
                            return {
                                label: e?.title,
                                value: e?.id
                            }
                        })}
                        onChange={(val) => {
                            console.log(val)
                        }}
                    />
                </View>
                <View style={{ paddingTop: 12,paddingHorizontal:5 }}>
                    <ProductQuantity
                        text={"Quantity"}
                        addIcon={AppIcons.icAdd}
                        count={count}
                        minusIcon={AppIcons.icMinus}
                        handleSubtract={(val) => {
                            if (val > 1) {
                                const newCount = val - 1;
                                setCount(newCount)
                                setTotalAmount(x => x - product?.productPrice)
                            }

                        }}
                        handleAdd={(val) => {
                            setCount(val + 1)
                            setTotalAmount(product?.productPrice * val)
                        }}
                    />
                </View>
                <View style={{ paddingTop: 26 }}>
                    <Text style={{
                        fontSize: 12,
                        paddingHorizontal: 24,

                    }}>{AppStrings.description}</Text>
                </View>
                <View style={{ paddingTop: 24 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: AppColor.white,
                        paddingHorizontal: 24,

                    }}>{AppStrings.shippingReturns}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: "400",
                        paddingHorizontal: 24,
                        paddingTop: 12

                    }}>
                        Free standard shipping and free 60-day returns
                    </Text>
                </View>
                <View style={{ paddingTop: 80 }}>
                    <ButtonComponent
                        text={`${totalAmount}`}
                        style={styles.buttonStyle}
                        btnLabelStyle={styles.btnText}
                        addBag={"Add to Bag"}
                        onPress={() => {
                            Alert.alert('Congratulations!', `Thank you for shopping with us.\nYour total amount is $${totalAmount}`);
                        }}
                    />
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        borderRadius: 100,
        width: 40,
        height: 40,
        backgroundColor: AppColor.lightDark,
        position: "relative",
        justifyContent: 'center',
        alignItems: "center",

    },
    sizeBox: {
        flexDirection: 'row',
        backgroundColor: AppColor.lightDark,
        width: 342,
        borderRadius: 100,
        left: 20,
        height: 56,
        alignItems: 'center'
    },
    buttonStyle: {
        width: 324,
        height: 50,
        backgroundColor: AppColor.primary,

    },
    btnText:{
        paddingHorizontal:22
    }

})
export default ProductDetailScreen; 
