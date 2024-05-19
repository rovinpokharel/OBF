import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../common/Header";
// import { FlatList, ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import CommonBtn from "../../common/commonBtn";
import { useNavigation } from "@react-navigation/native";

const Booking = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Header title={"Booking"} />
          <Image
            source={require("../../../images/banner.jpeg")}
            style={styles.banner}
          />
          <Text style={styles.heading}>Select Category</Text>
          <View style={{ marginTop: 20 }} />
          <View>
            <FlatList
              data={[
                { id: 1, name: "First FLoor" },
                { id: 2, name: "Second Floor" },
                { id: 3, name: "Rooftop" },
                { id: 4, name: "Balcony" },
              ]}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <LinearGradient
                      colors={["#009FFD", "#2A2A72"]}
                      style={styles.linearGradient}
                    >
                      <Text style={styles.catName}>{item.name}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Tables</Text>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <FlatList
              numColumns={2}
              data={[1, 1, 1, 1, 1, 1]}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.docItem}>
                    <Image
                      source={require("../../../images/table.png")}
                      style={styles.docImg}
                    />
                    <Text style={styles.docName}>Table {index + 1}</Text>
                    <Text style={styles.docSpl}>Seats: 6</Text>
                    <Text
                      style={[
                        styles.status,
                        {
                          color: index / 2 == 0 ? "green" : "red",
                          opacity: index / 2 == 0 ? 1 : 0.5,
                        },
                      ]}
                    >
                      {index / 2 == 0 ? "Available" : "Busy"}
                    </Text>
                    <CommonBtn
                      w={150}
                      h={40}
                      status={index / 2 == 0 ? true : false}
                      txt={"Book Table"}
                      onClick={() => {
                        if (index / 2 == 0) {
                          navigation.navigate("BookTable");
                        }
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Completed");
              }}
            >
              <Image
                source={require("../../../images/completed.png")}
                style={styles.bottomIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Pending");
              }}
            >
              <Image
                source={require("../../../images/pending.png")}
                style={styles.bottomIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Booking;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  catName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  docItem: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "600",
    alignSelf: "center",
    color: "green",
    backgroundColor: "#f2f2f2",
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "600",
    alignSelf: "center",
  },
  bottomView: {
    width: "90%",
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 20,
    backgroundColor: "#fff",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom:50,
  },
  bottomIcon: {
    width: 30,
    height: 30,
  },
});
