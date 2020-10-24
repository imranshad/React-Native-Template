import metrics from 'app/config/metrics';
import * as React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';

interface GalaryImageProps {
    source:string,
    index:Number
}
const GalaryImage:React.FC = (props: GalaryImageProps) => {
  const dispatch=useDispatch()
const onDelete=()=>{
  dispatch({type:"REMOVE_IMAGE",payload:props.index})
}
  return (
    <View style={styles.container}>
        <Image source={{uri:props.source}} style={styles.image} />
        <Text onPress={onDelete} style={styles.crossIcon}>X</Text>
    </View>
  );
};

export default GalaryImage;

const styles = StyleSheet.create({
  container: {
    width:(metrics.screenWidth/2)-20,
      height:(metrics.screenWidth/2)-20,
  },
  image:{
      width:(metrics.screenWidth/2)-20,
      height:(metrics.screenWidth/2)-20,
      borderRadius:5,
      marginTop:5,
  },
  crossIcon:{
    position:"absolute",
    top:5,
    right:0,
    elevation:10,
    paddingLeft:5,
    paddingRight:5,
    backgroundColor:"#FFF"
  }
});
