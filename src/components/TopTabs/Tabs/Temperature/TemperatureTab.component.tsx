import React, { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import styles, { BED_ICON_SIZE } from './TemperatureTab.styles';
// import NoData from 'src/components/Shared/NoData';
import Chart from 'src/components/Shared/Chart';
import type { TemperatureData } from './TemperatureTab.types';
import Text from 'src/components/Shared/Text';
import NoData from 'src/components/Shared/NoData';
import Icon from 'src/components/Shared/Icon';
import { formatCelciusTemperatureString } from './TemperatureTab.utils';

type TemperatureTabComponentProps = {
  roomData?: TemperatureData | null;
  bedData?: TemperatureData | null;
};

const temperatureTextFormatter = ({
  value,
}: {
  value: string;
  formatted: string;
}) => {
  'worklet';
  return formatCelciusTemperatureString(value, 1);
};
const temperatureShortTextFormatter = ({
  value,
}: {
  value: string;
  formatted: string;
}) => {
  'worklet';
  return formatCelciusTemperatureString(value, 0);
};

const TemperatureTabComponent = ({
  bedData,
  roomData,
}: TemperatureTabComponentProps) => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const [bedTemperature, setBedTemperature] = useState<string>();
  const [roomTemperature, setRoomTemperature] = useState<string>();
  return (
    <View style={styles.container}>
      {bedData || roomData ? (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Temperature</Text>
            <Text style={styles.subTitleText}>(drag to check it out)</Text>
          </View>
          <View style={styles.body}>
            <Chart
              showStaticLabels
              data={bedData?.graphData || []}
              textFormatter={temperatureTextFormatter}
              staticLabelsFormatter={temperatureShortTextFormatter}
              style={styles.chart}
              width={screenWidth * 0.9}
              height={screenHeight * 0.2}
              onCurrentIndexChange={index => {
                if (bedData?.graphData[index].value) {
                  setBedTemperature(
                    formatCelciusTemperatureString(
                      bedData?.graphData[index].value,
                    ),
                  );
                  if (roomData?.graphData[index].value) {
                    setRoomTemperature(
                      formatCelciusTemperatureString(
                        roomData?.graphData[index].value,
                      ),
                    );
                  }
                }
              }}
            />

            <View style={styles.bedTemperatureContainer}>
              <View style={styles.roomTemperatureTextContainer}>
                <Text style={styles.roomTemperatureText}>
                  {roomTemperature ?? 'zZz'}
                </Text>
              </View>
              <Icon
                style={styles.bedIcon}
                name="bed-outline"
                color={'white'}
                size={BED_ICON_SIZE}
              />
              <View style={styles.bedTemperatureTextContainer}>
                <Text style={styles.bedTemperatureText}>{bedTemperature}</Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <NoData />
      )}
    </View>
  );
};

export default TemperatureTabComponent;
