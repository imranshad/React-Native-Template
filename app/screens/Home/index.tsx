import React from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  Text,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from 'app/store/actions/imagesActions';
import { GalaryImage } from 'app/components';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

interface IRootState {
  imageReducer: {
    images: [];
  };
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const images = useSelector<IRootState>((state) => state.imageReducer.images);
  console.log('images', images);
  const pickImage = async () => {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        dispatch(addImage(response.uri));
      }
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.plusBtn}>
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>
      <FlatList
      numColumns={2}
        data={images}
        renderItem={({ item, index }) => <GalaryImage source={item} index={index} />}
      />
    </View>
  );
};

export default Login;
