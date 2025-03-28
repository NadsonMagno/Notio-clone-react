
import{ DATA } from "@/utils/data";
import Header from "@/components/header/Header";
import RecentList from "@/components/recent_list/RecentList";
import { View, Text , ScrollView} from "react-native";
import PageList from "@/components/page_list/PageList";

export default function Index(){
    return(
        <View style={{ paddingTop: 10}}>
            <Header />
            
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 24, paddingBottom: 100}}
            >
            <RecentList data={DATA.RECENT} />
            <PageList data={DATA.PAGES}/>
            </ScrollView>
        </View>
    )
}