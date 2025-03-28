import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap:12,

    },
    title:{
        color: colors.gray[300],
        flex: 1,
        fontSize: 16,

    }, 
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        padding: 16,
    },

    list:{
        marginTop: 16,
        backgroundColor: colors.gray[700],
        borderRadius: 8,
    },
    separator:{
        height: 1,
        marginLeft: 42,
        backgroundColor: colors.gray[500],
    }
});