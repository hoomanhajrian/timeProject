import { StyleSheet, FlatList,Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Card,CardHeader } from '@mui/material';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
const [dataSource, changeDataSource] = useState([{id:1,title:"title",data:""},{id:2,title:"title2",data:""}]);
const [loading, changeLoading]= useState(false);


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
//Setting the number of column
  numColumns={2}
    />}
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight:'auto',
    marginLeft:'auto',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
