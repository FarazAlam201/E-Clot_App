import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import AppColor from '../theme/AppColor';


const DropdownComponent = ({ value, items, onChange }) => {
    const [open, setOpen] = useState(false);

    return <DropDownPicker
        open={open}
        value={value}
        setOpen={setOpen}
        setValue={onChange}
        items={items}
        placeholder='Size'
        style={{
            borderRadius: 100,
            backgroundColor: AppColor.lightDark,
            width: 342,
    
        }}
        textStyle={{ color: AppColor.white, paddingHorizontal: 18 }}
        labelStyle={{ color: AppColor.white, paddingHorizontal: 12 }}
        dropDownContainerStyle={{
            backgroundColor: AppColor.lightDark,
            width: 342
        }}
        placeholderStyle={{ color: AppColor.white }}
        arrowColor='white'
    />
}

export default DropdownComponent