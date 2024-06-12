import React, { PropsWithChildren } from 'react';
// @ts-ignore (this library has no types)
import { Emitter } from 'react-native-particles';

export type ParticleProps = {
  infiniteLoop: boolean;
  numberOfParticles: number;
  emissionRate: number;
  speed: number;
  gravity: number;
  interval: number;
  particleLife: number;
  direction: number;
  spread: number;
  fromPosition: { x: number; y: number };
};
const Particles = ({ children, ...rest }: PropsWithChildren<ParticleProps>) => {
  return <Emitter {...rest}>{children}</Emitter>;
};
export default Particles;
