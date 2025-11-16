import React from 'react';
import config from '../config';

interface SkoolIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SkoolIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/skool)
 * @see {@link https://clicons.dev/icon/skool}
 */
const SkoolIcon = React.forwardRef<SVGSVGElement, SkoolIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 3H12V20H15V14.5H15.9064C16.2723 14.5 16.609 14.6999 16.7843 15.0211L19.2157 19.4789C19.391 19.8001 19.7277 20 20.0936 20H23L19 13L23 8H20C19.6852 8 19.3889 8.14819 19.2 8.4L16.8 11.6C16.6111 11.8518 16.3148 12 16 12H15V3Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.50063 11.0005C4.9056 9.54528 7.66729 10.5005 8.50063 11.0005L10.0006 9.5C10.0006 9.5 8.73595 8 6.00085 8C3.93463 8 1.35357 8.41898 1.35357 11.919C1.35357 15.419 7.70823 14.6943 6.70911 16.9978C6.13523 18.321 3.15757 17.1094 2.15757 16.4428L1 18.7185C1.83333 19.2185 3.90085 20 5.50085 20C7.29193 20 10.0006 18.9128 10.0006 15.7212C10.0006 12.5296 3.99014 12.8348 4.50063 11.0005Z'
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

SkoolIcon.displayName = 'SkoolIcon';
export default SkoolIcon;
