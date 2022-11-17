import {ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TArticle} from 'redux/article/model';
import {styles} from './styles';
import ItemBody from './components/Body';
import {useNavigation} from '@react-navigation/native';

const Article = ({item}: {item: TArticle}) => {
  const [isImageLoading, setIsImageLoading] = useState(false);
  const {navigate} = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigate('article_details', {item: item})}>
      <ImageBackground
        style={styles.container}
        source={{uri: item.urlToImage}}
        onLoadStart={() => setIsImageLoading(true)}
        onLoadEnd={() => setIsImageLoading(false)}
        imageStyle={{borderRadius: 20, opacity: 0.9}}>
        <ItemBody isImageLoading={isImageLoading} item={item} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Article;
