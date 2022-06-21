import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {height,width} = Dimensions.get("screen");
export default function SplashScreen({navigation}){
    return (
        <View style={styles.container}>
          <Text style={styles.jobspot}>Jobspot</Text>
          <View>
          <Image source={require('../assets/jobsplash.png')} style={{height: 350, width: width*0.8, resizeMode: "contain", marginBottom: 80}} />
          
          <View style={{flexDirection: "row"}}>
            <View>
            <Text  style={styles.texts}>Find your </Text>
            <Text style={styles.dream}>DREAM JOB</Text>
            <Text  style={styles.texts}>Here!</Text>
            </View>
            <View style={{flex: 1}}></View>
          </View>
          <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>
            <TouchableOpacity style={{height: 60, width: 60, backgroundColor: "#130160", borderRadius: 30, alignItems: "center", justifyContent: "center"}} onPress={()=>navigation.navigate("login")}>
              <Icon name='arrow-right' color="white" size={26} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: height * 0.15
    },
    jobspot:{
      color:'black',
      fontSize:18,
      fontWeight:'700',
      width: width*0.8,
      textAlign: "right",
      marginBottom: 90,
    },
    texts:{
      fontSize:40,
    fontWeight:'700'
    },
  dream:{
    color:'orange',
    borderBottomColor:'orange',
    borderBottomWidth:2,
    fontSize:40,
    fontWeight:'700'
  }
  });