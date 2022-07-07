import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default GenButton = ({title,width=120,onpress = ()=>{},style= {color:"black",backgroundColor:"#524B6B"} })=>{
    return (
            <TouchableOpacity style= {[styles.button,{width:width,color:style.color,backgroundColor:style.backgroundColor}]} onPress= {onpress}>
                <Text style={{fontWeight:'400',textAlign:'center'}}>{title}</Text>
            </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row",
        borderRadius:10,
        margin:10,
        marginVertical: 20,
    }
})