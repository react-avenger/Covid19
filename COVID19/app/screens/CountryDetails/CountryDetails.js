import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, List, Content } from 'native-base';
import { Text, Button } from 'react-native-paper';
import CountryCell from './countryCell/CountryCell'
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import * as worldActions from '../../actions/worldActions';
export default function CountryDetails() {
    const countriesList = useSelector(state => state.worldReducer.countriesList);
    const currentPage = useSelector(state => state.worldReducer.currentPage);
    const totalPages = useSelector(state => state.worldReducer.totalPages);
    const dispatch = useDispatch();
    dispatch(worldActions.requesCountries(1));

    const onPrevious = () => {
        if (currentPage == 1) {
            dispatch(worldActions.requesCountries(1));
        } else {
            var currentPages = currentPage - 1
            dispatch(worldActions.requesCountries(currentPages));
        }

    };
    const onNext = () => {
        if (currentPage == totalPages) {
            dispatch(worldActions.requesCountries(1));
        } else {
            var currentPages = currentPage + 1
            dispatch(worldActions.requesCountries(currentPages));
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ height: 30 }}> 
            <Text  style={styles.text}> COVID19-Tracker </Text>
            </View>
            <Content >
                {countriesList.map((item, index) => (
                    <List key={index}>
                        <ListItem
                            style={[styles.listItem]}>
                            <CountryCell style={styles.item} items ={item} />
                        </ListItem>
                    </List>
                ))}
            </Content>
            <View style={styles.view}>
                <Button style={styles.button} mode="outlined" onPress={onPrevious}>
                    Previous
              </Button>
                <Button style={styles.button} mode="outlined" onPress={onNext}>
                    Next
              </Button>
            </View>
        </View>
    );
}
