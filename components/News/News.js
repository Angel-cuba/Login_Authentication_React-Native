import { FlatList } from 'react-native';
import React from 'react';
import NewsItem from './NewsItem';

const NewsSection = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NewsItem {...item} />}
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
