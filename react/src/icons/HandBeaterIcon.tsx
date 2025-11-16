import React from 'react';
import config from '../config';

interface HandBeaterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandBeaterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-beater)
 * @see {@link https://clicons.dev/icon/hand-beater}
 */
const HandBeaterIcon = React.forwardRef<SVGSVGElement, HandBeaterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.91699 21.8262L2.6739 17.5853C2.41158 17.3231 2.44759 16.8882 2.74947 16.6727C4.18235 15.6497 6.14516 15.8121 7.39028 17.0566L7.44596 17.1122C8.69108 18.3567 8.85352 20.3185 7.83004 21.7507C7.61441 22.0524 7.17931 22.0884 6.91699 21.8262Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 17.002L11.502 13.002'
    }
  ],
  [
    'path',
    {
      d: 'M14.998 9.50198H15.007'
    }
  ],
  [
    'path',
    {
      d: 'M14.3631 5.67983C17.7916 3.92938 17.6251 2.68028 18.5622 2.01555C18.8557 1.88862 19.7716 2.46754 20.6767 3.28985C21.7027 4.22211 22.67 5.50263 22.4779 5.99628C21.8543 6.69231 20.5862 6.98319 19.2047 9.52817C17.4362 12.4935 14.9751 13.3921 13.5604 13.9085L13.5243 13.9217C13.2108 14.0362 12.8553 14.003 12.5997 13.7883C12.1727 13.4295 11.844 13.0471 11.552 12.7635C10.4941 11.8001 10.4941 11.5296 10.4941 11.2752C10.5554 10.2461 12.6171 6.74924 14.3631 5.67983Z'
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

HandBeaterIcon.displayName = 'HandBeaterIcon';
export default HandBeaterIcon;
