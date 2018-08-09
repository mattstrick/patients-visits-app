import React from 'react';
import { 
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
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text>Hi, [UserName]</Text>
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
