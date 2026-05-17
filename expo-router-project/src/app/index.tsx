import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={'/profile/details'}>About Screen</Link>
      <Link href={'/profile/1'}>User 1</Link>
      <Link href={'/docs/react/getting-started/introduction'}>Learn React Intro</Link>
      <Link href={'/nested/about'}>Nested About</Link>
      <Link href={'/nested/profile/1'}>Nested User 1</Link>
      <Link href={'/nested/deep/link'}>Nested Deep Link</Link>
      <Link href={'/nested/deep/link/1'}>Nested Deep Link 1</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
