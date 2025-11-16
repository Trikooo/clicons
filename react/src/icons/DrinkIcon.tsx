import React from 'react';
import config from '../config';

interface DrinkIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DrinkIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/drink)
 * @see {@link https://clicons.dev/icon/drink}
 */
const DrinkIcon = React.forwardRef<SVGSVGElement, DrinkIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.20538 15.3582L4.51713 11.0812C2.62475 8.88671 1.67856 7.78948 2.09833 6.89474C2.5181 6 3.97907 6 6.90099 6H11.099C14.0209 6 15.4819 6 15.9017 6.89474C16.3214 7.78948 15.3753 8.88671 13.4829 11.0812L9.79462 15.3582C9.42563 15.7861 9.24114 16 9 16C8.75886 16 8.57437 15.7861 8.20538 15.3582Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 6L8.09898 3.59389C8.03809 3.22852 7.78022 2.92674 7.42882 2.80961L5 2'
    }
  ],
  [
    'path',
    {
      d: 'M9 16V22M7.5 22H10.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.8601 8.83333C16.5043 9.54937 17.4403 10 18.4822 10C20.425 10 22 8.433 22 6.5C22 4.567 20.425 3 18.4822 3C16.71 3 15.2438 4.30385 15 6'
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

DrinkIcon.displayName = 'DrinkIcon';
export default DrinkIcon;
