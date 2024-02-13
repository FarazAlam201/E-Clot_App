import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import AppStrings from '../../constants/AppString'
import ButtonComponent from '../../components/ButtonComponent'
import TextComponents from '../../components/TextComponent'
import AppColor from '../../theme/AppColor'
import { AppRoutes } from '../../routes/AppRoutes'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { passwordValidationSchema } from '../../validation/validation';
import { firebase } from "../../config"; // Import the firebase object from your config.js file

const PasswordSignInScreen = () => {
  const navigation = useNavigation();

  const handlePassword = async (password) => {
    try {
      // Sign in the user with email and password
      await firebase.auth().signInWithEmailAndPassword( email, password);

      // Navigate to the desired screen (e.g., home screen)
      navigation.navigate(AppRoutes.bottomTabs);
    } catch (error) {
      console.error("Error signing in with password:", error.message);
      // Handle sign-in error (e.g., display an error message to the user)
      Alert.alert("Error", error.message);
    }
  };


  return (
    <View style={{
      backgroundColor: AppColor.dark,
      flex: 1,
    }}>
      <View style={{
        paddingTop: 123, paddingHorizontal: 24,
      }}>
        <Text style={styles.textstyle} >{AppStrings.signin}</Text>
      </View>
      <Formik
initialValues={{ password: "" }}
onSubmit={(values) => {
  const { password } = values;
  handlePassword(password);
}}
validationSchema={passwordValidationSchema}
>
{({ handleBlur, handleChange, handleSubmit, values, errors, touched }) => (
  <>
    <View>
      <ButtonComponent
        style={styles.btnStyle}
        text={AppStrings.continue}
        btnLabelStyle={styles.btnText}
        onPress={handleSubmit}
      />
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

        }]}>{AppStrings.forgotPassword}</Text>
        <TouchableOpacity>
          <Text style={{
            fontFamily: "Roboto-Bold",
            fontWeight: "400",
            letterSpacing: -0.400,
            fontSize: 12,
            color: AppColor.white,
          }} >{AppStrings.reset}</Text>
        </TouchableOpacity>
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
  errorText: {
    color: AppColor.red,
    fontFamily: "Roboto-Light",
    fontWeight: "400",
    paddingHorizontal: 25,
    marginTop: 5,
  },


})


export default PasswordSignInScreen
