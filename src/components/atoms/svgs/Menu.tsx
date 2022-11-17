import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import COLORS from 'values/colors';
import {TSvgProps} from '..';

const WIDTH = 92.833;
const HEIGHT = 92.833;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 92.833 92.833" {...props}>
      <Path
        fill={COLORS.white}
        d="M89.834 1.75H3c-1.654 0-3 1.346-3 3v13.334c0 1.654 1.346 3 3 3h86.833c1.653 0 3-1.346 3-3V4.75a3.002 3.002 0 00-2.999-3zM89.834 36.75H3c-1.654 0-3 1.346-3 3v13.334c0 1.654 1.346 3 3 3h86.833c1.653 0 3-1.346 3-3V39.75a3.002 3.002 0 00-2.999-3zM89.834 71.75H3c-1.654 0-3 1.346-3 3v13.334c0 1.654 1.346 3 3 3h86.833c1.653 0 3-1.346 3-3V74.75a3.002 3.002 0 00-2.999-3z"
      />
    </Svg>
  );
}

export default SvgComponent;
