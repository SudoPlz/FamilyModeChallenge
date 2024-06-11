import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import DateTime from '../../../utils/DateTime';
import Button from '../Button';
import Text from '../Text';
import styles from './DatePicker.styles';

interface DatePickerProps {
  initialDate?: DateTime;
}

const DatePicker: React.FC<DatePickerProps> = ({ initialDate }) => {
  const [selectedDate, setSelectedDate] = useState<DateTime>(
    initialDate ?? DateTime.now(),
  );

  const handlePreviousDate = () => {
    setSelectedDate(prevDate => prevDate.subtract(1, 'day'));
  };

  const handleNextDate = () => {
    setSelectedDate(prevDate => prevDate.add(1, 'day'));
  };
  const isToday = selectedDate.isToday();
  const selectedDateString = useMemo(() => {
    if (isToday) {
      return 'Today';
    }
    if (selectedDate.isYesterday()) {
      return 'Yesterday';
    }

    return selectedDate.format('yyyy-MM-dd');
  }, [isToday, selectedDate]);

  const isTodayOrFutureDate =
    isToday || selectedDate.isAfter(DateTime.now(), 'day');

  return (
    <View style={styles.container}>
      <Button style={styles.button} onPress={handlePreviousDate} text="<" />
      <View style={styles.dateTitleContainer}>
        <Text style={styles.dateTitleText}>{selectedDateString}</Text>
      </View>
      <Button
        disabled={isTodayOrFutureDate}
        style={styles.button}
        onPress={handleNextDate}
        text=">"
      />
    </View>
  );
};

export default DatePicker;
