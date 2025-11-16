import React from 'react';
import config from '../config';

interface SpeedTrainIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SpeedTrainIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/speed-train)
 * @see {@link https://clicons.dev/icon/speed-train}
 */
const SpeedTrainIcon = React.forwardRef<SVGSVGElement, SpeedTrainIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 3H6.73259C9.34372 3 10.6493 3 11.8679 3.40119C13.0866 3.80239 14.1368 4.57795 16.2373 6.12907L19.9289 8.85517C19.9692 8.88495 19.9894 8.89984 20.0084 8.91416C21.2491 9.84877 21.985 11.307 21.9998 12.8603C22 12.8841 22 12.9091 22 12.9593C22 12.9971 22 13.016 21.9997 13.032C21.9825 14.1115 21.1115 14.9825 20.032 14.9997C20.016 15 19.9971 15 19.9593 15H2'
    }
  ],
  [
    'path',
    {
      d: 'M2 8H3.89284C4.16278 8 4.29775 8 4.4256 8.0082C5.52021 8.07839 6.53798 8.595 7.24076 9.43715C7.32284 9.53551 7.40251 9.64446 7.56185 9.86235C7.61383 9.93344 7.63982 9.96899 7.66371 10.0048C7.86673 10.3091 7.98241 10.6633 7.99815 11.0287C8 11.0717 8 11.1158 8 11.2038V11.4157C8 11.5874 8 11.6732 7.9741 11.7416C7.93351 11.8488 7.84884 11.9335 7.74159 11.9741C7.67317 12 7.58735 12 7.41572 12H2'
    }
  ],
  [
    'path',
    {
      d: 'M21 11H17.3333C14.3878 11 12 8.76142 12 6V4'
    }
  ],
  [
    'path',
    {
      d: 'M2 19H22'
    }
  ],
  [
    'path',
    {
      d: 'M18 19V21'
    }
  ],
  [
    'path',
    {
      d: 'M12 19V21'
    }
  ],
  [
    'path',
    {
      d: 'M6 19V21'
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

SpeedTrainIcon.displayName = 'SpeedTrainIcon';
export default SpeedTrainIcon;
