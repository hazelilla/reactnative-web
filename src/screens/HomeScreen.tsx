import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigate} from 'react-router-dom';
import User from '../assets/svg/user.svg';

type HomeScreenProps = {
  navigation?: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [count, setCount] = useState(0);
  const isWeb = Platform.OS === 'web';
  const navigate = isWeb ? useNavigate() : null;

  // const navigateToDetails = () => {
  //   if (isWeb) {
  //     navigate('/details');
  //   } else {
  //     navigation.navigate('Details');
  //   }
  // };
  const navigateToUiPage = () => {
    if (isWeb) {
      navigate('/uipage');
    } else {
      navigation.navigate('UiPage');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
      <View>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={styles.button}>
          <Text>Click meeeeeeee!</Text>
        </TouchableOpacity>
      </View>

      <Text>You clicked {count} times!</Text>

      {/* <View>
        <TouchableOpacity onPress={navigateToDetails} style={styles.button}>
          <Text>Click to go details!</Text>
        </TouchableOpacity>
      </View> */}

      <View>
        <TouchableOpacity onPress={navigateToUiPage} style={styles.button}>
          <Text>Go to new ui!</Text>
        </TouchableOpacity>
      </View>
      <View>
        <User width={30} height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
});
export default HomeScreen;
