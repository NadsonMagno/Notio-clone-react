
import{ DATA } from "@/utils/data";
import Header from "@/components/header/Header";
import RecentList from "@/components/recent_list/RecentList";
import { View, Text } from "react-native";

export default function Index(){
    return(
        <View style={{ paddingTop: 10}}>
            <Header />
            <RecentList data={DATA.RECENT} />
        </View>
    )
}