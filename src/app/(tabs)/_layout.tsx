import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabsLayout(){
    return (
        <Tabs
       /*  sceneContainerStyle={{
          backgroundColor: colors.gray[800],
      }} */
        screenOptions={{
          sceneStyle: {
            backgroundColor: colors.gray[800],
          },
          tabBarStyle: {
            backgroundColor: colors.gray[800],
            borderTopColor: colors.gray[400],

          },
          headerShown: false,

          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.gray[100],
          tabBarInactiveTintColor: colors.gray[400],
        


        }}
        
        
      >
        <Tabs.Screen
         name="index"
         options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
         }}/>

        <Tabs.Screen
                  name="search"
                  options={{
                    tabBarIcon: ({ color, size }) => <Feather name="search" size={size} color={color} />,
                  }}/>

        <Tabs.Screen
                  name="notification"
                  options={{
                    tabBarIcon: ({ color, size }) => <Feather name="inbox" size={size} color={color} />,

                    tabBarBadge: 3,
                  }}
                  
                  />

        <Tabs.Screen
                  name="edit"
                  options={{
                    tabBarIcon: ({ color, size }) => <Feather name="edit" size={size} color={color} />,
                  }}/>
        </Tabs>

        

        
    );
}