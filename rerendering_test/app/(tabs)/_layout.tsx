import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function TabLayout() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num5, setNum5] = useState(0);
  const [num6, setNum6] = useState(0);
  const [num7, setNum7] = useState(0);
  const [num8, setNum8] = useState(0);
  const [num9, setNum9] = useState(0);
  const [num10, setNum10] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNum1((prev) => prev + 1);
      setNum2((prev) => prev + 1);
      setNum3((prev) => prev + 1);
      setNum4((prev) => prev + 1);
      setNum5((prev) => prev + 1);
      setNum6((prev) => prev + 1);
      setNum7((prev) => prev + 1);
      setNum8((prev) => prev + 1);
      setNum9((prev) => prev + 1);
      setNum10((prev) => prev + 1);
    }, 10);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{num1}</Text>
      <Text>{num2}</Text>
      <Text>{num3}</Text>
      <Text>{num4}</Text>
      <Text>{num5}</Text>
      <Text>{num6}</Text>
      <Text>{num7}</Text>
      <Text>{num8}</Text>
      <Text>{num9}</Text>
      <Text>{num10}</Text>
    </View>
  );
}
