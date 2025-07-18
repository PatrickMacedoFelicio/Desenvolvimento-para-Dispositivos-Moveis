import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MapScreen() {
  const mapsURL = Platform.select({
    ios: 'https://www.google.com/maps/search/pet+shop+perto+de+mim/',
    android: 'https://www.google.com/maps/search/pet+shop+perto+de+mim/',
    web: 'https://www.google.com/maps/search/pet+shop+perto+de+mim/',
  });

  return (
    <View style={styles.container}>
      <WebView source={{ uri: mapsURL }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
