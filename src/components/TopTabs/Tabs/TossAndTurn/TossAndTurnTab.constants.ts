export const SleepStageToGraphNumericValueMapping = {
  out: 3,
  awake: 2,
  light: 1,
  deep: 0,
};

// the reverse of SleepStageToGraphNumericValueMapping where keys are values and values are keys
export const ReverseSleepStageToGraphNumericValueMapping = Object.fromEntries(
  Object.entries(SleepStageToGraphNumericValueMapping).map(([key, value]) => [
    value,
    key.charAt(0).toUpperCase() + key.slice(1),
  ]),
);
