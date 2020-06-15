import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as worldActions from '../../actions/worldActions';
import NavigationService from '../../navigation/NavigationService';
import WorldCell from './worldCell/WorldCell'
import styles from './styles';
const World = () => {

  const generalList = useSelector(state => state.worldReducer.generalList);
  const dispatch = useDispatch();
  dispatch(worldActions.requesWorld());
  const onCountryDetails = () => NavigationService.navigate('CountryDetails');

  return (
    <View style={styles.container}>
      <View style={{ height: 30 }}>
        <Text style={styles.textAlign}> WORLD COVID19-TRACKER </Text>
        </View>
        <WorldCell style={styles.item} generalList ={generalList} />
      <View style={styles.view}>
        <Button style={styles.button} mode="outlined" onPress={onCountryDetails}>
          More
              </Button>
      </View>
    </View>
  );
}
export default World;
