import {Dimensions, StyleSheet} from 'react-native'
import { PURPLE_ACCENT } from '../../constants/colors';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.8,
    height: height * 0.3,
    marginBottom: height * 0.001,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign : 'center'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: height * 0.35,
  },
  nextButton: {
    backgroundColor: PURPLE_ACCENT,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign : 'center'
  },
  introduction : {
      paddingHorizontal : width * 0.1,
      display : 'flex', 
      justifyContent : 'center'
  }
});

export default styles; 