import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles  } from "./style";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
    data:{
        id: string,
        title: string,
        cover?: string,
    }
}
export default function Recent ({data}: Props)  {
    return (
        
            <TouchableOpacity style={styles.container} activeOpacity={0.7}>
                <Image style={styles.cover} source={{uri: data.cover}}/>
                
                
                <View style={styles.content}>

                    <Feather name="file-text" size={24} color={colors.gray[300]}  style={styles.icon}/>

                    <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
                </View>

              

        
        </TouchableOpacity>
    );
};