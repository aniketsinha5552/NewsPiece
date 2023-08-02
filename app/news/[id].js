import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Stack, useSearchParams } from "expo-router";
import React from "react";
import NewsCard from "../../components/NewsCard";
import { giveMeEmoji } from "../../components/Categories";
import Carousel from "react-native-snap-carousel";
import colors, { colors2,colors3 } from "../../constants/colors";

const dummyNewsData = [
  {
    img: "https://static.toiimg.com/thumb/msid-102308586,imgsize-86498,width-400,resizemode-4/102308586.jpg",
    title: "SC summons Manipur DGP, slams 'tardy probe' in violence cases",
    url: "https://timesofindia.indiatimes.com/india/complete-break-down-of-constitutional-machinery-sc-lashes-out-at-manipur-government-over-ethnic-violence/articleshow/102308560.cms",
    type: "General",
    source: "The Times of India",
  },
  {
    img: "https://static.toiimg.com/thumb/msid-102306884,imgsize-29400,width-400,resizemode-4/102306884.jpg",
    title: "Lok Sabha to take up discussion on no-confidence motion from",
    url: "https://timesofindia.indiatimes.com/india/lok-sabha-to-take-up-discussion-on-no-confidence-motion-from-august-8-to-10/articleshow/102303896.cms",
    type: "General",
    source: "The Hindu",
  },
];

const NewPage = () => {
  const params = useSearchParams();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView style={{backgroundColor:colors.light3,height:windowHeight}}>
      <Stack.Screen
        options={{
          headerTitle: `Discover ${giveMeEmoji(params.id)}`,
          headerStyle: { backgroundColor: colors3.dark },
          headerTitleStyle: { color: colors2.light },
        }}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          justifyContent: "center",
          height: windowHeight * 0.8,
          marginBottom: 20,
        }}
      >
        <Carousel
          data={dummyNewsData}
          renderItem={({ item }) => <NewsCard item={item} />}
          sliderWidth={windowWidth}
          itemWidth={0.9 * windowWidth}
          layout="stack"
          layoutCardOffset={18}
        />
        <Text style={{ fontSize: 15, fontWeight: 400, color: colors.light,fontStyle:"italic"}}>
          Swipe to see more
        </Text>
      </View>

      <View style={{ justifyContent:"center",alignItems:"center" }}>
        <Text style={{ fontSize: 20, fontWeight: 600, color: colors.light}}>
          &#169; NewsPiece
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NewPage;
