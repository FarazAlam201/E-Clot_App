import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppStrings from '../../constants/AppString'
import ButtonComponent from '../../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import AppColor from '../../theme/AppColor'
import AppIcons from '../../constants/AppIcon'
import { AppRoutes } from '../../routes/AppRoutes'

const NotificationScreen = () => {
  const navigation=useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: AppColor.dark, }}>
      <View style={{
        alignItems: 'center',
        marginTop: 20,
      }}>
        <Text style={styles.txtStyle}>{AppStrings.notification}</Text>
      </View>

      <View style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop:204
      }}>
        <AppIcons.icBell />
        <View style={{ marginTop: 24 }}>
          <Text style={[styles.txtStyle, { fontSize: 24 }]}>
            {AppStrings.noNotification}</Text>
        </View>
        <View style={{ marginTop: 24 }}>
          <ButtonComponent
            style={styles.btnStyle}
            text={AppStrings.exploreCategories}
            btnLabelStyle={styles.btnText}
            onPress={()=>navigation.navigate(AppRoutes.exploreNotification)}
           
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    color: AppColor.white,
    fontWeight: "700",

  },
  btnStyle: {
    width: 185,
    paddingVertical: 15,
    backgroundColor: AppColor.primary,
    marginTop: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",

  },
  
})
export default NotificationScreen