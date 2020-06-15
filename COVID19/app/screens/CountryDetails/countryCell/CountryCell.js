import React from 'react';
import { View, Text,Image } from 'react-native';
import styles from "./styles";
import constants from '../../World/constants'
const CountryCell = ({items}) => (
    <View style={styles.main} >
        <View style={styles.view}>
        <Image
          style={{width: 100, height: 100}}
         source={{uri: items.flag}}
        />
        <View style={styles.viewcolumn}>
        <Text style={styles.text}>{constants.country}{items.country}</Text>
        <Text style={styles.text}>{constants.totalCase}{items.total_cases}</Text>
        <Text style={styles.text}>{constants.newCases}{items.new_cases}</Text>
        <Text style={styles.text}>{constants.totalDeaths}{items.total_deaths}</Text>
        </View>
      </View>
        <Text style={styles.text}>{constants.newDeaths} {items.new_deaths}</Text>
        <Text style={styles.text}>{constants.totalRecovered} {items.total_recovered}</Text>
        <Text style={styles.text}>{constants.activeCases} {items.active_cases}</Text>
        <Text style={styles.text}>{constants.seriousCritical} {items.serious_critical}</Text>
        <Text style={styles.text}>{constants.casesMill}{items.cases_per_mill_pop}</Text>
    </View>
);

export default CountryCell;