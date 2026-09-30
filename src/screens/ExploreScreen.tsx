import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types";
import { c, s } from "../theme";
import { Back, Brand, Button } from "../components/UI";
import { PokemonCard } from "../components/PokemonCard";
import { usePokemon } from "../hooks/usePokemon";

export function ExploreScreen({
  navigation,
}: NativeStackScreenProps<RootStack, "Explore">) {
  const [query, setQuery] = useState("");
  const data = usePokemon(query);

  return (
    <SafeAreaView style={s.page}>
      <FlatList
        data={data.loading ? [] : data.pokemon}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={[s.wrap, { paddingBottom: 32 }]}
        columnWrapperStyle={{ gap: 12, marginBottom: 12 }}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <View style={s.between}>
              <Back onPress={() => navigation.goBack()} />
              <Text style={s.number}>POKÉDEX</Text>
            </View>

            <View style={{ marginTop: 8, marginBottom: 26 }}>
              <Brand />
            </View>

            <Text style={s.title}>Pokémon</Text>
            <Text style={[s.body, { marginTop: 8, marginBottom: 18 }]}> 
              Una Pokédex sencilla con algunos Pokémon conocidos.
            </Text>

            <TextInput
              accessibilityLabel="Buscar Pokémon por nombre"
              placeholder="Buscar Pokémon..."
              placeholderTextColor={c.muted}
              style={s.input}
              value={query}
              onChangeText={setQuery}
              autoCorrect={false}
            />

            <View style={[s.between, { marginVertical: 20 }]}> 
              <Text style={s.section}>Lista</Text>
              {!data.loading && !data.error ? (
                <Text style={s.label}>{data.total} Pokémon</Text>
              ) : null}
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            onPress={() => navigation.navigate("Detail", { pokemon: item })}
          />
        )}
        ListEmptyComponent={
          <View style={[s.card, { alignItems: "center", paddingVertical: 36 }]}> 
            {data.loading ? (
              <>
                <ActivityIndicator size="large" color={c.purple} />
                <Text style={[s.body, { marginTop: 12 }]}>Cargando Pokémon...</Text>
              </>
            ) : data.error ? (
              <>
                <Text style={[s.body, { textAlign: "center", marginBottom: 16 }]}> 
                  {data.error}
                </Text>
                <Button title="Reintentar" onPress={data.refresh} />
              </>
            ) : (
              <Text style={s.body}>No se encontró ese Pokémon.</Text>
            )}
          </View>
        }
        ListFooterComponent={
          !data.loading && !data.error ? (
            <Text style={[s.label, { textAlign: "center", marginTop: 22 }]}> 
              POKÉDEX · REACT NATIVE + EXPO
            </Text>
          ) : null
        }
      />
    </SafeAreaView>
  );
}
