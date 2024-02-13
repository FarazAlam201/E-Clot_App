import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CardComponent from '../../components/CardComponent'
import AppColor from '../../theme/AppColor'
import AppIcons from '../../constants/AppIcon'
import AppStrings from '../../constants/AppString'
import { useNavigation } from '@react-navigation/native'
import { AppRoutes } from '../../routes/AppRoutes'

const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: AppColor.dark }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:20}}
      >
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 140 }}>
          <AppIcons.icProfile />
        </View>
        <View style={{ margin: 24 }}>
          <CardComponent
            title={AppStrings.GilbertJones}
            text={AppStrings.Glbertgmail}
            editText={"Edit"}
            date={AppStrings.date}
            lableStyle={styles.lableStyle}
            style={styles.cardstyle}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24 }}>

          <CardComponent
            text={AppStrings.addressTilte}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
            onPress={() => navigation.navigate(AppRoutes.address)}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24, marginTop: 8 }}>

          <CardComponent
            text={AppStrings.wishList}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24, marginTop: 8 }}>

          <CardComponent
            text={AppStrings.payment}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24, marginTop: 8 }}>

          <CardComponent
            text={AppStrings.help}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24, marginTop: 8 }}>

          <CardComponent
            text={AppStrings.support}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
            <TouchableOpacity>
                    <View style={{ alignItems: "center", marginTop: 35 }}>
                    <TouchableOpacity onPress={() => navigation.navigate(AppRoutes.signIn)}>
        <Text style={{
          fontSize: 16,
          fontFamily: "Roboto-Bold",
          color: AppColor.red
        }}>{AppStrings.signOut}</Text>
      </TouchableOpacity>
        </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  lableStyle: {
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: "Roboto-Light"
  },
  cardstyle: {
    paddingVertical: 15,
    shadowColor: AppColor.lightDark,
    elevation: 5,
    shadowOpacity: 0.5,
  },
})
export default ProfileScreen