
import { View, Text } from "react-native";
import { colors } from "@/styles/colors";

export default function Search(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',  }}>
            <Text style={{color: colors.white}}>Search</Text>
        </View>
    )
}