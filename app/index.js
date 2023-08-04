import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import Categories from "../components/Categories";
import Sources from "../components/Sources";
import colors,{colors2,colors3} from "../constants/colors";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={{backgroundColor:colors.light3,height:Dimensions.get("window").height}}>
      <Stack.Screen
        options={{
          headerTitle: "NewsPiece 🗞️",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{backgroundColor:colors3.light,padding:2,borderRadius:4}} onPress={()=> router.push(`/news/all`)}>
                <Text style={{color:colors3.dark}}>View All</Text>
              </TouchableOpacity>
            </View>          
          ),
          headerStyle : {backgroundColor:colors3.dark},
          headerTitleStyle : {color:colors3.light},
        }}
      />
      <ScrollView >
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 500,
              textAlign: "center",
              marginTop: 20,
              fontStyle: "italic",
              color:colors3.light,
            }}
          >
            All the news. All in one place
          </Text>
          <Categories />
          <Sources />
        </View>
        <View style={{ justifyContent:"center",alignItems:"center" }}>
        <Text style={{ fontSize: 20, fontWeight: 600, color:colors2.light, }}>
          &#169; NewsPiece
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
