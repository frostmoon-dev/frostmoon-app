declare module 'animata' {
  import * as React from 'react';

  export type GridPatternProps = {
    width?: number | string;
    height?: number | string;
    stroke?: string;
    strokeWidth?: number;
    gap?: number;
    className?: string;
  };

  export const GridPattern: React.FC<GridPatternProps>;

  export default {
    GridPattern,
  };
}
