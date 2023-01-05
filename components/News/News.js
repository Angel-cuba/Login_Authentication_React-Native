import { FlatList } from 'react-native';
import React from 'react';
import NewsItem from './NewsItem';

const NewsSection = ({ data, t }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NewsItem {...item} t={t} />}
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
