import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import React from "react";
import colors, { colors2,colors3} from "../constants/colors";

const NewsCard = ({ item }) => {
  const windowWidth = Dimensions.get("window").width;
  let windowHeight = Dimensions.get("window").height;
  windowHeight = 0.8 * windowHeight;
  return (
    <View
      style={{
        height: windowHeight,
        alignItems: "center",
        backgroundColor: colors.dark,
        borderWidth: 0,
        borderColor: "white",
        marginBottom: 20,
        borderRadius: 20,
        overflow: "hidden",
        width: windowWidth*0.95,
        marginLeft: 10,
        marginRight: 10,
        borderWidth:4,
        borderColor:colors2.dark,
      }}
    >
      <Image
        source={{ uri: item.img }}
        style={{
          width: windowWidth,
          height: windowHeight / 2.5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
        }}
      />
        <Text
        style={{
          fontSize: 20,
          fontStyle:"italic",
          fontWeight: "600",
          margin: 10,
          color: colors3.light3,
        }}
      >
        {item.source}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          margin: 10,
          color: colors.light,
          overflow :"scroll",
          maxHeight:windowHeight/3,
        }}
      >
        {item.title}
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL(item.url)}
        style={{ position: "absolute", bottom: 0 }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            backgroundColor: "#72A0C1",
            color: colors.light,
            padding:10,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            width:windowWidth,
            textAlign:"center",

          }}
        >
          Read More
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsCard;
