import React from 'react';
import config from '../config';

interface BrainIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BrainIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/brain)
 * @see {@link https://clicons.dev/icon/brain}
 */
const BrainIcon = React.forwardRef<SVGSVGElement, BrainIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 8.5C13.3431 8.5 12 7.15685 12 5.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 5V19.5'
    }
  ],
  [
    'path',
    {
      d: 'M20 16.5C20 14.8431 18.6569 13.5 17 13.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 16.5C4 14.8431 5.34315 13.5 7 13.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 19.5C16 20.6046 15.1046 21.5 14 21.5C12.8954 21.5 12 20.6046 12 19.5C12 20.6046 11.1046 21.5 10 21.5C8.89543 21.5 8 20.6046 8 19.5C8 19.4404 8.00466 19.3815 8.00977 19.3232C7.694 19.4362 7.35459 19.5 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9246 4.16545 15.3892 4.44629 14.9326C3.28052 14.2336 2.5 12.9582 2.5 11.5C2.5 10.5452 2.8353 9.66916 3.39355 8.98145C3.14445 8.54412 3 8.03929 3 7.5C3 5.84315 4.34315 4.5 6 4.5C6.35951 4.5 6.70301 4.56666 7.02246 4.68262C7.17854 3.45191 8.22691 2.5 9.5 2.5C10.8807 2.5 12 3.61929 12 5C12 3.61929 13.1193 2.5 14.5 2.5C15.7731 2.5 16.8215 3.45191 16.9775 4.68262C17.297 4.56666 17.6405 4.5 18 4.5C19.6569 4.5 21 5.84315 21 7.5C21 8.03929 20.8555 8.54412 20.6064 8.98145C21.1647 9.66916 21.5 10.5452 21.5 11.5C21.5 12.9582 20.7195 14.2336 19.5537 14.9326C19.8346 15.3892 20 15.9246 20 16.5C20 18.1569 18.6569 19.5 17 19.5C16.6454 19.5 16.306 19.4362 15.9902 19.3232C15.9953 19.3815 16 19.4404 16 19.5Z'
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

BrainIcon.displayName = 'BrainIcon';
export default BrainIcon;
