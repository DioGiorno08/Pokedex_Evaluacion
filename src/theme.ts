import { StyleSheet } from "react-native";

export const c = {
  bg: "#120D1D",
  panel: "#21172F",
  border: "#3A2A4C",
  text: "#F8F4FF",
  muted: "#B7A8C8",
  purple: "#A77BF3",
  pink: "#E89ACD",
};

export const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: c.bg },
  wrap: { width: "100%", maxWidth: 680, alignSelf: "center", padding: 22 },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  between: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { color: c.text, fontSize: 32, fontWeight: "800" },
  body: { color: c.muted, fontSize: 14, lineHeight: 21 },
  card: {
    backgroundColor: c.panel,
    borderWidth: 1,
    borderColor: c.border,
    borderRadius: 18,
    padding: 18,
  },
  label: {
    color: c.muted,
    fontSize: 10,
    letterSpacing: 1.5,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  number: { color: c.purple, fontSize: 11, fontWeight: "800" },
  value: { color: c.text, fontSize: 16, fontWeight: "700", marginTop: 6 },
  button: {
    backgroundColor: c.purple,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: "center",
  },
  buttonText: { color: "#1D1230", fontWeight: "800", fontSize: 15 },
  input: {
    backgroundColor: c.panel,
    borderWidth: 1,
    borderColor: c.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: c.text,
    fontSize: 15,
  },
  section: { color: c.text, fontSize: 18, fontWeight: "800" },
});
