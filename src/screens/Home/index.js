import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from "react-native";
import React, { useContext } from "react";
import IconContainer from "../../components/IconContainer";
import Categories from "../../components/Categories";
import Card from "../../components/Card";
import Search from "../../components/SearchButton";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../auth/AuthProvider";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

const Home = () => {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    const renderItem = () => (
        <View style={{ flex: 1 }}>
            <View style={styles.upper}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <IconContainer iconName={"align-left"} />
                    </TouchableOpacity>

                    <Text style={styles.text}>
                        Current Location
                        {"\n"}
                        Accra, Ghana
                    </Text>

                    <IconContainer iconName={"bell"} />
                </View>

                <Text
                    style={[
                        styles.text,
                        {
                            fontFamily: "AlongSansExtraBold",
                            fontSize: 20,
                            color: "white",
                            padding: 20,
                            top: 0,
                        },
                    ]}
                >
                    Where do you want to go?
                </Text>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.cats}>
                        <Categories
                            emoji={require("../../assets/images/globe.png")}
                            detailText="All"
                        />

                        <Categories
                            emoji={require("../../assets/images/mountain.png")}
                            detailText="Mountain"
                        />

                        <Categories
                            emoji={require("../../assets/images/shrine.png")}
                            detailText="Temple"
                        />

                        <Categories
                            emoji={require("../../assets/images/water.png")}
                            detailText="Lake"
                        />
                    </View>
                </ScrollView>
            </View>

            <ScrollView
                bounces={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.middle}>
                    <View style={styles.img}>
                        <Card
                            img={require("../../assets/images/reservoir.jpg")}
                            locName="Bozeman Reservoir"
                            rating={"5.0"}
                            location={"Montana, USA"}
                            detailsPage={() => navigation.navigate("Boseman")}
                        />
                    </View>

                    <View style={styles.img}>
                        <Card
                            img={require("../../assets/images/reservoir2.jpg")}
                            locName="Rajasthan Lake"
                            rating={"5.0"}
                            location={"Rajasthan, India"}
                            detailsPage={() => navigation.navigate("Rajasthan")}
                        />
                    </View>

                    <View style={styles.img}>
                        <Card
                            img={require("../../assets/images/temple2.jpg")}
                            locName="Tian Tan Buddha"
                            rating={"5.0"}
                            location={"Hong Kong, China"}
                            detailsPage={() => navigation.navigate("TianTan")}
                        />
                    </View>

                    <View style={styles.img}>
                        <Card
                            img={require("../../assets/images/mount.jpg")}
                            locName="Sierra Nevada"
                            rating={"5.0"}
                            location={"Nevada, USA"}
                            detailsPage={() =>
                                navigation.navigate("SierraNevada")
                            }
                        />
                    </View>

                    <View style={styles.img}>
                        <Card
                            img={require("../../assets/images/temple.jpg")}
                            locName="Osaka Castle"
                            iconName={"star"}
                            rating={"5.0"}
                            location={"Osaka, Japan"}
                            detailsPage={() => navigation.navigate("Osaka")}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <Search />
            </View>
        </View>
    );

    return (
        <FlatList
            bounces={false}
            style={{ flex: 1, backgroundColor: "black" }}
            data={[1]}
            renderItem={renderItem}
            ListFooterComponent={<View style={{ height: 100 }} />}
        />
    );
};

export default Home;

const styles = StyleSheet.create({
    upper: {
        height: SCREENHEIGHT / 3.5,
        backgroundColor: "black",
    },

    middle: {
        height: SCREENHEIGHT / 1.8,
        flexDirection: "row",
        width: SCREENWIDTH * 4.1,
        backgroundColor: "black",
    },

    bottom: {
        height: 50,
        backgroundColor: "black",
    },

    top: {
        padding: 20,
        justifyContent: "space-between",
        flexDirection: "row",
    },

    text: {
        fontFamily: "AlongSansSemiBold",
        fontSize: 15,
        color: "white",
        top: 10,
    },

    cats: {
        width: SCREENWIDTH * 1.4,
        flexDirection: "row",
        justifyContent: "space-evenly",
        left: 50,
        bottom: 10,
    },

    img: {
        padding: 20,
        backgroundColor: "black",
        width: 300,
        height: 420,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        top: 10,
    },
});
