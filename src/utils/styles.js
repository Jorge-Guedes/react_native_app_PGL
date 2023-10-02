import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.darkGray,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      backgroundColor: colors.white,
      flex: 1,
      flexDirection: "column",
    },
    imageContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: 200,
      resizeMode: "contain",
      marginBottom: 20,
    },
    title: {
      textAlign:"center",
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 5,
      marginBottom:20,
    },
    modalContainer: {
      flex:1,
      backgroundColor:"white",
      padding: 14,
    },
    tag: {
      marginTop: 5,
      marginBottom: 20,
      color:colors.darkGreen
    },
    tagContainer: {
      flexDirection:"row",
    },
    tagTitle:{
      fontWeight:"bold",
    }
  });
  