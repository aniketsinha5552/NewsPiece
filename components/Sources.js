import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import colors,{colors3,colors2} from "../constants/colors";

export default function Sources() {
  const router = useRouter();
  const SourcesList = [
    "The Times of India",
    "The Hindu",
    "The Indian Express",
    "Hindustan Times",
    "CNN",
    "BBC",
    "Al Jazeera",
  ];
  const giveMeEmoji = (cat) => {
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
    }
  };
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
          <TouchableOpacity onPress={() => router.push(`/news/${item}`)} key={idx}>
            <View style={cardStyle}  >
              {/* <Text style={{fontSize:50}}>{giveMeEmoji(item)}</Text> */}
              <Text style={{ fontSize: 20 }}>{item}</Text>
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
}

const cardStyle={
  backgroundColor: colors2.light,
  height: 160,
  margin: 10,
  width: 160,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
}