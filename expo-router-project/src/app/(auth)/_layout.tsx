import { Stack } from "expo-router";

export default function AuthLayout() {
  const isLoggedIn = true
  return (
    <Stack.Protected guard={isLoggedIn}>
      <Stack.Screen name='login' options={{ headerShown: false }} />
      <Stack.Screen name='signup' options={{ headerShown: false }} />
    </Stack.Protected>
  );
}