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
        // textAlign : 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign : 'justify',
        
    },
    inputField: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius : 8,
    },
    button: {
        backgroundColor: PURPLE_ACCENT,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        minWidth : 100,
    },
    content: {
        marginTop : 40
    },
});

export default styles;
