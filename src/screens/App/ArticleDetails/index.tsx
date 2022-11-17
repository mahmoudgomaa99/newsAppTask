import {Image, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {TArticle} from 'redux/article/model';
import Header from './Header';
import {styles} from './styles';
import moment from 'moment';
import LoadingSkeleton from './LoadingSkeleton';

const ArticleDetails = () => {
  const {item}: {item: TArticle} = useRoute<any>().params;
  const [isImageLoading, setIsImageLoading] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Header />
      {isImageLoading && <LoadingSkeleton />}
      <Image
        resizeMode="stretch"
        source={{uri: item.urlToImage}}
        style={{
          width: isImageLoading ? 0 : '100%',
          height: isImageLoading ? 0 : 250,
        }}
        onLoadStart={() => setIsImageLoading(true)}
        onLoadEnd={() => setIsImageLoading(false)}
      />
      <ScrollView contentContainerStyle={{padding: 10}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.author}>Auhtor</Text>
        <View style={styles.authorWrapper}>
          <Text style={styles.authorValue}>{item.author}</Text>
        </View>
        <Text style={styles.author}>Published At</Text>
        <View style={styles.dateWrapper}>
          <Text style={styles.dateValue}>
            {moment(item.publishedAt).calendar()}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticleDetails;
