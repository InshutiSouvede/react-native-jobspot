import { useState } from "react"
import { Text,StyleSheet, View, TextInput, Dimensions, Image } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBlue from "../components/Button";
const {height , width} = Dimensions.get('screen')

export default function NewPassword({navigation}){
    const [hidePass,setHidePass] = useState(true);
    const toggleHidepass = ()=>{
        setHidePass(!hidePass);
    }
    return(
        <View style={styles.container}>
            <Text style = {styles.title}> Set new Password</Text>

            {/* <Image source={
                require('../assets/newpass.png')
            }
            style={{height:250,width:width*0.4, resizeMode:'contain'}} 
            /> */}

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true}/>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passContainer}>
                <TextInput style={styles.pass}  secureTextEntry={hidePass}/>
                <Icon name={hidePass? 'eye-slash':'eye'} size={22} onPress={toggleHidepass} />
            </View>
           <ButtonBlue bgColor={"#0D0140"}>
            {/* With alert message for success or remain here if no success */}
            <Text style={{color:'#fff',fontWeight:'700'}} onPress={()=>navigation.navigate('login')}>Done</Text>
           </ButtonBlue>
           <ButtonBlue bgColor={"#D6CDFE"}>
           <Text style={{color:'#fff',fontWeight:'700'}} onPress={()=>navigation.navigate('login')}>Cancel</Text>
           </ButtonBlue>
        </View>        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        paddingTop:height*0.16,
        alignItems:'center',
    },
    title:{
        fontSize:30,
        fontWeight:'700',
        marginBottom:60,
        color:'#0D0140'
    },
    label:{
        // backgroundColor:'blue',
        lineHeight:30,
        width:width*0.75,
        color:'#0D0140',
        marginVertical:10.
    },
    input:{
        borderWidth:1,
        opacity:0.6,
        width:width*0.7,
        height:50,
        borderRadius:5,
        marginBottom:30,
        paddingLeft:20,
        fontSize:18
    },
    passContainer:{
        borderWidth:1,
        opacity:0.6,
        width:width*0.7,
        height:50,
        borderRadius:5,
        marginBottom:30,
        flexDirection:"row",
        alignItems:'center'
    },
    pass:{
        width:width*0.6,
        // backgroundColor:'blue',
        marginHorizontal:10,
        fontSize:18,
    },
})