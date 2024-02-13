import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import AppColor from '../../theme/AppColor'
import BackButtonScreenComponent from '../../components/BackButtonScreenComponent'
import AppStrings from '../../constants/AppString'
import HoodiesProduct from '../../json/HoodiesList/HoodiesListing'
import ItemsComponents from '../../components/ItemsComponent'
import AppIcons from '../../constants/AppIcon'

const HoodiesScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: AppColor.dark
        }}>
            <View style={{ marginTop: 20 }}>
                <BackButtonScreenComponent
                    style={{ marginLeft: 27 }}
                />
            </View>
            <View style={{
                marginHorizontal: 24,
                marginTop: 16,
            }}>
                <Text
                    style={styles.txtStyle}
                >{AppStrings.hoodies240}</Text>
            </View>
            <View >
                <FlatList
                    numColumns={2}
                    contentContainerStyle={{
                        marginVertical: 16,
                        marginHorizontal:20,
                        paddingBottom:"28%"
                    }}
                    overScrollMode='never'

                    data={HoodiesProduct}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                                flex: 1,
                                marginBottom:20,
                                alignItems: 'center',
                                justifyContent: 'center',
                               
                            }}>
                                <ItemsComponents
                                    key={item.id ? item.id.toString() : Math.random().toString()}
                                    img={item?.hoodieImage}
                                    text={item?.hoodieName}
                                    priceText={item?.hoodiePrice}
                                    numberOfLines={2}
                                    item={item}
                                    keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}

                                />
                            </View>
                        )
                    }}
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
})

export default HoodiesScreen