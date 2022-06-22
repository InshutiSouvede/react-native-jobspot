import { Text,StyleSheet, View,Image, TextInput ,Dimensions } from "react-native"
import ButtonBlue from "../components/Button";

const {height,width} = Dimensions.get("screen");
export default function ForgotPassword({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title} > Forgot Password?</Text>
            <Text style={styles.p} > Enter your signup email to recieve the verification code </Text>
            <Image source={
                require('../assets/forgot.png')
            } style={{width:width*0.4 , height:350, resizeMode:'contain'}}  />
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                style={[styles.textInput,{marginLeft:15}]}
                placeholder="example@gmail.com"
                placeholderTextColor={'rgba(13, 1, 64, 0.6)'}
                />
            </View>
            <View style={{marginLeft:15}}>
            <ButtonBlue bgColor={'#130160'}>
                <Text style={{color:'white'}} onPress={()=>navigation.navigate('verificationcode')}>RESET PASSWORD</Text>
               
            </ButtonBlue>
            <ButtonBlue bgColor={'#D6CDFE'}>
                <Text style={{color:'white'}} onPress={()=>navigation.navigate('login')}>BACK TO LOGIN</Text>
            </ButtonBlue>
            </View>
            
        </View>        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        alignItems:'center',
        paddingTop:height*0.06,
        flex:1
    },
    title:{
        fontSize:20,
        fontWeight:'700',
        marginVertical:25,
        color:'#0D0140',
    },
    p:{
        color:'#524B6B',
        fontSize:12,
        fontWeight:'400',
        width:width*0.6,
        marginBottom:30
    },
    textInput:{
        borderWidth:1,
        borderRadius:5,
        height:50,
        width:width*0.7,
        padding:15,
        marginVertical:10,
    },
    label:{
        fontWeight:'700',
        color:'#150B3D',
    }
})