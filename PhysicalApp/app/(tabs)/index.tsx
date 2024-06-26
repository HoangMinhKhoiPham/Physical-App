import { Text, View } from "@/components/Themed";
import LogInForm from "@/components/LogInForm";
import { FONT, SIZES } from "../../constants";

export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: SIZES.xxxLarge, fontFamily: FONT.regular }}>
        Smile & Sweat
      </Text>
      <View
        style={{
          marginVertical: 30,
          height: 10,
          width: "80%",
        }}
      />
      <LogInForm />
    </View>
  );
}
