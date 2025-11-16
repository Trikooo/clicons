import React from 'react';
import config from '../config';

interface CloudSlowWindIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CloudSlowWindIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cloud-slow-wind)
 * @see {@link https://clicons.dev/icon/cloud-slow-wind}
 */
const CloudSlowWindIcon = React.forwardRef<SVGSVGElement, CloudSlowWindIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 16.6579L8.32669 16.4C9.00235 15.8667 9.79765 15.8667 10.4733 16.4L10.7267 16.6C11.4024 17.1333 12.1976 17.1333 12.8733 16.6L13.1267 16.4C13.8024 15.8667 14.5976 15.8667 15.2733 16.4L15.5267 16.6C15.6792 16.7204 15.8378 16.8136 15.9998 16.8796M14 20.6L14.2693 20.4C14.9875 19.8667 15.8328 19.8667 16.5509 20.4L16.8202 20.6C17.5384 21.1333 18.3837 21.1333 19.1018 20.6L19.3712 20.4C20.0893 19.8667 20.9346 19.8667 21.6528 20.4L22 20.6579M10 20.6L9.73069 20.4C9.01254 19.8667 8.16723 19.8667 7.44908 20.4L7.17977 20.6C6.46161 21.1333 5.61631 21.1333 4.89815 20.6L4.62885 20.4C3.91069 19.8667 3.06539 19.8667 2.34723 20.4L2 20.6579'
    }
  ],
  [
    'path',
    {
      d: 'M17.4776 8.89801L17.5 8.89795C19.9853 8.89795 22 10.8784 22 13.3214C22 14.8551 21.206 16.2065 20 17M17.4776 8.89801C17.4924 8.73611 17.5 8.57216 17.5 8.40646C17.5 5.42055 15.0376 3 12 3C9.12324 3 6.76233 5.17106 6.52042 7.93728M17.4776 8.89801C17.3753 10.0132 16.9286 11.0307 16.2428 11.8469M6.52042 7.93728C3.98398 8.17454 2 10.2745 2 12.8299C2 14.4378 2.78565 15.8652 4 16.7619M6.52042 7.93728C6.67826 7.92251 6.83823 7.91496 7 7.91496C8.12582 7.91496 9.16474 8.28072 10.0005 8.89795'
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

CloudSlowWindIcon.displayName = 'CloudSlowWindIcon';
export default CloudSlowWindIcon;
