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

export default function Sources() {
  const router = useRouter();
  const SourcesList = [
     {
      name:"toi",
      img:"https://play-lh.googleusercontent.com/AS0Z1xkuhveb3IXzYASn52nhlFDIwcEmu1XmewVDZ39R8fZrQ13wldCy2nbjx9Aa1WCS"
     },
     {
      name:"thehindu",
      img:"https://media.licdn.com/dms/image/C4E0BAQHpFmRv_tytvg/company-logo_200_200/0/1543304177527?e=2147483647&v=beta&t=nzXAa1723j1rifuRNuKWp9qwGsLrnf7AVoqExDY1DS4"
     },{
      name:"cnn",
      img:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png?20150626194629"
     },{
      name:"aljazeera",
      img:"https://static.timesofisrael.com/www/uploads/2013/01/jazeera.jpg"
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
              <Image source={{uri:item.img}} style={{width:"100%",height:"100%"}}/>
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
  backgroundColor: colors2.light,
  height: 160,
  margin: 10,
  width: 160,
  borderRadius: 15,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
}