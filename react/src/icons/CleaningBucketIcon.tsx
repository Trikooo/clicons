import React from 'react';
import config from '../config';

interface CleaningBucketIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CleaningBucketIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cleaning-bucket)
 * @see {@link https://clicons.dev/icon/cleaning-bucket}
 */
const CleaningBucketIcon = React.forwardRef<SVGSVGElement, CleaningBucketIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 9H19.9948C20.4907 9 20.7387 9 20.8843 9.16028C21.0299 9.32055 21.0108 9.57261 20.9728 10.0767L20.3518 18.3068C20.2196 20.0588 20.1535 20.9349 19.5893 21.4674C19.0252 22 18.1633 22 16.4396 22H11.9354C10.2116 22 9.34972 22 8.78559 21.4674C7.94616 20.675 8.08069 19.0693 8 18'
    }
  ],
  [
    'path',
    {
      d: 'M11 8.90909V14.3636C11 16.0778 11 16.9349 10.4142 17.4675C9.82843 18 8.88562 18 7 18C5.11438 18 4.17157 18 3.58579 17.4675C3 16.9349 3 16.0778 3 14.3636V13.4545C3 10.8832 3 9.5976 3.87868 8.7988C4.75736 8 6.17157 8 9 8H10C10.4714 8 10.7071 8 10.8536 8.13313C11 8.26627 11 8.48054 11 8.90909Z'
    }
  ],
  [
    'path',
    {
      d: 'M19 9C19 5.13401 16.75 2 13.9746 2C11.4428 2 9.34836 4.60771 9 8'
    }
  ],
  [
    'path',
    {
      d: 'M3 14H11'
    }
  ],
  [
    'path',
    {
      d: 'M11 13H20'
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

CleaningBucketIcon.displayName = 'CleaningBucketIcon';
export default CleaningBucketIcon;
