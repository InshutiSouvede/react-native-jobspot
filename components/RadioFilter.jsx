import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RadioButton } from 'react-native-radio-buttons-group';

const RadioFilter = ({ title = "", options = [] }) => {
    const [selected, setselected] = useState(null)
    const [showRadioButtons, setshowRadioButtons] = useState(true)
    const toggleButtons = () => {
        setshowRadioButtons(!showRadioButtons)
    }
    // const handleSelected = (option)=>{
    //     setselected(option)
    //     console.log(selected===option,selected,option);
    // }
    
    return (
        <View>
            <TouchableOpacity onPress={toggleButtons} style={{ justifyContent: "space-between", flexDirection: "row", }}>
                <Text style={{}}>{title}</Text>
                <Icon name={showRadioButtons ? 'angle-up' : 'angle-down'} color={"#150B3D"} size={25} />
            </TouchableOpacity>
            {showRadioButtons && (
                <View style={{ alignItems: "flex-start" }}>
                    {options.map(option => {
                        return <View key={option} style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <RadioButton
                                color={option===selected?'#FF9228':''}
                                selected={selected === option}
                                onPress={() => {
                                    setselected(option)
                                    console.log(selected===option,selected,option);
                                }}
                            />
                            <Text onPress={() => {
                                setselected(option)
                            }}>{option}</Text>
                        </View>
                    })}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({

})

export default RadioFilter