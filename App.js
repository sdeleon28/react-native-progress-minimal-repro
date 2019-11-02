import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aquamarine',
    paddingVertical: 20,
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
});

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circles}>
          <Progress.CircleSnail style={styles.progress} />
          <Progress.CircleSnail
            style={styles.progress}
            color={['#F44336', '#2196F3', '#009688']}
          />
        </View>
      </View>
    );
  }
}
