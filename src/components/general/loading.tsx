import { View } from 'native-base';
import React from 'react';
import { ActivityIndicator, Text } from 'react-native';

function Loading({ loading }: { loading: boolean }) {

  if (!loading) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator animating={true} color="#00f0ff" />
      <Text style={{ marginTop: 10 }} children="Please Wait.." />
    </View>
  );
}


export default Loading;
