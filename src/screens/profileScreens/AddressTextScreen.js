import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColor from '../../theme/AppColor'
import BackButtonScreenComponent from '../../components/BackButtonScreenComponent'
import AppStrings from '../../constants/AppString'
import TextComponents from '../../components/TextComponent'
import ButtonComponent from '../../components/ButtonComponent'

const AddressTextScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: AppColor.dark }}>
      <View style={{
        flexDirection: "row",
        marginTop: 20
      }}>
        <BackButtonScreenComponent
          style={{ marginLeft: 27 }}
        />
        <View style={{
          justifyContent: "center",
          alignItems: 'center',
          marginLeft: 97,
        }}>
          <Text style={styles.txtStyle}>{"Add Address"}</Text>
        </View>
      </View>
      <View style={{ marginTop: 42 }}>
        <View style={[styles.container, { marginTop: 16 }]}>
          <TextComponents
            style={styles.addressText}
            placeholder={AppStrings.streetAddress}
            secureTextEntry={true}
          // onChangeText={handleChange("password")}
          // onBlur={handleBlur("password")}
          // value={values.password}
          />
        </View>
        <View style={[styles.container, { marginTop: 12 }]}>
          <TextComponents
            style={styles.addressText}
            placeholder={"City"}
            secureTextEntry={true}
          // onChangeText={handleChange("password")}
          // onBlur={handleBlur("password")}
          // value={values.password}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.container, { marginTop: 12, width: 161 }]}>
            <TextComponents
              style={styles.addressText}
              placeholder={"State"}
              secureTextEntry={true}
            // onChangeText={handleChange("password")}
            // onBlur={handleBlur("password")}
            // value={values.password}
            />
          </View>
          <View style={[styles.container, { marginTop: 12, width: 161, right: 24 }]}>
            <TextComponents
              style={styles.addressText}
              placeholder={"Zip Code"}
              secureTextEntry={true}
            // onChangeText={handleChange("password")}
            // onBlur={handleBlur("password")}
            // value={values.password}
            />
          </View>

        </View>
      </View>
      <View>
      </View>
      <View style={{marginTop:460}}>
        <ButtonComponent
          style={styles.btnStyle}
          text={"Save"}
          btnLabelStyle={styles.btnText}
        // onPress={handleSubmit}
        />
      </View>
    </View>
  )
}

export default AddressTextScreen

const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    color: AppColor.white,
  },
  container: {
    borderRadius: 4,
    backgroundColor: AppColor.lightDark,
    marginTop: 32,
    marginHorizontal: 24,
  },
  addressText: {
    fontFamily: "Roboto-Light",
    fontWeight: "400",
    letterSpacing: -0.400,
    fontSize: 16,
    paddingHorizontal: 15,
    color: AppColor.white,
  },
  btnStyle: {
    width: 355,
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

})