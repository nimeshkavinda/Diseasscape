import React, { useState } from "react";
import AppStack from "./src/navigation";
import AppLoading from "expo-app-loading";
import useFonts from "./src/hooks/useFonts";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={(err) => {
          console.log(err.message);
        }}
      />
    );
  }

  return <AppStack />;
}
