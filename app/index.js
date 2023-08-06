import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import Categories from "../components/Categories";
import Sources from "../components/Sources";
import colors, { colors2, colors3 } from "../constants/colors";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.light3,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 22, fontWeight: 600, color: colors3.light }}
              >
                NewsPiece 📰
              </Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors3.light,
                  padding: 2,
                  borderRadius: 4,
                }}
                onPress={() => router.push(`/news/all`)}
              >
                <Text
                  style={{
                    color: colors3.dark,
                    padding: 2,
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          ),
          headerStyle: { backgroundColor: colors3.dark },
          headerTitleStyle: { color: colors3.light },
        }}
      />
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 500,
              textAlign: "center",
              marginTop: 20,
              fontStyle: "italic",
              color: colors3.light,
            }}
          >
            All the news. All in one place
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TextInput
              placeholder="what are you looking for?"
              style={{
                backgroundColor: colors3.light,
                padding: 10,
                margin: 10,
                borderRadius: 10,
                flex: 1,
              }}
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            ></TextInput>
            <TouchableOpacity
              style={{
                backgroundColor: colors3.dark,
                padding: 2,
                borderRadius: 4,
                margin: 10,
                padding: 10,
              }}
              onPress={() => router.push(`/search/${searchTerm}`)}
            >
              <Text
                style={{
                  color: colors3.dark,
                  padding: 2,
                  fontSize: 16,
                  flex: 0.3,
                }}
              >
                🔍
              </Text>
            </TouchableOpacity>
          </View>
          <Sources />
          <Categories />
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
