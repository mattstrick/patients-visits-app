import React from 'react';
import { 
    Alert,
    AsyncStorage,
    Button,
    ScrollView, 
    View, 
    StyleSheet, 
    Text 
} from 'react-native';
import { VisitList } from '../components/VisitList';

export default class VisitsScreen extends React.Component {
  static navigationOptions = {
    title: 'Visits',
  };

  constructor(props) {
    super(props);
    this._retrieveData();
    this.state = {
        userName: ""
    };
}

_retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        // We have data!!
        
        this.setState({userName: value})
      }
     } catch (error) {
       // Error retrieving data
     }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text>Hi, {this.props.navigation.getParam('userName', '')}</Text>
        </View> 
        <Button
            onPress={ () => this.props.navigation.navigate('Messages') }
            title="Message Center"
            color="#841584"
            />
        <View style={styles.visitsContainer}>
            <Text>Visits</Text>
            <VisitList/>
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
