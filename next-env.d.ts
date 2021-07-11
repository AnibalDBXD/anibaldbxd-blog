import { FunctionComponent, SVGAttributes } from 'react';

/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}
