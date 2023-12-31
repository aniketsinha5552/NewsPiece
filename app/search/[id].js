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
  import { newsRequest } from "../../requests";
  
  
  const SearchPage = () => {
    const params = useSearchParams();
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const [news,setNews] = useState([])
    const getNewsData = async () => {
      try{
        let res = await newsRequest.post('/search',{
            search:params.id
        })
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
            headerTitle: `Search Results for ${params.id}`,
            headerStyle: { backgroundColor: colors3.dark },
            headerTitleStyle: { color: colors2.light },
          }}
        />
    {news.length ?(
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          justifyContent: "center",
          // height: windowHeight * 0.9,
          marginBottom: 10,
        }}
      >
        <Carousel
          data={news}
          renderItem={({ item }) => <NewsCard item={item} />}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          layout={"tinder"}
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
  
  export default SearchPage;
  