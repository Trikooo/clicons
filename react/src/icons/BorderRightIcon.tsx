import React from 'react';
import config from '../config';

interface BorderRightIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BorderRightIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/border-right)
 * @see {@link https://clicons.dev/icon/border-right}
 */
const BorderRightIcon = React.forwardRef<SVGSVGElement, BorderRightIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5 2.5C18.5939 2.69854 19.399 3.04969 20.0355 3.6708C21.5 5.09987 21.5 7.39991 21.5 12C21.5 16.6001 21.5 18.9001 20.0355 20.3292C19.399 20.9503 18.5939 21.3015 17.5 21.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.31035 2.75143C5.26828 2.94471 4.50135 3.28657 3.89503 3.89124C3.28872 4.49591 2.94592 5.26076 2.75211 6.3M14 2.50495C13.414 2.5 12.7117 2.5 12.0259 2.5C11.3401 2.5 10.5751 2.5 9.9891 2.50495M2.50497 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.50497 13.9001M2.75211 17.7C2.94592 18.7392 3.28871 19.5041 3.89503 20.1088C4.50135 20.7134 5.26828 21.0553 6.31035 21.2486M14 21.495C13.414 21.5 12.7117 21.5 12.0259 21.5C11.3402 21.5 10.5751 21.5 9.9891 21.495'
    }
  ],
  [
    'path',
    {
      d: 'M12 2.5V4M12 20V21.5M15 12H9M4.46875 12H3M12 9L12 15'
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

BorderRightIcon.displayName = 'BorderRightIcon';
export default BorderRightIcon;
