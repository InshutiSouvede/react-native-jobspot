import { Text,StyleSheet, View,Image,Dimensions, TextInput } from "react-native"
import ButtonBlue from "../components/Button";

const {height,width} = Dimensions.get('screen');

export default function VerificationCode({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Enter Verification code</Text>
            <Text style={styles.p}>We have sent an email containing the verification code on abcd@gmail.com </Text>
            <Image
            source={
                require('../assets/verificationcode.png')
            }
            style={{height:300,width:width*0.4, resizeMode:'contain'}}
            />
            <View>
            <Text style={{color:'#0D0140', fontWeight:'700'}}>Code:</Text>
            <TextInput style={styles.textInput} placeholder=" ex: 123-456"  secureTextEntry={false} />
            <ButtonBlue bgColor={'#0D0140'} >
                <Text onPress={()=>navigation.navigate('newpassword')} style={{color:'#fff',fontWeight:'700'}}>NEXT</Text>
            </ButtonBlue>
            <ButtonBlue bgColor={'#D6CDFE'}>
                <Text onPress={()=>navigation.navigate('login')} style={{color:'#fff',fontWeight:'700'}}>Cancel</Text>
            </ButtonBlue>
            <View style={styles.resendContainer}>
                <Text>Have not recieved an email?</Text>
                <Text style={styles.resend} onPress={()=>navigation.navigate('forgotpassword')} >Resend</Text>
            </View>
        </View>
        </View>        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        alignItems:'center',
        paddingTop:height*0.06,
    },
    title:{
        marginVertical:25,
        fontSize:30,
        fontWeight:'700',
        color:'#0D0140'
    },
    p:{
        textAlign:"center",
        width:width*0.7,
        color:'#524B6B'
    },
    textInput:{
        borderWidth:1,
        borderRadius:5,
        opacity:0.6,
        height:50,
        paddingLeft:10,
        fontSize:20,
        
        marginVertical:10,
    },
    resendContainer:{
        flexDirection:'row',
        justifyContent:'center',
    },
    resend:{
        color:'orange',
        marginLeft:5,
        borderBottomColor:'orange',
        borderBottomWidth:0.5
    },

})