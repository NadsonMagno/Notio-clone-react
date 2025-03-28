import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles  } from "./style";
import { colors } from "@/styles/colors";
import Page from "../page/Page";

type Props = {
    data: {
        title: string;
        id: string;
    }[];
}
export default function PageList  ({ data }: Props)  {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Privado</Text>
                <TouchableOpacity>
                    <Feather name="more-horizontal" size={24} color={colors.gray[300]} />
                </TouchableOpacity >
                <TouchableOpacity>
                    <Feather name="plus" size={24} color={colors.gray[300]} />
                </TouchableOpacity >
            </View>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Page title={item.title}/>}
            showsVerticalScrollIndicator={false}
            style={styles.list}
            ItemSeparatorComponent={()=><View style={styles.separator} />}
            scrollEnabled={false}

            />
        </View>
    );
};