import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import TextComponents from "../../components/TextComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { firebase } from "../../config"; // Import the firebase object from your config.js file
import { AppRoutes } from "../../routes/AppRoutes";
import AppStrings from "../../constants/AppString";
import AppColor from "../../theme/AppColor";
import { loginValidationSchema } from "../../validation/validation";


const SignInScreen = () => {
    const navigation = useNavigation();
    const [error, setError] = useState(null);
  
    const handleLogin = async (email) => {
      try {
        // Sign in with email and password
        await firebase.auth().signInWithEmailAndPassword(email, "dummyPassword");
  
        // Navigate to the desired screen (e.g., home screen)
        navigation.navigate(AppRoutes.password);
      } catch (error) {
        console.error("Error signing in:", error.message);
        // Handle sign-in error (e.g., display an error message to the user)
        Alert.alert("Error", error.message);
      }
    };
    return (
        <View style={{ backgroundColor: AppColor.dark, flex: 1 }}>
            <View style={{
                paddingTop: 123,
                paddingHorizontal: 24,
            }}>
                <Text style={styles.textstyle} >{AppStrings.signin}</Text>
            </View>

            <Formik
                initialValues={{ email: "" }}
                onSubmit={(values) => {
                const { email } = values;
                handleLogin(email);
                }}
                validationSchema={loginValidationSchema}
                >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                        <View style={styles.container}>
                            <TextComponents
                                style={styles.emailText}
                                placeholder={AppStrings.emailAddress}
                                keyboardType={"email-address"}
                                secureTextEntry={true}
                                placeholderTextColor={styles.placeholderTextColor}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        {(errors.email && touched.email) &&
                            <Text style={styles.errorText}>{errors.email}</Text>
                        }
                        <View>
                            <ButtonComponent
                                style={styles.btnStyle}
                                text={AppStrings.continue}
                                btnLabelStyle={styles.btnText}
                                onPress={handleSubmit}
                            />
                            {error && <Text style={[styles.errorText, { paddingTop: 10 }]}>{error}</Text>}
                        </View>
                    </>
                )}


            </Formik>

            <View style={{
                paddingHorizontal: 24,
                paddingTop: 16,
                flexDirection: "row",

            }}>
                <Text style={[{
                    fontSize: 12,
                    color: AppColor.white,
                    fontFamily: "Roboto-Light",
                    fontWeight: "400",
                    letterSpacing: -0.400,
                    fontSize: 12,

                }]}>{AppStrings.anAccount}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate(AppRoutes.createAccount)}
                >
                    <Text style={{
                        fontFamily: "Roboto-Bold",
                        fontWeight: "400",
                        letterSpacing: -0.400,
                        fontSize: 12,
                        color: AppColor.white
                    }} >{AppStrings.createOne}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 71 }} >
                <ButtonComponent
                    style={styles.btnTypes}
                    text={AppStrings.apple}
                    icon={AppIcons.icApple}
                    btnLabelStyle={styles.btnText}
                />
            </View>
            <View>
                <ButtonComponent
                    style={styles.btnTypes}
                    text={AppStrings.google}
                    img={AppImages.imgGoogle}
                    btnLabelStyle={styles.btnText}
                />

            </View>
            <View>
                <ButtonComponent
                    style={styles.btnTypes}
                    text={AppStrings.facebook}
                    img={AppImages.imgFacebook}
                    btnLabelStyle={styles.btnText}
                />

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    textstyle: {
        fontFamily: "Roboto-Bold",
        fontSize: 24,
        color: AppColor.white,

    },
    emailText: {
        fontFamily: "Roboto-Light",
        fontWeight: "400",
        letterSpacing: -0.400,
        fontSize: 16,
        paddingHorizontal: 15,
    },
    container: {
        borderRadius: 4,
        backgroundColor: AppColor.lightDark,
        marginTop: 32,
        marginHorizontal: 24,
    },
    btnStyle: {
        width: 340,
        paddingVertical: 15,
        backgroundColor: AppColor.primary,
        marginTop: 16,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",

    },
    btnTypes: {
        width: 340,
        paddingVertical: 15,
        backgroundColor: AppColor.lightDark,
        marginTop: 16,
        borderRadius: 100,
    },
    btnText: {
        paddingHorizontal: 55
    },
    placeholderTextColor: {
        color: AppColor.lightDark,
    },
    errorText: {
        color: AppColor.red,
        fontFamily: "Roboto-Light",
        fontWeight: "400",
        paddingHorizontal: 25,
        marginTop: 5,
    },

})
export default SignInScreen;