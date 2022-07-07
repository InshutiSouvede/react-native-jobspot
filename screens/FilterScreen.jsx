import { useState } from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import { Text, View, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import CheckBoxFilter from "../components/CheckBoxFilter"
import RadioFilter from "../components/RadioFilter"
import SingleSlider from "../components/Slider"
import GenButton from "../components/GenButton"
import ButtonFilter from "../components/ButtonFilter"
import ButtonBlue from "../components/Button"

const { height, width } = Dimensions.get('screen')

export default FilterScreen = ({navigation}) => {
    // Problems
    /** 
     * Styles on radio and check box are not handled well
     * check box doesn't allow multiple choice
     * no multi slider and slider doesn't move with value
     * button filters do not work well
    */
    const lastUpdateOptions = [
        "Recent",
        "Last Week",
        "Last Month",
        "Anytime"
    ]
    const workplace = [
        "On-site",
        "Hybrid",
        "Remote"
    ]
    const jobs = [
        "Apprentice",
        "Part-time",
        "Full time",
        "Contract",
        "Project-based"
    ]
    const positions = [
        "Junior",
        "Senior",
        "Leader",
        "Manager"
    ]
    const cityOptions = [
        "California, USA",
        "Texaz, USA",
        "New York, USA",
        "Florida, USA"
    ]
    const experiences = [
        "No experience",
        "Less than a year",
        "1-3 years",
        "5-10 years",
        "More than 10 years"
    ]
    const specialization = [
        "Design",
        "Finance",
        "Education",
        "Health",
        "Restaurant",
        "Programmer"
    ]
    const [showRadioButtons, setshowRadioButtons] = useState(true)
    const toggleButtons = () => {
        setshowRadioButtons(!showRadioButtons)
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={{ textAlign: 'center', fontWeight: '700', marginVertical: 25,fontSize:30 }}>Filter</Text>

            <RadioFilter title="Last update" options={lastUpdateOptions} />
            <View style={{ width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20 }}></View>

            <RadioFilter title="Type of workplace" options={workplace} />
            <View style={{ width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20 }}></View>

            <ButtonFilter title={"Job type"} options={jobs} />
            <View style={{ width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20 }}></View>

            <ButtonFilter title={"Position leve"} options={positions} />
            <View style={{ width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20 }}></View>

            <CheckBoxFilter title="City" options={cityOptions} />
            <View style={{ width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20 }}></View>
            <RadioFilter title="Last update" options={lastUpdateOptions} />
            <View style={{ width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20 }}></View>

            <TouchableOpacity onPress={toggleButtons} style={{ justifyContent: "space-between", flexDirection: "row", }}>
                <Text style={{}}>Salary</Text>
                <Icon name={showRadioButtons ? 'angle-up' : 'angle-down'} color={"#150B3D"} size={25} />
            </TouchableOpacity>
            {showRadioButtons && <SingleSlider />}
            <View style={{ width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20 }}></View>

            <RadioFilter title="Experience" options={experiences} />
            <View style={{ width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20 }}></View>

            <CheckBoxFilter title="Specialization" options={specialization} />
            <View style={{ width: "100%", height: 1, backgroundColor: "#DEE1E7", marginVertical: 20 }}></View>

            <View style={{ backgroundColor: "white", flexDirection: "row",marginVertical:25 }}>
                <GenButton title={'Reset'} style={{ color: "orange", backgroundColor: "blue" }} />
                <ButtonBlue width={300} bgColor="#130160" onPress={() => { navigation.navigate("home") }}>
                    <Text style={{ color: "white", fontSize: 14, fontWeight: "700" }}>APPLY NOW</Text>
                </ButtonBlue>
            </View>


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9F9',
        height,
        padding: 20,
    }
})
