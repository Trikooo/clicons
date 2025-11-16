import React from 'react';
import config from '../config';

interface AmazonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AmazonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/amazon)
 * @see {@link https://clicons.dev/icon/amazon}
 */
const AmazonIcon = React.forwardRef<SVGSVGElement, AmazonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 6L9.5 7C9.5 7 10 5 12 5C13.6 5 14.1664 6.86545 14 8.5C7.5 8.5 6.5 11.5 6.5 13C6.5 14.5 7.5 17 10.5 17C13 17 14.5 15 14.5 15L15.5 16.5L18 14.5C18 14.5 17 13.6667 17 12.5V9C17 9 17.6681 2.5 12 2.5C7.6 2.5 7 6 7 6Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 10.8555C13.5 12.3555 12.5805 14.3555 11.2014 14.3555C9.30586 14.3555 9.36245 10.8555 13.5 10.8555Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 17.5C2 17.5 10.5 23.5844 19 19.5281C19 19.5281 10.5 25.1056 2 17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.99 17.7025C22.136 19.0999 20.6414 21 20.6414 21C20.6414 21 21.6208 19.4076 21.4245 17.7025C19.8212 17.0648 18 17.7895 18 17.7895C18 17.7895 19.5024 16.685 21.4245 17.0888C21.7265 17.1522 21.9579 17.3956 21.99 17.7025Z'
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

AmazonIcon.displayName = 'AmazonIcon';
export default AmazonIcon;
