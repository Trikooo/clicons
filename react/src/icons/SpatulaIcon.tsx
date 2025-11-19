import React from 'react';
import config from '../config';

interface SpatulaIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SpatulaIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/spatula)
 * @see {@link https://clicons.dev/icon/spatula}
 */
const SpatulaIcon = React.forwardRef<SVGSVGElement, SpatulaIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.9883 2.3804L17.7472 2.93078C19.0221 3.85525 20.1429 4.97492 21.0683 6.24847L21.6192 7.00668C22.1959 7.80028 22.1094 8.89493 21.4153 9.58834L16.8845 14.1145C16.41 14.5885 15.7289 14.7927 15.0716 14.6579L13.0341 14.2402C12.3768 14.1054 11.6957 14.3095 11.2212 14.7835L4.64801 21.3501C4.25619 21.7598 3.37487 22.4818 2.42256 21.5305C1.5593 20.6681 2.22016 19.7259 2.63037 19.3344L9.20354 12.7679C9.67802 12.2939 9.88238 11.6135 9.74747 10.9568L9.32928 8.92141C9.19437 8.26476 9.39873 7.58432 9.87321 7.11031L14.404 2.58413C15.0981 1.89071 16.1939 1.80433 16.9883 2.3804Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.2207 10.686L17.3751 8.53168'
    }
  ],
  [
    'path',
    {
      d: 'M13.375 8.84143L15.5294 6.68707'
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

SpatulaIcon.displayName = 'SpatulaIcon';
export default SpatulaIcon;
