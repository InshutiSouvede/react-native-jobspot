import { Text,StyleSheet, View } from "react-native"
export default function VerificationCode(){
    return(
        <View style={styles.container}>
            <Text> Enter Verification code</Text>
        </View>        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'green'
    }
})