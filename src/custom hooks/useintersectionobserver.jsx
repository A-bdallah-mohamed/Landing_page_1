import React from 'react'
import { useInView } from 'react-intersection-observer';

export default function Useintersectionobserver(component) {
  return  useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...component
  }

  );
}
