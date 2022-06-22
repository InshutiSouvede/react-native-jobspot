import { Text,StyleSheet, View } from "react-native"
export default function NewPassword(){
    return(
        <View style={styles.container}>
            <Text> Set new Password</Text>
        </View>        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'green'
    }
})