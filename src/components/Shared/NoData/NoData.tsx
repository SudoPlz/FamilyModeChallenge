import React from 'react';
import { View } from 'react-native';
import Text from 'src/components/Shared/Text';
import Icon from 'src/components/Shared/Icon';
import styles from './NoData.styles';

const SummaryNoData: React.FC = () => {
  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataTitleText}>No Data Available</Text>
      <Text style={styles.noDataDescriptionText}>
        There is no sleep data available for that night. Consider selecting
        another date.
      </Text>
      <View style={styles.noDataIconContainer}>
        <Icon
          style={styles.noDataIcon}
          name="bed-outline"
          color="#FFFFFF"
          size={60}
        />
        <Icon
          style={styles.noDataIcon}
          name="ban-outline"
          color="#4C00B6"
          size={120}
        />
      </View>
    </View>
  );
};

export default SummaryNoData;
