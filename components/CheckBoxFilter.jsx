import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from "expo-checkbox"

const CheckBoxFilter = ({ title = "", options = [] }) => {
    const [selected, setselected] = useState(null)
    const [showRadioButtons, setshowRadioButtons] = useState(true)
    const toggleButtons = () => {
        setshowRadioButtons(!showRadioButtons)
    }
    return (
        <View>
            <TouchableOpacity onPress={toggleButtons} style={{ justifyContent: "space-between", flexDirection: "row", }}>
                <Text style={{}}>{title}</Text>
                <Icon name={showRadioButtons ? 'angle-up' : 'angle-down'} color={"#150B3D"} size={25} />
            </TouchableOpacity>
            {showRadioButtons && (
                <View style={{ alignItems: "flex-start" }}>
                    {options.map(option => {
                        return <View key={option} style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
                            <CheckBox
                                value={selected === option}
                                onValueChange={(val) => setselected(val ? option : null)}
                            />
                            <Text style={{ marginLeft: 10 }}>{option}</Text>
                        </View>
                    })}
                </View>
            )}
        </View>
    )
}

export default CheckBoxFilter