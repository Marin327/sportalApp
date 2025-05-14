import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type UpcomingMatchCardProps = {
  homeTeam: string;
  awayTeam: string;
  matchTime: string;
};

const UpcomingMatchCard = ({ homeTeam, awayTeam, matchTime }: UpcomingMatchCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.time}>Мач в: {matchTime}</Text>
      <Text style={styles.teams}>{homeTeam} vs {awayTeam}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 1,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  teams: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpcomingMatchCard;
