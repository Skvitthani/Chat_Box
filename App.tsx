import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {YMChat} from 'ymchat-react-native';

const App = () => {
  const onPress = () => {
    const token = 'x1704718358639';
    YMChat.setBotId('x1704718358639');
    YMChat.setDeviceToken(token);
    YMChat.startChatbot();
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Button title="Start Chat" onPress={onPress} color={'black'} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
