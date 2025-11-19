import React from 'react';
import config from '../config';

interface RubiksCubeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RubiksCubeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rubiks-cube)
 * @see {@link https://clicons.dev/icon/rubiks-cube}
 */
const RubiksCubeIcon = React.forwardRef<SVGSVGElement, RubiksCubeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.64298 3.5853C10.2952 2.86177 11.1214 2.5 12 2.5C12.8786 2.5 13.7048 2.86177 15.357 3.5853L17.0618 4.33185C19.6873 5.48154 21 6.05639 21 7C21 7.94361 19.6873 8.51846 17.0618 9.66815L15.357 10.4147C13.7048 11.1382 12.8786 11.5 12 11.5C11.1214 11.5 10.2952 11.1382 8.64298 10.4147L6.93817 9.66815C4.31272 8.51846 3 7.94361 3 7C3 6.05639 4.31272 5.48154 6.93816 4.33185L8.64298 3.5853Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 7V18C21 18.9436 19.6873 19.5185 17.0618 20.6682L15.357 21.4147C13.7048 22.1382 12.8786 22.5 12 22.5C11.1214 22.5 10.2952 22.1382 8.64298 21.4147L6.93817 20.6682C4.31272 19.5185 3 18.9436 3 18V7'
    }
  ],
  [
    'path',
    {
      d: 'M21 13L12 17.5L3 13.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 22.5V11.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 20.5V9.5L7 4.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 20.5V9.5L17 4.5'
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
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
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

RubiksCubeIcon.displayName = 'RubiksCubeIcon';
export default RubiksCubeIcon;
