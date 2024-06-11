import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import DateTime from '../../../utils/DateTime';
import Button from '../Button';
import Text from '../Text';
import styles from './DatePicker.styles';

interface DatePickerProps {
  selectedDate: DateTime;
  onDateChange: (date: DateTime) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const handlePreviousDate = useCallback(() => {
    onDateChange(selectedDate.subtract(1, 'day'));
  }, [onDateChange, selectedDate]);

  const handleNextDate = useCallback(() => {
    onDateChange(selectedDate.add(1, 'day'));
  }, [onDateChange, selectedDate]);

  const isToday = selectedDate.isToday();
  const selectedDateString = useMemo(() => {
    if (isToday) {
      return 'Tonight';
    }
    if (selectedDate.isYesterday()) {
      return 'Last night';
    }

    return selectedDate.format('LLLL d');
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
