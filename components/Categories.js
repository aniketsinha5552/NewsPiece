import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import colors,{colors2,colors3} from "../constants/colors";

export const giveMeEmoji = (cat) => {
  switch (cat) {
    case "Business":
      return "💼";
    case "Entertainment":
      return "🎭";
    case "General":
      return "📰";
    case "Health":
      return "🏥";
    case "Science":
      return "🔬";
    case "Sports":
      return "🏀";
    default:
      return "📰";
  }
};

export default function Categories() {
  const router = useRouter();
  const categoryList = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
  ];

  return (
    <SafeAreaView>
      <Text style={headingStyle}>
        Categories
      </Text>
      <FlatList
        data={categoryList}
        renderItem={({ item }) => (
          // <TouchableOpacity onPress={() => router.push(`/news/${item}`)}>
          <TouchableOpacity onPress={() => router.push(`/news/all`)}>
            <View style={categoryStyle}>
              <Text style={{ fontSize: 50 }}>{giveMeEmoji(item)}</Text>
              <Text style={{ fontSize: 20 }}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        horizontal={true}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
}

// styles
const categoryStyle= {
  height: 150,
  margin: 10,
  width: 150,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors2.light,
  borderWidth: 0,
}

const headingStyle = {
  fontSize: 23,
  fontWeight: "500",
  marginLeft: 15,
  marginTop: 20,
  width:200,
  padding: 1,
  backgroundColor: colors.light2,
  borderWidth: 0,
  borderColor: "grey",
  borderRadius: 5,
  textAlign: "center",
  color: colors3.light,
}
