import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import colors,{colors3,colors2} from "../constants/colors";
const thehinduLogo = require("../assets/news_sources/thehindu.jpeg");
const cnnLogo = require("../assets/news_sources/cnn.png");
const indianexpressLogo = require("../assets/news_sources/indianexpress.png");
const aljazeeraLogo = require("../assets/news_sources/aljazeera.jpg");

export default function Sources() {
  const router = useRouter();
  const SourcesList = [
     {
      name:"thehindu",
      img: thehinduLogo
     },{
      name:"cnn",
      img: cnnLogo
     },
     {
      name:"indianexpress",
      img: indianexpressLogo
     },
     {
      name:"aljazeera",
      img: aljazeeraLogo
     }
  ];

  return (
    <SafeAreaView>
      <Text style={headingStyle}>
        News Sources
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {SourcesList.map((item,idx) => (
          <TouchableOpacity onPress={() => router.push(`/news/${item.name}`)} key={idx}>
            <View style={cardStyle}  >
              <Image source={item.img} style={{width:"100%",height:"100%"}}/>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}


// styles
const headingStyle= {
  fontSize: 23,
  fontWeight: "500",
  marginLeft: 15,
  marginTop: 20,
  width: 200,
  padding: 1,
  backgroundColor: colors.light2,
  borderWidth: 0,
  borderColor: "grey",
  borderRadius: 5,
  textAlign: "center",
  color: colors3.light,
  marginBottom: 10,
}

const cardStyle={
  backgroundColor: "white",
  height: 160,
  margin: 10,
  width: 160,
  borderRadius: 15,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
}