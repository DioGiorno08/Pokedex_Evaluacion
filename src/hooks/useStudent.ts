import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialStudent = {
  name: "David Eduardo López Miranda",
  carnet: "20240466",
  section: "B",
  group: "1",
};
export type Student = typeof initialStudent;
const KEY = "pokedex.student";

export function useStudent() {
  const [student, setStudent] = useState(initialStudent);
  const [draft, setDraft] = useState(initialStudent);
  const [ready, setReady] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const valid = Object.values(draft).every((value) => value.trim().length > 0);

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (!raw || !active) return;
        const value = JSON.parse(raw);
        if (
          value &&
          Object.keys(initialStudent).every(
            (key) =>
              typeof value[key] === "string" && value[key].trim().length > 0,
          )
        ) {
          setStudent(value);
        }
      })
      .catch(() => {
        if (active) setError("No se pudo leer el perfil guardado.");
      })
      .finally(() => {
        if (active) setReady(true);
      });
    return () => {
      active = false;
    };
  }, []);

  function startEditing() {
    setDraft(student);
    setError("");
    setEditing(true);
  }
  function cancelEditing() {
    if (!saving) setEditing(false);
  }
  function changeField(key: keyof Student, value: string) {
    setDraft((current) => ({ ...current, [key]: value }));
  }
  async function save() {
    if (!valid || saving) return;
    setSaving(true);
    const value = Object.fromEntries(
      Object.entries(draft).map(([key, text]) => [key, text.trim()]),
    ) as Student;
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(value));
      setStudent(value);
      setError("");
      setEditing(false);
    } catch {
      setError("No se pudieron guardar tus datos. Intenta nuevamente.");
    } finally {
      setSaving(false);
    }
  }
  return {
    student,
    draft,
    ready,
    editing,
    saving,
    error,
    valid,
    startEditing,
    cancelEditing,
    changeField,
    save,
  };
}
