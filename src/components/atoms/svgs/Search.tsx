import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import COLORS from 'values/colors';
import {TSvgProps} from '..';

const WIDTH = 487.95;
const HEIGHT = 487.95;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 487.95 487.95" {...props}>
      <Path
        fill={COLORS.black}
        d="M481.8 453l-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"
      />
    </Svg>
  );
}

export default SvgComponent;