import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container : {
        paddingHorizontal: width * 0.05,
        paddingVertical: 8,
    },
    logoContainer: {
        marginBottom: 8,
        marginTop : 8,
        flexDirection : 'row',
        alignItems :'center', 
        width : '100%', 
    },
    avatar : {
        marginRight : 10,
    },
    backHandler : {
        width : '10%',
    },
   
    title : {
        fontWeight :'bold', 
        fontSize : 18
    },
    titleContainer : {
        width : '80%',
        flexDirection : 'row', 
        justifyContent :'center',
        // borderWidth : 1,
    }, 

}); 

export default styles; 