import React from 'react';
import config from '../config';

interface SpoonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SpoonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/spoon)
 * @see {@link https://clicons.dev/icon/spoon}
 */
const SpoonIcon = React.forwardRef<SVGSVGElement, SpoonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.105 2.89501C19.3895 1.17949 15.6577 2.12988 13.7277 4.05984C12.6875 5.10001 12.3831 6.21243 12.592 7.28565C12.8022 8.36561 12.7813 9.58474 11.9794 10.338L2.50346 19.2396C1.84652 19.8568 1.8303 20.895 2.46765 21.5324C3.105 22.1697 4.14323 22.1535 4.76036 21.4965L13.662 12.0206C14.4153 11.2187 15.6344 11.1978 16.7143 11.408C17.7876 11.6169 18.9 11.3125 19.9402 10.2723C21.8701 8.34233 22.8205 4.61053 21.105 2.89501Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

SpoonIcon.displayName = 'SpoonIcon';
export default SpoonIcon;
