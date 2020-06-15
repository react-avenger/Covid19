import React from 'react';
import { View, Text,Image } from 'react-native';
import styles from "./styles";
import constants from '../constants'
const WorldCell = ({generalList}) => (
    <View style={styles.main} >
      <Text style={styles.text}>{constants.totalCase}{generalList.total_cases}</Text>
      <Text style={styles.text}>{constants.recoveryCase}{generalList.recovery_cases}</Text>
      <Text style={styles.text}>{constants.deathCases} {generalList.death_cases}</Text>
      <Text style={styles.text}>{constants.currentlyInfected} {generalList.currently_infected}</Text>
      <Text style={styles.text}>{constants.casesOutcome} {generalList.cases_with_outcome}</Text>
      <Text style={styles.text}>{constants.mildCases} {generalList.mild_condition_active_cases}</Text>
      <Text style={styles.text}>{constants.criticalCondition} {generalList.critical_condition_active_cases}</Text>
      <Text style={styles.text}>{constants.recoveredclosed} {generalList.recovered_closed_cases}</Text>
      <Text style={styles.text}>{constants.deathclosed} {generalList.death_closed_cases}</Text>
      <Text style={styles.text}>{constants.closedRecovered} {generalList.closed_cases_recovered_percentage}</Text>
      <Text style={styles.text}>{constants.closedDeath}{generalList.closed_cases_death_percentage}</Text>
      <Text style={styles.text}>{constants.activeMild} {generalList.active_cases_mild_percentage}</Text>
      <Text style={styles.text}>{constants.activeCritical}{generalList.active_cases_critical_percentage}</Text>
      <Text style={styles.text}>{constants.generalDeath} {generalList.general_death_rate}</Text>
    </View>
);
export default WorldCell;