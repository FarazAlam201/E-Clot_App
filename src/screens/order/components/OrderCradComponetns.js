import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppIcons from '../../../constants/AppIcon';
import AppColor from '../../../theme/AppColor';

const OrderCradComponetns = props => {
  const {leadingIcon, title, subTilte, trailingIcon} = props;
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {leadingIcon && <props.leadingIcon />}
        <View>
          {title && <Text style={{color: AppColor.white}}>{title}</Text>}
        </View>
      </View>
      <View>{subTilte && <Text>{subTilte}</Text>}</View>
      <View>{trailingIcon && <props.trailingIcon />}</View>
    </View>
  );
};

export default OrderCradComponetns;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.lightDark,
    borderRadius: 8,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
