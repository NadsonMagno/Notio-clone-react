import { View, TouchableOpacity, Image } from "react-native";
import { styles  } from "./style";
import React from "react";
import { Feather } from "@expo/vector-icons";

type Props = {
    data:{
        id: string,
        title: string,
        cover?: string,
    }
}
export default function Recent ({data}: Props)  {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Image style={styles.cover} source={{uri: data.cover}}/>
            </TouchableOpacity>
               
        <View style={styles.content}>

            <Feather name="file-text" size={24} color="black" />
        </View>

        </View>
    );
};