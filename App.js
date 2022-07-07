import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import NewPassword from './screens/NewPassword';
import VerificationCode from './screens/VerificationCode';
import ForgotPassword from './screens/ForgotPassword';
import HomeScreen from './screens/HomeScreen';
import FilterScreen from './screens/FilterScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();
// Get icons from https://icons.expo.fyi/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='filter'
        screenOptions={({route})=>{
          tabBarIcon :({focused,color,size})=>{
            let rn  = route.name;
            let iconName;
            if(rn === "login"){
              iconName = focused? 'home':'home-outline'
            }else{
              iconName = focused? 'setting':'setting-outline'
            }
            return <Icon name={iconName} size = {size} color = {'orange'} />
          }
        }}
      >
        <Stack.Screen component={SplashScreen} name="splash" options={{headerShown: false}} />
        <Stack.Screen component={LoginScreen} name="login" options={{headerShown: false}} />
        <Stack.Screen component={SignUpScreen} name="signup" options={{headerShown: false}} />
        <Stack.Screen component={ForgotPassword} name="forgotpassword" options={{headerShown:false}}/>
        <Stack.Screen component={VerificationCode} name="verificationcode" options={{headerShown:false}} />
        <Stack.Screen component={NewPassword} name="newpassword" options={{headerShown: false}}/>
        <Stack.Screen component={HomeScreen} name="home" options={{headerShown: false}}/>
        <Stack.Screen component={FilterScreen} name="filter" options={{title: "", headerShadowVisible: false}}/>
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
