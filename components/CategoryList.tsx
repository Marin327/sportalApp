import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type CategoryListProps = {
  categories: string[];
  onSelectCategory: (category: string) => void;
};

const CategoryList = ({ categories, onSelectCategory }: CategoryListProps) => {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity key={category} onPress={() => onSelectCategory(category)}>
          <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  category: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 8,
    color: '#1e90ff',
  },
});

export default CategoryList;
