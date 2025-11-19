import React from 'react';
import config from '../config';

interface SmartWatch2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SmartWatch2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/smart-watch2)
 * @see {@link https://clicons.dev/icon/smart-watch2}
 */
const SmartWatch2Icon = React.forwardRef<SVGSVGElement, SmartWatch2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 11C7 9.11438 7 8.17157 7.58579 7.58579C8.17157 7 9.11438 7 11 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 14.8856 17 15.8284 16.4142 16.4142C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 16.4142C7 15.8284 7 14.8856 7 13V11Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 7C8.5 7 9.18904 5.66076 9.34422 4.00093C9.42833 3.10125 9.47038 2.6514 9.72393 2.39673C9.97748 2.14207 10.283 2.11215 10.8942 2.05231C11.217 2.0207 11.5863 2 12 2C12.4137 2 12.783 2.0207 13.1058 2.05231C13.717 2.11215 14.0225 2.14207 14.2761 2.39673C14.5296 2.6514 14.5717 3.10125 14.6558 4.00093C14.811 5.66076 15.5 7 15.5 7'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 17C15.5 17 14.811 18.3392 14.6558 19.9991C14.5717 20.8988 14.5296 21.3486 14.2761 21.6033C14.0225 21.8579 13.717 21.8879 13.1058 21.9477C12.783 21.9793 12.4137 22 12 22C11.5863 22 11.217 21.9793 10.8942 21.9477C10.283 21.8879 9.97748 21.8579 9.72393 21.6033C9.47038 21.3486 9.42833 20.8988 9.34422 19.9991C9.18904 18.3392 8.5 17 8.5 17'
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

SmartWatch2Icon.displayName = 'SmartWatch2Icon';
export default SmartWatch2Icon;
