import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Pokemon } from "../types";
import { c, s } from "../theme";

export function PokemonCard({
  pokemon,
  onPress,
}: {
  pokemon: Pokemon;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Ver detalles de ${pokemon.name}`}
      onPress={onPress}
      style={({ pressed }) => [
        s.card,
        {
          flex: 1,
          padding: 14,
          opacity: pressed ? 0.75 : 1,
        },
      ]}
    >
      <Text style={s.number}>#{String(pokemon.id).padStart(3, "0")}</Text>
      <Image
        source={{ uri: pokemon.image }}
        accessibilityLabel={pokemon.name}
        style={{ width: "100%", aspectRatio: 1, resizeMode: "contain" }}
      />
      <Text numberOfLines={1} style={[s.value, { fontSize: 16, marginTop: 4 }]}> 
        {pokemon.name}
      </Text>
      <Text style={{ color: c.muted, fontSize: 12, marginTop: 5 }}>
        {pokemon.types.join(" · ")}
      </Text>
    </Pressable>
  );
}
