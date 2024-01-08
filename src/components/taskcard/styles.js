import { StyleSheet } from "react-native";
import { kColors } from "../../utils/kColors";

export const styles = StyleSheet.create({
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    backgroundColor: kColors.kWhiteBackground,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    borderColor: kColors.kPrimary,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkbox: {
    width: 30,
    height: 30,
    margin: 15,
  },
  textName: {
    fontSize: 20,
    color: kColors.kText,
  },
  containerCheck: {
    flexDirection: "row",
    alignItems: "center",
  },
});
