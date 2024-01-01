import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 10,
    },
    cardContainer: {
        flex : 1,
        flexDirection  : 'row',
        marginVertical: 7,
        marginHorizontal : 5,
        gap : 5,
        backgroundColor:'#ffffff',
        paddingVertical : 3,
        paddingHorizontal : 5,
        maxWidth : '47%',
        borderRadius : 8,
        elevation : 10,
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    username: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign : 'center'
    },
    buttonContainer: {
        flex : 1,
        justifyContent : 'space-between',
        alignItems : 'flex-start',
        borderColor : 'red',
        // borderWidth : 1,
    },
    followButton: {
        marginTop : 3,
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
    messageButton: {
        backgroundColor: '#2ecc71',
        paddingHorizontal: 5,
        paddingVertical : 10,
        borderRadius: 5,
        width : '100%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        width : '100%',
        minWidth : 50,
        textAlign :'center',
    },
    imgAndUsernameContainer : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-around',
    }
});

export default styles;