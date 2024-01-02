import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    textContainer: {
      flex: 1,
      marginLeft : 10,
    },
    username: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    lastMessage: {
      fontSize: 14,
      color: '#888',
    },
  });

  export default styles; 