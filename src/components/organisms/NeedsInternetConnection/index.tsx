import React, {ReactNode} from 'react';
import TextView from 'components/atoms/TextView';
import {useNetInfo} from '@react-native-community/netinfo';
import {styles} from './styles';
import {Modal, View} from 'react-native';
import Svg from 'atoms/Svg';

type Props = {
  children: ReactNode;
  isVisible?: boolean;
};
const NeedsInternetConnection = ({children}: Props) => {
  const {isInternetReachable, details} = useNetInfo();
  if (!details) return null;
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isInternetReachable === false}>
        <View style={styles.constainer}>
          <Svg name="noWifi" size={150} />
          <TextView
            style={styles.titleTextStyling}
            title="No Internet Connection"
          />
          <TextView
            style={styles.contentTextStyling}
            title="Please connect to internet\n to access the app"
          />
        </View>
      </Modal>
      {children}
    </>
  );
};

export default NeedsInternetConnection;
