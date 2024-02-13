import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import AppColor from '../../theme/AppColor';
import ButtonComponent from '../../components/ButtonComponent';
import AppStrings from '../../constants/AppString';
import CardComponent from '../../components/CardComponent';
import AppIcons from '../../constants/AppIcon';
import HeaderTitleComponent from './components/HeaderTitleComponent';
import OrderCradComponetns from './components/OrderCradComponetns';

const OrderExplore = () => {
  const filters = [
    {
      id: 1,
      title: AppStrings.processing,
    },
    {
      id: 2,
      title: AppStrings.shipped,
    },
    {
      id: 3,
      title: AppStrings.delivered,
    },
    {
      id: 4,
      title: AppStrings.returned,
    },
    {
      id: 5,
      title: AppStrings.cancel,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={{marginRight: 13}}>
        <ButtonComponent style={styles.btnStyle} text={item.title} />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColor.dark,
      }}>
      <View>
        <HeaderTitleComponent />
      </View>
      <View style={{height: 40}} />
      <View style={{marginLeft: 27}}>
        <FlatList
          data={filters}
          overScrollMode="never"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          key={({item, index}) => item.id}
        />
      </View>
      <View style={{marginRight: 24, marginLeft: 24}}>
        <OrderCradComponetns
          leadingIcon={AppIcons.icOrderNoActice}
          title={AppStrings.OrderNo}
          subTilte={'2 itmes'}
          trailingIcon={AppIcons.icArrowright}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: AppColor.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: AppColor.lightDark,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardstyle: {
    paddingVertical: 25,
    shadowColor: AppColor.lightDark,
    elevation: 5,
    shadowOpacity: 0.5,
  },
  viewStyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
  },
  cardStyle: {
    padding: 15,
  },
  iconStyle: {
    marginTop: 5,
    right: 48,
  },
});
export default OrderExplore;
