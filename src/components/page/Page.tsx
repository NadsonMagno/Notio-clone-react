import { View , Text, TouchableOpacity} from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles  } from "./style";
import { colors } from "@/styles/colors";

type Props = {
    
        title: string;

}
export default function Page  ({ title }: Props)  {
    return (
        <View style={styles.container}>
            <Feather name="chevron-right" size={24} color={colors.gray[300]} />
            

            <Feather name="file-text" size={24} color={colors.gray[300]} />

            

            <Text style={styles.title}>{title}</Text>
            
            <TouchableOpacity>
            <Feather name="plus" size={24} color={colors.gray[300]} />
            </TouchableOpacity>

        </View>
    );
};