import React from 'react';
import SleepDetailsComponent from './SleepDetails.component';
import type { SleepDetailsProps } from './SleepDetails.types';

const SleepDetailsContainer = (props: SleepDetailsProps) => {
  console.log(`@@@ Props: ${JSON.stringify(props.route.params?.user)}`);
  return <SleepDetailsComponent />;
};

export default SleepDetailsContainer;
