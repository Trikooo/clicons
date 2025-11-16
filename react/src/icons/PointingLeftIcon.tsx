import React from 'react';
import config from '../config';

interface PointingLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PointingLeftIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pointing-left)
 * @see {@link https://clicons.dev/icon/pointing-left}
 */
const PointingLeftIcon = React.forwardRef<SVGSVGElement, PointingLeftIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.01758 4.49869H8.00963M2.01758 4.49869C2.01758 3.79883 4.00924 2.49127 4.51427 2M2.01758 4.49869C2.01758 5.19855 4.00924 6.50611 4.51427 6.99738'
    }
  ],
  [
    'path',
    {
      d: 'M21.9999 10.8261L21.0513 10.8261C20.4058 10.8261 19.7774 10.6173 19.2594 10.2306L14.3566 6.57049C13.7911 6.14837 13.0895 5.81121 12.4419 6.0899C11.3935 6.54106 10.7124 7.81387 12.2842 9.37179L13.9936 10.9701L3.57057 10.9701C1.52742 11.0263 1.42614 14.3166 3.57057 14.4573L9.51058 14.4573C9.31944 15.9384 10.3629 22.9151 14.7831 21.8982C14.9931 21.8498 15.2062 21.8016 15.4165 21.7545C16.3353 21.5487 17.9727 20.9405 18.93 20.2697C19.9265 19.5714 20.9191 19.8178 21.9999 19.8178'
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

PointingLeftIcon.displayName = 'PointingLeftIcon';
export default PointingLeftIcon;
