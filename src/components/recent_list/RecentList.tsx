import { View, Text, FlatList } from "react-native";
import { styles  } from "./style";
import Recent from "../recent/Recent";
type Props = {
    // Prop types go here
    data: {
        id: string,
        title: string,
        cover?: string,
    }[]
};
export default function RecentList  ({data}: Props)  {
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recent List</Text>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Recent data={item}/>}
            />
        </View>
    );
};