import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

export default class VisitsScreen extends React.Component {
  static navigationOptions = {
    title: 'Visits',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text>Hi, [UserName]</Text>
        </View> 
        <View style={styles.visitsContainer}>
            <Text>Visits</Text>
            <Text> MM/DD/YYYY - Dr. Name  $XX.XX  </Text>
        </View>     
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
      marginHorizontal: 50,
      marginBottom: 20
  }
});
