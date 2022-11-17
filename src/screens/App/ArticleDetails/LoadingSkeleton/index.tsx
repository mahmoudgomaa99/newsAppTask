import {View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoadingSkeleton = () => {
  return (
    <View style={{width: '100%', height: 250}}>
      <SkeletonPlaceholder backgroundColor={'#c8c8c8'} borderRadius={4}>
        <SkeletonPlaceholder.Item width={'100%'} height="100%" />
      </SkeletonPlaceholder>
    </View>
  );
};

export default LoadingSkeleton;
