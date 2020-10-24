import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    paddingTop:0
  },
  plusBtn:{
    top:-50,
    zIndex:1,
    width:30,
    height:30,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"flex-end"
  },
  plusIcon:{
    color:"black",
    fontSize:30,
    fontWeight:"bold",
  }
});

export default styles;
