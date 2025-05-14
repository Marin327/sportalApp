import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import MatchItem from './components/MatchItem';
import TeamCard from './components/TeamCard';
import UpcomingMatchCard from './components/UpcomingMatchCard';
import CategoryList from './components/CategoryList';
import SearchBar from './components/SearchBar';
import PlayerCard from './components/PlayerCard';
import LiveMatch from './components/LiveMatch';
import MatchStats from './components/MatchStats';
import TeamStanding from './components/TeamStanding';
import NewsCard from './components/NewsCard';
import LoadingScreen from './components/LoadingScreen'; // Ако искаш да имаш зареждане

const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Футбол');

  // Имитация на зареждане
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LoadingScreen />; // Покажи экран за зареждане
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Добре дошъл в Sportal BG</Text>

      <SearchBar />

      <Text style={styles.subtitle}>Категории</Text>
      <CategoryList
        categories={['Футбол', 'Тенис', 'Баскетбол']}
        onSelectCategory={setSelectedCategory}
      />

      <Text style={styles.subtitle}>Предстоящи мачове</Text>
      <UpcomingMatchCard homeTeam="Барселона" awayTeam="Реал Мадрид" matchTime="20:00" />
      <UpcomingMatchCard homeTeam="ЦСКА" awayTeam="Левски" matchTime="18:30" />

      <Text style={styles.subtitle}>Мачове на живо</Text>
      <LiveMatch homeTeam="Лудогорец" awayTeam="Ботев" currentScore="2 - 1" />
      <LiveMatch homeTeam="Ювентус" awayTeam="Милан" currentScore="0 - 0" />

      <Text style={styles.subtitle}>Отбори</Text>
      <TeamCard teamName="Барселона" teamLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png" ranking={1} />
      <TeamCard teamName="Реал Мадрид" teamLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png" ranking={2} />

      <Text style={styles.subtitle}>Статистика на мачове</Text>
      <MatchStats homeTeam="Лудогорец" awayTeam="Ботев" homeTeamStats="50% владеене на топката" awayTeamStats="48% владеене на топката" />

      <Text style={styles.subtitle}>Статистика на отборите</Text>
      <TeamStanding teamName="Барселона" position={1} points={78} />
      <TeamStanding teamName="Реал Мадрид" position={2} points={76} />

      <Text style={styles.subtitle}>Новини</Text>
      <NewsCard title="Лудогорец спечели Купата на България!" content="Лудогорец победи в драматичен финал, за да спечели трофея." />
      <NewsCard title="Барселона надви Реал Мадрид" content="Барселона победи Реал Мадрид с 3-0 в изключително доминиращо представяне." />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
});

export default App;
