import React from "react";
import { Pressable, Text, View } from "react-native";
import { c, s } from "../theme";
import { MasterBall } from "./Artwork";

export function Brand() {
  return (
    <View style={s.row}>
      <MasterBall size={34} />
      <View>
        <Text style={{ color: c.text, fontSize: 17, fontWeight: "800" }}>
          Mi Pokédex
        </Text>
        <Text style={{ color: c.muted, fontSize: 11, marginTop: 2 }}>
          Pokémon en estilo morado
        </Text>
      </View>
    </View>
  );
}

export function Button({
  title,
  onPress,
  disabled = false,
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        s.button,
        { opacity: disabled ? 0.4 : pressed ? 0.75 : 1 },
      ]}
    >
      <Text style={s.buttonText}>{title}</Text>
    </Pressable>
  );
}

export function Back({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Volver"
      onPress={onPress}
      style={{ paddingVertical: 12, paddingRight: 20 }}
    >
      <Text style={{ color: c.purple, fontSize: 14, fontWeight: "700" }}>
        ← Volver
      </Text>
    </Pressable>
  );
}
