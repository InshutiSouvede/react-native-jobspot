import { useState } from 'react';
import { StyleSheet, Text, TextInput, View,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'expo-checkbox';
import ButtonBlue from '../components/Button';

const {height, width} = Dimensions.get("screen")

export default function SignUpScreen({navigation}){
   const {input,inputField,password,signin,texts,remember,passwordContainer,checkbox,p,label} = styles;
   const [hidePass,setHidePass] = useState(true);
   const [isSelected,setIsSelected] = useState(false);
   const toggleHidepass = ()=>{
    setHidePass(!hidePass);
   }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo autem rem ut labore  </Text>
          <View >
            <Text style={label} >Full name</Text>
            <TextInput placeholderTextColor={'rgba(13, 1, 64, 0.6)'} style={inputField} placeholder = "Brandone Louis" />
         
            <Text style={label} >Email</Text>
            <TextInput placeholderTextColor={'rgba(13, 1, 64, 0.6)'} style={inputField} placeholder = "BrandoneLouis@gmail.com" />
          <Text style={label} >Password</Text>
            <View style={passwordContainer}>
            <TextInput placeholderTextColor={'rgba(13, 1, 64, 0.6)'} style={password} placeholder = "..........." secureTextEntry={hidePass} />
            <Icon name={hidePass?'eye-slash':'eye'}  size= {24} onPress={toggleHidepass}/>
            </View>            
          </View>
          <View>
          <View style={remember} >
            <CheckBox
            style= {checkbox}
            value = {isSelected}
            onValueChange = {setIsSelected}
            />
            <Text>Remember me</Text>
          </View>
          </View>
          <View>
            <ButtonBlue bgColor="#130160">
              <Text style={{color:'white'}}> SIGN UP</Text>
            </ButtonBlue>
            <ButtonBlue bgColor={'#D6CDFE'} >
              <Icon name='google' size={20} style={{color:'#130160',marginRight:10}} />
              <Text style={{color:'white'}}> SIGN UP WITH GOOGLE</Text>
            </ButtonBlue>
          </View>
          <View style={texts}>
            <Text>You already have account?</Text>
            <Text style={signin} onPress={()=>navigation.navigate('login')}>Sign in</Text>
          </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop:25
    },
    p:{
      textAlign:'center',
      height:60,
      marginHorizontal:25,
      marginBottom:25,
      fontSize:12,
      // fontFamily:'DM Sans',
      fontWeight:'400',
      color:'#524B6B',
      width:width*0.7,
      lineHeight:20
    },
    title:{
      fontSize:30,
      // fontFamily:'DM Sans',
      fontWeight:'700',
      color:'#0D0140',
      marginBottom:10,

    },
    label:{
      fontSize:12,
      // fontFamily:'DM Sans',
      fontWeight:'700',
      color:'#0D0140',
      marginVertical:10,
    },
    input:{
      width:width*0.7,
      marginBottom:10
    },
    inputField:{
      width:width*0.8,
      height:50,
      borderWidth:1,
      borderRadius:5,
      paddingLeft:10,
      marginBottom:15,
      opacity:0.6,
    },
    passwordContainer:{
      flexDirection:'row',
      borderWidth:1,
      borderRadius:5,
      height:50,
      alignItems:'center',
      paddingLeft:10,
      marginBottom:10,
      width:width*0.8,
      opacity:0.6
    },
    password:{
      width:width*0.7,
    },
    remember:{
      flexDirection:"row",
      width:width*0.8,
      height:50,
      alignItems:'center',
    },
    checkbox:{
      marginRight:10
    },
    form:{
      borderWidth:0
    },
    texts:{
      flexDirection:'row'
    },
    signin:{
      color:'orange',
      borderBottomColor:'orange',
      marginLeft:10
    },
  });