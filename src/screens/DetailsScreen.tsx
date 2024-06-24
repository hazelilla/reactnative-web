import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';

const DetailsScreen: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const startVideo = async () => {
    if (Platform.OS === 'web') {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setStream(mediaStream);
      } catch (err) {
        console.error('Error accessing camera and microphone:', err);
        setError('Error accessing camera and microphone');
      }
    } else {
      if (Platform.OS === 'ios') {
        const result = await request(PERMISSIONS.IOS.CAMERA);
        return result;
      } else if (Platform.OS === 'android') {
        const result = await request(PERMISSIONS.ANDROID.CAMERA);
        return result;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Details Screen </Text>
      <View>
        <TouchableOpacity onPress={startVideo} style={styles.button}>
          <Text>Permission Test Button!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
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
export default DetailsScreen;
