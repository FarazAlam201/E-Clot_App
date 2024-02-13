import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppColor from '../../theme/AppColor';
import AppStrings from '../../constants/AppString';
import AppIcons from '../../constants/AppIcon';
import ButtonComponent from '../../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../../routes/AppRoutes';
import HeaderTitleComponent from './components/HeaderTitleComponent';

const OrderScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColor.dark,
      }}>
      <View>
        <HeaderTitleComponent />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: '49%',
        }}>
        <View>
          <AppIcons.icOrder />
        </View>
        <View style={{marginTop: 24}}>
          <Text style={[styles.txtStyle, {fontSize: 24}]}>
            {AppStrings.noOrdersyet}
          </Text>
        </View>
        <View style={{marginTop: 24}}>
          <ButtonComponent
            style={styles.btnStyle}
            text={AppStrings.exploreCategories}
            btnLabelStyle={styles.btnText}
            onPress={() => navigation.navigate(AppRoutes.exploreOrder)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: AppColor.white,
    fontWeight: '700',
  },
  btnStyle: {
    width: 185,
    paddingVertical: 15,
    backgroundColor: AppColor.primary,
    marginTop: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderScreen;
