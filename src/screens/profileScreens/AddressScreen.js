import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppColor from '../../theme/AppColor'
import AppIcons from '../../constants/AppIcon'
import BackButtonScreenComponent from '../../components/BackButtonScreenComponent'
import AppStrings from '../../constants/AppString'
import CardComponent from '../../components/CardComponent'
import { useNavigation } from '@react-navigation/native'
import { AppRoutes } from '../../routes/AppRoutes'

const AddressScreen = () => {
  const navigation=useNavigation()
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
          marginLeft: 97
        }}>
          <Text style={styles.txtStyle}>{AppStrings.addressTilte}</Text>
        </View>
      </View>
      <View style={{ marginLeft: 24, marginRight: 24, marginTop: 42 }}>
        <CardComponent
          text={AppStrings.address}
          editText={"Edit"}
          style={styles.cardstyle}
          lableStyle={styles.lableStyle}
          lineNumber={1}
          onPress={()=>navigation.navigate(AppRoutes.addressTextScreen)}
        />
      </View>
      <View style={{ marginLeft: 24, marginRight: 24, marginTop: 12 }}>
        <CardComponent
          text={AppStrings.address}
          editText={"Edit"}
          style={styles.cardstyle}
          lableStyle={styles.lableStyle}
          lineNumber={2}

        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    color: AppColor.white,
  },
  cardstyle: {
    paddingVertical: 25,
    shadowColor: AppColor.lightDark,
    elevation: 5,
    shadowOpacity: 0.5,
  },
})

export default AddressScreen