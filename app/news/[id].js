import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { Stack, useSearchParams } from "expo-router";
import React, { useEffect } from "react";
import NewsCard from "../../components/NewsCard";
import { giveMeEmoji } from "../../components/Categories";
import Carousel from "react-native-snap-carousel";
import colors, { colors2,colors3 } from "../../constants/colors";
import { useState } from "react";
import axios from "axios";


const NewPage = () => {
  const params = useSearchParams();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [news,setNews] = useState([])
  const getNewsData = async () => {
    try{
      let url = `http://192.168.29.46:5000/news/${params.id}`
      let res = await axios.get(url)
      setNews(res.data)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getNewsData()
  },[])
  return (
    <SafeAreaView style={{backgroundColor:colors.light3,height:windowHeight}}>
      <Stack.Screen
        options={{
          headerTitle: `Discover ${giveMeEmoji(params.id)}`,
          headerStyle: { backgroundColor: colors3.dark },
          headerTitleStyle: { color: colors2.light },
        }}
      />
          {news.length ?(
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
        <FlatList 
        data={news}
        key={(item)=>item.title}
        renderItem={({ item }) => <NewsCard item={item} />}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        />

        <Text style={{ fontSize: 15, fontWeight: 400, color: colors.light,fontStyle:"italic"}}>
          Swipe to see more
        </Text>
      </View>
        ):(
          <View style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            justifyContent: "center",
            height: windowHeight * 0.8,
            marginBottom: 20,
          }}>
            <Text style={{fontSize:20,fontWeight:500,color:colors.light}}>Loading...</Text>
          </View>
        )}

      <View style={{ justifyContent:"center",alignItems:"center" }}>
        <Text style={{ fontSize: 20, fontWeight: 600, color: colors.light}}>
          &#169; NewsPiece
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NewPage;
