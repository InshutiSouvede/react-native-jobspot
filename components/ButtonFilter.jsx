import { useState } from "react"
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, View,Text } from "react-native"
import GenButton from "./GenButton";

export default ButtonFilter = ({title,options=[]})=>{
    const [showRadioButton,setShowRadioButton] = useState(true)
    const [selected,setselected] = useState(null);
    const [styles,setStyles] = useState({color:"gray",backgroundColor:"blue"});


    const toggleButtons = ()=>{
        setShowRadioButton(!showRadioButton)
    }
    return (
        <View>
            <TouchableOpacity style={{flexDirection:"row",justifyContent:'space-between'}}>
                <Text>{title}</Text>
                <Icon name= {showRadioButton? 'angle-up':'angle-down'} color={"#150B3D"} size={25}  />
            </TouchableOpacity>
            {
                showRadioButton && <View style = {{flexDirection:"row",flexWrap:"wrap"}}>
                    { options.map( option =>{
                        return <View key = {option}>
                            <GenButton onpress={ ()=>{
                                setselected(option)
                                setStyles({backgroundColor:"orange",color:"white"})
                            }}
                            title={option}
                            style={styles} />
                        </View>
                    })
                    }
                </View>
            }
        </View>
    )
}