import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColor from '../../theme/AppColor'
import CardComponent from '../../components/CardComponent'
import AppStrings from '../../constants/AppString'
import AppIcons from '../../constants/AppIcon'

const ExploreNotification = () => {
  return (
    <View style={{ flex: 1, backgroundColor: AppColor.dark }}>
      <View style={{
        alignItems: 'center',
        marginTop: 20
      }}>
        <Text style={styles.txtStyle}>Notification</Text>
      </View>
      <View style={{
        marginLeft: 24,
        marginRight: 24,
        marginTop:42,

      }}>
        <CardComponent
          text={AppStrings.notiText}
          icon={AppIcons.icNotificationbing}
          lableStyle={styles.lableStyle}
          disabled={true}
          style={styles.cardstyle}
          viewStyle={styles.viewStyle}
          iconStyle={styles.iconStyle}
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
    fontWeight: "700",
  },
  lableStyle: {
    fontSize: 12,
    overflow: "hidden",
    fontFamily: "Roboto-Light",
    left: 60,
    bottom:5,
  },
  cardstyle: {
    paddingVertical: 25,
    shadowColor: AppColor.lightDark,
    elevation: 5,
    shadowOpacity: 0.5,
  },
  viewStyle: {
    flexDirection: "row-reverse",
    justifyContent: "space-between"

  },
  iconStyle: {
    right: 42,

  }

})
export default ExploreNotification
