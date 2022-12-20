import { FlatList } from 'react-native';
import React from 'react';
import NewsItem from './NewsItem';
import { newsData } from '../../config/data';

const NewsSection = ({ data }) => {
  return (
    <FlatList
      data={newsData}
      renderItem={({ item }) => <NewsItem item={item} />}
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

export default NewsSection;
