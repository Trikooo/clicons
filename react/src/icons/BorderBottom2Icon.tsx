import React from 'react';
import config from '../config';

interface BorderBottom2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BorderBottom2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/border-bottom2)
 * @see {@link https://clicons.dev/icon/border-bottom2}
 */
const BorderBottom2Icon = React.forwardRef<SVGSVGElement, BorderBottom2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.2486 6.33333C21.0553 5.28498 20.7134 4.51342 20.1088 3.90345C19.5041 3.29347 18.7392 2.94861 17.7 2.75363M21.495 14C21.5 13.4105 21.5 12.7732 21.5 12.0833C21.5 11.3934 21.5 10.7562 21.495 10.1666M13.9 2.505C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.0999 2.505M6.3 2.75363C5.26076 2.94861 4.49591 3.29347 3.89124 3.90345C3.28657 4.51342 2.94471 5.28497 2.75143 6.33333M2.50495 14C2.5 13.4107 2.5 12.7729 2.5 12.0833C2.5 11.3935 2.5 10.7563 2.50495 10.1668'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 17.5C21.3015 18.5939 20.9503 19.399 20.3292 20.0355C18.9001 21.5 16.6001 21.5 12 21.5C7.39991 21.5 5.09987 21.5 3.6708 20.0355C3.04969 19.399 2.69854 18.5939 2.5 17.5'
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

BorderBottom2Icon.displayName = 'BorderBottom2Icon';
export default BorderBottom2Icon;
