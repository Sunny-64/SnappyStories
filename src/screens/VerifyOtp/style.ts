// style.js
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { PURPLE_ACCENT } from "../../constants/colors";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        paddingVertical: 4,
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
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign : 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    inputField: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    button: {
        backgroundColor: PURPLE_ACCENT,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom : 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        minWidth: 100,
    },
    content: {
        // borderWidth : 1,
        // height : height * 0.6,
        flex : 1,
        marginTop: 40,
        justifyContent : 'space-between',
    },
    otpContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        // borderWidth : 1,
    },
    box: {
        borderWidth: 1,
        borderColor: 'black',
        width: 40,
        height: 50,
        // margin: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    resendOtpContainer : {
        flexDirection : 'row',
        marginTop : 20,
        justifyContent : 'center',
    }, 
    timer : {
        textAlign : 'center',
        marginTop : 5
    },
    counter : {
        color : PURPLE_ACCENT
    }
});

export default styles;
