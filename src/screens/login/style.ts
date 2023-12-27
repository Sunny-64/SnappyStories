import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { PURPLE_ACCENT } from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
    },
  
    logo: {
        width: width * 0.7,
        height: height * 0.2,
    },
    titleContainer: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color : '#000000'
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
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signupText: {
        marginTop: 20,
        color: PURPLE_ACCENT,
        fontSize: 16,
    },
    forgotPasswordTxt: {
        textAlign: 'right',
        marginTop: 5
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
        minWidth: 15
    },
    continueWithTxt: {
        fontSize: 17,
        color: '#000000'
    },
    oauthContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        width : '100%',
    },
    oauthIconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10
    },
    oauthIcon: {
        padding: 10,
        borderRadius: 8,
    },
});

export default styles;