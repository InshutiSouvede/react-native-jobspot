import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Text, View } from "react-native";
export default  SingleSlider = ()=>{
  const [range,setRange] = useState(15)
  const [sliding,setSliding] = useState('Inactive')

  return (
    <View>
      
      {/* <Text style={{fontSize:20,fontWeight:'bold'}}>{sliding}</Text> */}
      <Slider
        style = {{width:250,height:40}}
        minimumValue = {0}
        maximumValue ={30}
        minimumTrackTintColor = 'orange'
        maximumTrackTintColor="green"
        thumbTintColor="orange"
        value={15}
        onValueChange ={value=>setRange(Math.floor(value))}
        // not necessary here
        // onSlidingComplete = {()=>setSliding('Inactive')}
        // onSlidingStart = {()=>setSliding('Sliding')}
      />
      <Text style={{fontSize:20,fontWeight:'bold'}}>{range} K</Text>
    </View>
  )
}

// import MultiSlider from "react-native-multi-slider";

// const TIME = {  min: 0,  max: 24 }
// const SliderPad = 12;

// // our time slider component
// export default SingleSlider = ({}) => {
//   const { min, max } = TIME;
//   const [width, setWidth] = useState(280);
//   const [selected, setSelected] = useState(null);

//   if (!selected) {
//     setSelected([min]); // we are only selected min, since it is single slider
//   }

//   // Callbacks
//   const onLayout = (event) => {
//     setWidth(event.nativeEvent.layout.width - SliderPad * 2);
//   };
//   const onValuesChangeFinish = (values) => {
//     setSelected(values);
//   };

//   return (
//     <View onLayout={onLayout} style={styles.wrapper}>
//         <MultiSlider
//           min={min}
//           max={max}
//           // allowOverlap
//           values={selected}
//           sliderLength={width}
//           onValuesChangeFinish={onValuesChangeFinish}
//           enableLabel={true}
//           trackStyle={{
//             height: 10,
//             borderRadius: 8,
//           }}
//           markerOffsetY={3}
//           selectedStyle={{
//             backgroundColor: "#895CDF",
//           }}
//           unselectedStyle={{
//             backgroundColor: "#EEF3F7",
//           }}
//         />
//     </View>
//   );
// }