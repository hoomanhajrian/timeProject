import { StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Card,CardContent,CardHeader, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Time from '../components/Time';


const useStyles = makeStyles({
  card:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'.5rem',
    
  }
});

// `${Math.floor(currentBiOra)}:${Math.floor(currentBiMino)}:${Math.floor(currentSeko)}`
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
// getting data from Time function
const {currentBiMino,currentBiOra,currentSeko,dato,dato1} = Time();  
const date = new Date;
// set loading for whole component
const [loading, changeLoading]= useState(false);
const classes = useStyles();
const [dataSource, changeDataSource] = useState([
  {id:1,title:"New Time",data:"Loading"},
  {id:2,title:"Dato",data:"Loading"},
  {id:3,title:"Old Time",data:"Loading"},
  {id:4,title:"Date",data:"Loading"}]);

// converting month number to letters
const convertMonth = (month:number)=>{
  switch (month) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      break;
  }
}


const interval = setInterval(()=>{
  changeDataSource(...dataSource,
  [{id:1,title:"New Time",data:`${Math.floor(currentBiOra)}:${Math.floor(currentBiMino)}:${Math.floor(currentSeko)}`},
  {id:2,title:"Dato",data:`${dato}${dato1}`},
  {id:3,title:"Old Time",data:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`},
  {id:4,title:"Date",data:`${date.getDate()}/${convertMonth(date.getMonth())}/${date.getFullYear()}`}]);
},1000);



  return (
  <View>
    {loading?
    <Text>loading</Text>
    :<FlatList 
    style={styles.container} 
    data={dataSource}
    renderItem={({item})=>(
      <Card className={classes.card}>
        <CardHeader
        title={
        <Typography variant="h6" component="h6">
          {item.title}
        </Typography>}
        />
        <CardContent>
          <Typography>{item.data}</Typography>
        </CardContent>
      </Card>
    )}
//Setting the number of column
  numColumns={2}
    />}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight:'auto',
    marginLeft:'auto',
    padding:'1rem',
    width:'80%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
