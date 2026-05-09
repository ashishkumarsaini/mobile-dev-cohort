import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function Home() {
  const [name, setName] = useState('');
  return (
    <View
      style={{
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

      }}
    >
      <Text numberOfLines={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at
        doloribus explicabo, voluptatibus amet, non facere deleniti expedita
        voluptatem similique assumenda nihil error laborum adipisci aperiam
        totam, molestias odio officiis? Dolorum blanditiis ullam officiis? Optio
        doloremque quia repellendus explicabo, velit accusantium expedita
        recusandae consequatur eius illum non repellat nisi temporibus
        consectetur pariatur magni voluptates quia quibusdam, autem sed. Quo,
        dolor!
      </Text>
      <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1764177093408-35da6bb58738?w=900&auto=format&fit=crop" }} width={200} height={150} />
      <Image source={require('@/assets/images/icon.png')} style={{ height: 100, width: 100, borderRadius: 20, marginTop: 10 }} />
      <TextInput placeholderTextColor={"green"} placeholder="enter name" value={name} onChangeText={setName} style={{ height: 40, borderColor: "green", borderWidth: 1, borderRadius: 10, padding: 10, marginTop: 10 }} />
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "lightgreen" : "green",
          padding: 10,
          borderRadius: 10,
          marginTop: 10
        })}
        onPress={() => {
          alert(`Hello ${name}`);
        }}
      >
        {
          ({ pressed }) => <Text style={{ color: pressed ? "green" : "lightgreen", fontSize: 16 }}>Say Hello</Text>
        }

      </Pressable>
    </View>
  );
}