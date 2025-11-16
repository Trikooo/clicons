import React from 'react';
import config from '../config';

interface SunCloudBigRain2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SunCloudBigRain2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sun-cloud-big-rain2)
 * @see {@link https://clicons.dev/icon/sun-cloud-big-rain2}
 */
const SunCloudBigRain2Icon = React.forwardRef<SVGSVGElement, SunCloudBigRain2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.4776 11.0001C17.485 11 17.4925 11 17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.8252 20.2624 19.7631 18 20M17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5C17.5 7.46246 15.0376 5.00003 12 5.00003C9.12324 5.00003 6.76233 7.20865 6.52042 10.0227M17.4776 11.0001C17.3753 12.1345 16.9286 13.1696 16.2428 14M6.52042 10.0227C3.98398 10.2641 2 12.4004 2 15C2 17.419 3.71776 19.5121 6 19.9753M6.52042 10.0227C6.67826 10.0077 6.83823 10 7 10C8.12582 10 9.16474 10.3721 10.0005 11'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 19.5034C9.5 18.2482 10.5532 17.0078 11.2924 16.2917C11.6939 15.9028 12.3061 15.9028 12.7076 16.2917C13.4468 17.0078 14.5 18.2482 14.5 19.5034C14.5 20.7342 13.5533 22 12 22C10.4467 22 9.5 20.7342 9.5 19.5034Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.95939 9.19376C2.21865 6.47182 3.85922 3.674 6.6237 2.94466M2.95939 9.19376L2 9.44687M2.95939 9.19376C3.14359 9.87063 3.4577 10.4791 3.86823 11M6.6237 2.94466L6.36663 2.00003M6.6237 2.94466C8.66673 2.40566 10.7518 3.14722 12 4.66964M3.4765 5.323L2.4644 4.74631M11.1407 2.45728L10.557 3.45497'
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

SunCloudBigRain2Icon.displayName = 'SunCloudBigRain2Icon';
export default SunCloudBigRain2Icon;
