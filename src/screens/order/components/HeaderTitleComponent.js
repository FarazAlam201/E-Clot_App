import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppStrings from '../../../constants/AppString';
import AppColor from '../../../theme/AppColor';

export default function HeaderTitleComponent() {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 20,
      }}>
      <Text style={styles.txtStyle}>{AppStrings.ordersTitle}</Text>
    </View>
  );
}
const styles =StyleSheet.create({
    txtStyle: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: AppColor.white,
        fontWeight: '700',
      },
})