import { Text, View, Dimensions, StyleSheet, ScrollView } from "react-native"
import CheckBoxFilter from "../components/CheckBoxFilter"
import RadioFilter from "../components/RadioFilter"

const {height,width} = Dimensions.get('screen')

export default FilterScreen = ()=>{
    const lastUpdateOptions = [
        "Recent",
        "Last Week",
        "Last Month",
        "Anytime"
    ]
    const cityOptions = [
        "California, USA",
        "Texaz, USA",
        "New York, USA",
        "Florida, USA"
    ]
    return (
        <ScrollView style={styles.container}>
            <RadioFilter title="Last update" options={lastUpdateOptions} />
        <View style={{width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20}}></View>
        <CheckBoxFilter title="City" options={cityOptions} />
        <View style={{width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20}}></View>
     </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F9F9F9',
        height,
        padding: 20
    }
})
