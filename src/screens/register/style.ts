import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { PURPLE_ACCENT } from "../../constants/colors";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.05,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },  
    backHandler : {
        flexDirection : 'row',
        marginRight : 'auto'
    },
    logoContainer: {
        marginTop : 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems : 'center'
    },
    logo: {
        width: width * 0.4,
        height: height * 0.1,
        marginRight  : 'auto'
    },
  
    horizontalLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
    },
    orText: {
        marginHorizontal: 10,
        // color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        minWidth : 15
    },
    formContainer: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    button: {
        backgroundColor: PURPLE_ACCENT,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    loginText: {
        marginVertical: 20,
        color: PURPLE_ACCENT,
        fontSize: 16,
        textAlign: 'center'
    },
    continueWithTxt : {
        fontSize : 17,
        color : '#000000'
    },
    oauthContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent : 'space-between',
        // borderWidth : 1,
    },
    oauthIconContainer : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        gap : 10
    },
    oauthIcon: {
        padding: 10,
        borderRadius: 8,
    },
    errorMsgContainer : {
        flexDirection : 'row', 
        justifyContent : 'space-between'
    }, 
    errorMsgText : {
        color : 'red',
    }
});

export default styles; 