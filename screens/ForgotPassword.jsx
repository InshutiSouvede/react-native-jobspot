import { Text,StyleSheet, View } from "react-native"
export default function ForgotPassword(){
    return(
        <View style={styles.container}>
            <Text> Forgot Password Page</Text>
        </View>        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'green'
    }
})