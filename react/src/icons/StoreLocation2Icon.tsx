import React from 'react';
import config from '../config';

interface StoreLocation2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StoreLocation2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/store-location2)
 * @see {@link https://clicons.dev/icon/store-location2}
 */
const StoreLocation2Icon = React.forwardRef<SVGSVGElement, StoreLocation2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.97659 10.5146V15.009C2.97659 17.8339 2.97659 19.2463 3.85624 20.1239C4.73588 21.0015 6.15165 21.0015 8.98318 21.0015H12.9876'
    }
  ],
  [
    'path',
    {
      d: 'M6.98148 17.0066H10.9859'
    }
  ],
  [
    'path',
    {
      d: 'M18.4941 13.5107C20.4292 13.5107 21.998 15.0464 21.998 16.9408C21.998 19.0836 19.8799 20.1371 18.8695 21.7433C18.6542 22.0857 18.3496 22.0857 18.1187 21.7433C17.0768 20.1981 14.9903 19.0389 14.9903 16.9408C14.9903 15.0464 16.559 13.5107 18.4941 13.5107Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.4942 17.0066H18.5032'
    }
  ],
  [
    'path',
    {
      d: 'M17.7957 2.00254L6.14986 2.03002C4.41169 1.94542 3.96603 3.2116 3.96603 3.83056C3.96603 4.38414 3.89058 5.19117 2.82527 6.70798C1.75996 8.22478 1.84001 8.67537 2.44074 9.72544C2.93931 10.5969 4.20744 10.9374 4.86865 10.9946C6.96886 11.0398 7.99068 9.32381 7.99068 8.1178C9.03254 11.1481 11.9956 11.1481 13.3158 10.8016C14.6386 10.4545 15.7717 9.2118 16.0391 8.1178C16.195 9.47735 16.6682 10.2707 18.0663 10.8158C19.5145 11.3805 20.7599 10.5174 21.3848 9.9642C22.0097 9.41096 22.4107 8.18278 21.2968 6.83288C20.5286 5.90195 20.2084 5.02494 20.1033 4.11599C20.0423 3.58931 19.9888 3.02336 19.5972 2.66323C19.0248 2.13691 18.2036 1.97722 17.7957 2.00254Z'
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

StoreLocation2Icon.displayName = 'StoreLocation2Icon';
export default StoreLocation2Icon;
