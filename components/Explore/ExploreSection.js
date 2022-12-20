import { FlatList } from 'react-native';
import React from 'react';
import { newsData } from '../../config/data';
import ExploreItem from './ExploreItem';

const ExploreSection = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ExploreItem {...item} />}
      keyExtractor={({ id }) => id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 25,
        paddingRight: 25,
      }}
    />
  );
};

export default ExploreSection;
