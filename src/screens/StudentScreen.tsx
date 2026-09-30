import React from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types";
import { c, s } from "../theme";
import { Brand, Button } from "../components/UI";
import { useStudent } from "../hooks/useStudent";
export function StudentScreen({
  navigation,
}: NativeStackScreenProps<RootStack, "Student">) {
  const {
    student,
    ready,
    error,
    save,
    editing,
    draft,
    saving,
    valid,
    startEditing,
    cancelEditing,
    changeField,
  } = useStudent();
  return (
    <SafeAreaView style={s.page}>
      <ScrollView contentContainerStyle={[s.wrap, { paddingBottom: 36 }]}>
        <View style={s.between}>
          <Text style={[s.section, { color: c.purple }]}>POKÉDEX</Text>
          <Text style={[s.label, { color: c.purple }]}>001 / 002</Text>
        </View>
        <View style={[s.card, { marginTop: 28, alignItems: "center", paddingVertical: 26 }]}>
          <Brand />
          <Text style={[s.body, { marginTop: 14, textAlign: "center" }]}>
            Proyecto Pokédex desarrollado con React Native y Expo.
          </Text>
        </View>
        <Text style={[s.title, { marginTop: 26 }]}>
          Información del estudiante
        </Text>
        <Text style={[s.body, { marginTop: 10, marginBottom: 24 }]}>
          Estos son los datos del estudiante que presenta la aplicación.
        </Text>
        <View style={s.card}>
          <View style={s.between}>
            <Text style={s.section}>Datos del estudiante</Text>
            <Pressable
              accessibilityRole="button"
              disabled={!ready}
              onPress={startEditing}
            >
              <Text style={{ color: c.purple, fontSize: 12, padding: 8 }}>
                Editar
              </Text>
            </Pressable>
          </View>
          <Text style={[s.label, { marginTop: 18 }]}>
            NOMBRE DEL ESTUDIANTE
          </Text>
          <Text style={[s.value, { fontSize: 20, lineHeight: 27 }]}>
            {student.name}
          </Text>
          <View
            style={[
              s.between,
              {
                marginTop: 22,
                borderTopWidth: 1,
                borderColor: c.border,
                paddingTop: 20,
              },
            ]}
          >
            {[
              ["CARNET", student.carnet],
              ["SECCIÓN", student.section],
              ["GRUPO", student.group],
            ].map(([label, value]) => (
              <View key={label}>
                <Text style={s.label}>{label}</Text>
                <Text style={s.value}>{value}</Text>
              </View>
            ))}
          </View>
        </View>
        {error ? (
          <Text style={{ color: c.pink, marginTop: 10 }}>{error}</Text>
        ) : null}
        <View style={{ marginTop: 22 }}>
          <Button
            title="Ver Pokédex   →"
            onPress={() => navigation.navigate("Explore")}
          />
        </View>
        <Text
          style={[s.label, { textAlign: "center", marginTop: 22, fontSize: 9 }]}
        >
          REACT NATIVE + EXPO · EVALUACIÓN PRÁCTICA
        </Text>
      </ScrollView>
      <Modal
        visible={editing}
        transparent
        animationType="fade"
        onRequestClose={cancelEditing}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            flex: 1,
            backgroundColor: "#000B",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          >
            <View style={s.card}>
              <Text style={s.section}>Tu credencial</Text>
              {(Object.keys(draft) as (keyof typeof draft)[]).map((key, i) => (
                <View key={key} style={{ marginTop: 16 }}>
                  <Text style={[s.label, { marginBottom: 8 }]}>
                    {["Nombre", "Carnet", "Sección", "Grupo"][i]}
                  </Text>
                  <TextInput
                    accessibilityLabel={
                      ["Nombre", "Carnet", "Sección", "Grupo"][i]
                    }
                    style={s.input}
                    value={draft[key]}
                    maxLength={key === "name" ? 100 : 24}
                    onChangeText={(value) => changeField(key, value)}
                  />
                </View>
              ))}
              {error ? <Text style={{ color: c.pink }}>{error}</Text> : null}
              <View style={{ marginTop: 20 }}>
                <Button
                  title={saving ? "Guardando…" : "Guardar cambios"}
                  disabled={!valid || saving}
                  onPress={save}
                />
              </View>
              <Pressable
                onPress={cancelEditing}
                style={{ padding: 16, alignItems: "center" }}
              >
                <Text style={s.body}>Cancelar</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}
