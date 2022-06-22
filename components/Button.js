import { View, Dimensions,StyleSheet, Button, TouchableOpacity } from "react-native";

const {height , width } =  Dimensions.get("screen");

export default function ButtonBlue({children, bgColor, onPress=()=>{}}){
    return(
            <TouchableOpacity style={[styles.button, {backgroundColor: bgColor}]} onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    button:{
        borderRadius:10,
        width: width*0.7,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        flexDirection: "row"
    }
})