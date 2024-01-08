import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  img: {
    height: height * 0.2,
    width: width
  },
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'blue'
  },
  indicatorsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    gap: 20
  },
  activeIndicator: {
    backgroundColor: 'red',
    height: 10,
    width: 10,
    borderRadius: 5,
  }
});

export default styles; 