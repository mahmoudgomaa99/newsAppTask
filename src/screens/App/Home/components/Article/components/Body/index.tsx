import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './styles';
import {TArticle} from 'redux/article/model';
import moment from 'moment';

const ItemBody = ({
  isImageLoading,
  item,
}: {
  isImageLoading: boolean;
  item: TArticle;
}) => {
  if (isImageLoading)
    return (
      <SkeletonPlaceholder backgroundColor={'#c8c8c8'} borderRadius={4}>
        <SkeletonPlaceholder.Item
          width={'100%'}
          height="100%"
          borderRadius={20}
        />
      </SkeletonPlaceholder>
    );
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>
        {item.description?.substring(0, 50)}...
        <Text style={styles.tapToReadTxt}>tap to read more</Text>
      </Text>
      <View style={styles.bottomBodyWrapper}>
        <Text style={styles.author}>Author: {item.author}</Text>
        <Text style={styles.date}>{moment(item.publishedAt).calendar()}</Text>
      </View>
    </View>
  );
};

export default ItemBody;
