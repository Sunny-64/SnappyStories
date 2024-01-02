import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { PURPLE_ACCENT } from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical : 5
    },

    backHandler: {
      flexDirection: 'row',
      marginRight: 'auto'
  },
  logoContainer: {
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  logo: {
      width: width * 0.4,
      height: height * 0.1,
      marginRight: 'auto'
  },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    backButton: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
    },
    userInfo: {
      flexDirection: 'row',
      marginRight : 'auto',
      alignItems : 'center',
      justifyContent : 'space-around',
      width : '40%'
    },
    userImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    username: {
      fontSize: 16,
      fontWeight: 'bold',
      minWidth : 80,
      textAlign : 'left'
    },
    body: {
      flex: 1,
    },
    messageContainer: {
      backgroundColor: '#e0e0e0',
      padding: 10,
      marginVertical: 5,
      maxWidth: '80%',
      borderRadius: 10,
    },
    messageText: {
      fontSize: 16,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    sendButton: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
    },
    sendButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  export default styles; 