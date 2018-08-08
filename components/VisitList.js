import React from 'react';
import { Text, View } from 'react-native';

const a = [
    {
        id: 1,
        physician: 'DR',
        date: 'MM/DD/YYYY',
        cost: '$XX.XX'
},
{
    id: 2,
    physician: 'DR',
    date: 'MM/DD/YYYY',
    cost: '$XX.XX'
},
{
    id: 3,
    physician: 'DR',
    date: 'MM/DD/YYYY',
    cost: '$XX.XX'
}
];

export class VisitList extends React.Component {
  render() {
    return (
        <View {...this.props}>
        {a.map(i => {
            return <Text key={i.id}>{i.date + i.physician + i.cost}</Text>
        })}
        </View>

    );
  }
}