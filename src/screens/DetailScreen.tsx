import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types";
import { c, s } from "../theme";
import { Back } from "../components/UI";

export function DetailScreen({
  navigation,
  route,
}: NativeStackScreenProps<RootStack, "Detail">) {
  const { pokemon } = route.params;

  return (
    <SafeAreaView style={s.page}>
      <ScrollView contentContainerStyle={s.wrap}>
        <View style={s.between}>
          <Back onPress={() => navigation.goBack()} />
          <Text style={s.number}>#{String(pokemon.id).padStart(3, "0")}</Text>
        </View>

        <View style={[s.card, { marginTop: 12, alignItems: "center" }]}> 
          <Image
            source={{ uri: pokemon.image }}
            accessibilityLabel={pokemon.name}
            style={{ width: "100%", height: 260, resizeMode: "contain" }}
          />
        </View>

        <Text style={[s.title, { marginTop: 24 }]}>{pokemon.name}</Text>
        <Text style={[s.body, { marginTop: 6 }]}>Tipo: {pokemon.types.join(" / ")}</Text>

        <View style={[s.card, { marginTop: 22, gap: 18 }]}> 
          <View>
            <Text style={s.label}>ALTURA</Text>
            <Text style={s.value}>{(pokemon.height / 10).toFixed(1)} m</Text>
          </View>
          <View>
            <Text style={s.label}>PESO</Text>
            <Text style={s.value}>{(pokemon.weight / 10).toFixed(1)} kg</Text>
          </View>
          <View>
            <Text style={s.label}>HABILIDAD</Text>
            <Text style={s.value}>{pokemon.ability}</Text>
          </View>
        </View>

        <Text style={[s.label, { textAlign: "center", marginVertical: 24 }]}> 
          POKÉDEX · REACT NATIVE + EXPO
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
