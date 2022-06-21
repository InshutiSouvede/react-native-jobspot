import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'expo-checkbox';
import ButtonBlue from '../components/Button';

const { height, width } = Dimensions.get("screen")

export default function LoginScreen({navigation}) {
  const [hidePassword, sethidePassword] = useState(true)
  const [isSelected, setSelection] = useState(false)
  const togglePassword = ()=>{
    sethidePassword(!hidePassword)
  }
  return (
    <View style={styles.container}>
      <View style={{ width: width * 0.55 }}>
        <Text style={styles.header}>Welcome Back</Text>
        <Text style={styles.subheader}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
      </View>

      <View style={{ width: width * 0.8, marginBottom: 35 }}>
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='example@gmail.com' placeholderTextColor={"rgb(13, 1, 64)"}></TextInput>
        </View>
      </View>

      <View style={{ width: width * 0.8 }}>
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='' placeholderTextColor={"rgb(13, 1, 64)"} secureTextEntry={hidePassword}></TextInput>
        <Icon name={hidePassword ? "eye-slash" : "eye"} size={30} onPress={togglePassword}></Icon>
        </View>
        <View style={styles.forgotContainer}>
          <View style={styles.rememberContainer}>
            <CheckBox 
            value={isSelected}
            onValueChange = {setSelection}
             style = {styles.checkbox}
             />
            <Text>Remember me</Text>
          </View>
          <Text>Forgot password</Text>
        </View>
      </View>

      <View>
        <ButtonBlue bgColor="#130160">
          <Text style={{color: "white", fontSize: 14, fontWeight: "700"}}>LOGIN</Text>
        </ButtonBlue>
        <ButtonBlue bgColor="#D6CDFE">
          <Icon name='google' size={22} />
          <Text style={{color: "#130160", marginLeft: 15, fontSize: 14, fontWeight: "700"}}>SIGN IN WITH GOOGLE</Text>
        </ButtonBlue>
      </View>
      <View style ={styles.signup}>
        <Text> You don't have an account yet?</Text>
        <Text style={styles.link} onPress={()=>navigation.navigate('signup')} >Signup</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: height * 0.15
  },
  header: {
    color: "#0D0140",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 11
  },
  subheader: {
    color: "#524B6B",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 64
  },
  inputLabel: {
    color: "#0D0140",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "left"
  },
  inputContainer: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  textInput: {
    flex: 1,
    color: "rgb(13, 1, 64)",
    opacity: 0.6,
    fontSize: 12,
    fontWeight: "400"
  },
  forgotContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:10
  },
  rememberContainer:{
    flexDirection:'row',
  },
  checkbox:{
    marginRight:10,
    backgroundColor:'#D6CDFE',
    borderWidth:0
  },
  signup:{
    flexDirection:'row',

  },
  link:{
    color:'orange',
    marginLeft:10
  }

});