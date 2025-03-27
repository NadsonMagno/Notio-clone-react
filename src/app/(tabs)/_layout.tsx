import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabsLayout(){
    return (
        <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.gray[800],
            borderTopColor: colors.gray[400],

          },
          headerShown: false,

          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.gray[100],
          tabBarInactiveTintColor: colors.gray[400],
        


        }}
        
      />
    );
}