import { StyleSheet, FlatList,Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Card,CardHeader } from '@mui/material';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
const [dataSource, changeDataSource] = useState([{id:1,title:"title"},{id:2,title:"title2"}]);
const [loading, changeLoading]= useState([true]);

  return (
  <SafeAreaView>
    {loading?
    <Text>loading</Text>
    :<FlatList 
    style={styles.container} 
    data={dataSource}
    renderItem={({item})=>(
      <Card>
        <CardHeader
        title={item.title}
        />
      </Card>
    )}
    />}
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'column',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
