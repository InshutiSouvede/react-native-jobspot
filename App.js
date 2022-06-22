import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import NewPassword from './screens/NewPassword';
import VerificationCode from './screens/VerificationCode';
import ForgotPassword from './screens/ForgotPassword';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash'>
        <Stack.Screen component={SplashScreen} name="splash" options={{headerShown: false}} />
        <Stack.Screen component={LoginScreen} name="login" options={{headerShown: false}} />
        <Stack.Screen component={SignUpScreen} name="signup" options={{headershown: false}} />
        <Stack.Screen component={ForgotPassword} name="forgotpassword" />
        <Stack.Screen component={VerificationCode} name="verificationcode" />
        <Stack.Screen component={NewPassword} name="newpassword" />
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
