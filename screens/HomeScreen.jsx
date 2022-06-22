import { StyleSheet, View, Text, Dimensions, ScrollView, Image, Button } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const { height, width } = Dimensions.get('screen')

export default HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>

                <Image source={
                    { uri: "https://s3-alpha-sig.figma.com/img/05be/041b/58b5e1fe37be4a6bb5a74f76d7c0f06d?Expires=1656892800&Signature=YWbpwNWUfgSDsJ-0Zw-g2qAWKgXye~uM8-BDBB2FCrcIqHCLBNP0FXrkLKooOfPf7lFmfm3-SGO5Jyq3Q-~W4fY4u57kYS9j9lhHxPhZo9ryhmUnTzV9Euo6dQMmnzbYvWajfNtgo7FPQ6dOiir~8i4mBaYlxc1bsJJMSTTbsP7M7sIXGUvOWjNruGs3-bwjMxQ-xInEhHohAnW3Q5CZTuXmgqj58rGuNDGPhXccofYveCa29axuw~YYWvUvZmTSq0zYGTTy92kk0U1Zj1tdcwwkoOso4PUMjIzhWuAfty3fysAH2FhKDeRwH04lPi1Xdktku88pA-2eeEt~nSXKJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }
                }
                    style={{
                        width: 38,
                        height: 38,
                        borderRadius: 19
                    }} />
            </View>
            <Text style={styles.greet}>Hello</Text>
            <Text style={styles.greet}>Orlando Diggs</Text>
            <View style={styles.banner}>
                <View style={{ width: "35%", height: "100%", justifyContent: "center" }}>
                    <Text style={styles.bannerText}>50% off</Text>
                    <Text style={[styles.bannerText, { marginBottom: 18 }]}>take any courses</Text>
                    <Button title="Join Now" color={"#FF9228"} />
                </View>
            </View>
            <Image source={{ uri: "https://s3-alpha-sig.figma.com/img/011b/8de3/b7a62a40fb75a7822a4a30c0b7e584a5?Expires=1656892800&Signature=atmm8zSaZeKWComwnmAaIegEhX5memnjDP-upQ4gZVWffAFWC0Dp0a0TTBKLbcrDtP3Lye6diJdIxt61Rd~x3YhPO29CT~x4Yj-d0fXmlRfr5xGMyDOqmggeh8vQR05n~VjScQTZrTcwL-i77ix5dTDEDjgJQGu1p7ry1WlzDkG8qCZ9lktERJbKd7UwAByF~g3Uxb7rtL2VxCgsvthWWAF4VjWtq0A8q15V1od8VV~dJs1tL6j29XJ7TXHDkkM5yya~nfTC61zVv1FYwqzzW--i7RWjagCatZGleZk-AwHfE4hiGmOhiJWbXvgr1h7IDDeuRfr-mfaI6hDA6ngQMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }}
                style={styles.bannerImage}
            />
            <Text style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '700',
                marginVertical: 20
            }}>Find your job</Text>
            <View style={styles.jobtypes}>
                <View style={[styles.remote, { width: "48%" }]}>
                    <Image
                        source={{ uri: "https://s3-alpha-sig.figma.com/img/954c/0bb7/6c463cf44c6ed29168dbe6c326cf88f9?Expires=1656892800&Signature=LUutdEE3Hvr3ytRIaDTOK-N0EGzDRd0KwZs7fqS8sOTgYTpn6hRjbeIF4e0hDJ7NZ7ZLsxmrQD8Uz2XhRFg47nNubRDEbW6ohkuN6PS4MiVwjw4D5D5C1-F9lo6H0E0panGROzcWx8N99xzKefvu8D7GDjk1Ug2hNx-lknkQ8royUcAZmGZex22CsuvXF-DnAdCUxRkmoUBauux-D7B8Ci0MQrrlqVCh02JHWd3fSNrPPMYhUIc0Rp8Jo6EpHCsFcM9v7l6e7ocktFHbkbllKM3VggQJexVFebicfbZ3DPka54uvtwYnG8X8iB9Y96Ka8PH9-dwhBVFQdrpxEnnOiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }}
                        style={{ height: 34, width: 34, resizeMode: 'contain' }} />
                    <Text style={{ fontWeight: '700', fontSize: 16, marginVertical: 10, color: '#0D0140' }}>44.5k</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Remote job</Text>
                </View>
                <View style={{ width: "48%" }}>
                    <View style={styles.fullTime}>
                        <Text style={{ color: "#0D0140", fontSize: 16, fontWeight: "700", marginBottom: 5 }}>66.8k</Text>
                        <Text style={{ color: "#0D0140", fontSize: 14, fontWeight: "400" }}>Full Time</Text>
                    </View>
                    <View style={styles.partTime}>
                        <Text style={{ color: "#0D0140", fontSize: 16, fontWeight: "700", marginBottom: 5 }}>38.9k</Text>
                        <Text style={{ color: "#0D0140", fontSize: 14, fontWeight: "400" }}>Part Time</Text>
                    </View>
                </View>
            </View>
            <Text style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '700',
                marginVertical: 20
            }}>Recent Job List</Text>
            <View>
                <View style={{
                    width: "100%",
                    height: 170,
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    padding: 20
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 20
                    }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{marginRight: 20, backgroundColor: "#D6CDFE", height: 40, width: 40, borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
                                <Icon name="apple" color={"black"} size={20} />
                            </View>
                            <View>
                                <Text style={{color: "#150B3D", fontSize: 14, fontWeight: "700"}}>Product Designer</Text>
                                <Text style={{color: "#524B6B", fontSize: 12, fontWeight: "400"}}>Google inc . California, USA</Text>
                            </View>
                        </View>
                        <Icon name="save" color={"#524B6B"} size={28} />
                    </View>

                    <View style={{flexDirection:"row", marginBottom: 15}}>
                        <Text style={{color: "#150B3D", fontSize: 14, fontWeight: "600"}}>$15K</Text>
                        <Text style={{color: "lightgray"}}>/Mo</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{borderRadius: 8, opacity: 0.5, backgroundColor: "#CBC9D4", textAlign: "center", paddingVertical: 6, paddingHorizontal:17, minWidth: 170}}>Senior designer</Text>
                    <Text style={{borderRadius: 8, opacity: 0.5, backgroundColor: "#CBC9D4", textAlign: "center", paddingVertical: 6, paddingHorizontal:17, minWidth: 120}}>Full time</Text>
                    <Text style={{borderRadius: 8, opacity: 0.5, backgroundColor: "#FF6B2C", textAlign: "center", paddingVertical: 6, paddingHorizontal:17, minWidth: 120}}>Apply</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F9F9",
        paddingTop: height * 0.07,
        height,
        padding: 20,
    },
    imageContainer: {
        alignItems: 'flex-end'
    },
    greet: {
        fontSize: 22,
        fontWeight: '700',
        color: '#0D0140',
    },
    banner: {
        backgroundColor: "#130160",
        borderRadius: 6,
        width: "100%",
        height: 143,
        marginTop: 40,
        paddingHorizontal: 18,
        position: "relative"
    },
    bannerText: {
        fontSize: 18,
        fontWeight: "400",
        color: "white"
    },
    bannerImage: {
        position: "absolute",
        right: -40,
        top: 90,
        width: 250,
        height: 200,
        resizeMode: "contain"
    },
    jobtypes: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    remote: {
        backgroundColor: "#AFECFE",
        height: 170,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    fullTime: {
        backgroundColor: "#BEAFFE",
        borderRadius: 6,
        height: 75,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    partTime: {
        backgroundColor: "#FFD6AD",
        borderRadius: 6,
        marginTop: 20,
        height: 75,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})