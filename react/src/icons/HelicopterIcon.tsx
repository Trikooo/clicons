import React from 'react';
import config from '../config';

interface HelicopterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HelicopterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/helicopter)
 * @see {@link https://clicons.dev/icon/helicopter}
 */
const HelicopterIcon = React.forwardRef<SVGSVGElement, HelicopterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 4L14 8'
    }
  ],
  [
    'path',
    {
      d: 'M14.1838 7.82217L7.05164 8.04637C6.33648 8.06885 5.9789 8.08009 5.6717 7.94382C5.08379 7.68303 4.84517 7.06182 4.58224 6.51632C4.28874 5.9074 3.73021 6.00588 3.15095 6.00588C2.53725 6.00588 2.23041 6.00588 2.07897 6.21415C1.92753 6.42241 2.01183 6.72847 2.18043 7.34059L2.23713 7.54646C2.52367 8.58683 2.66695 9.10701 3.01257 9.48147C3.3582 9.85594 3.85296 10.027 4.84247 10.3692L9.16779 11.8648C10.0835 12.1814 10.5514 12.5853 11.0192 13.4588C11.7405 14.8054 12.1011 15.4788 12.6253 15.957C13.0094 16.3073 13.454 16.5787 13.9357 16.7568C14.5933 17 15.3359 17 16.8209 17H20.7356C21.6061 17 22 16.4839 22 15.6884C22 14.1725 22 13.4145 21.8765 12.7899C21.3762 10.2594 19.4337 8.30451 16.9803 7.86242C16.3748 7.7533 15.6444 7.77626 14.1838 7.82217Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 13.5H19C16.2386 13.5 14 11.2614 14 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 20H14M21 20H19M19 20L20 17M19 20H14M14 20L15 17'
    }
  ],
  [
    'path',
    {
      d: 'M11 4H17'
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

HelicopterIcon.displayName = 'HelicopterIcon';
export default HelicopterIcon;
