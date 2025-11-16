import React from 'react';
import config from '../config';

interface AlienIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlienIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/alien)
 * @see {@link https://clicons.dev/icon/alien}
 */
const AlienIcon = React.forwardRef<SVGSVGElement, AlienIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.33333 10H6.5C6.22386 10 6 10.2239 6 10.5V11.3333C6 12.8061 7.19391 14 8.66667 14H9.5C9.77614 14 10 13.7761 10 13.5V12.6667C10 11.1939 8.80609 10 7.33333 10Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.6667 10H17C17.4714 10 17.7071 10 17.8536 10.1464C18 10.2929 18 10.5286 18 11V11.3333C18 12.8061 16.8061 14 15.3333 14H15C14.5286 14 14.2929 14 14.1464 13.8536C14 13.7071 14 13.4714 14 13V12.6667C14 11.1939 15.1939 10 16.6667 10Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 18H13'
    }
  ],
  [
    'path',
    {
      d: 'M21 11C21 16.5228 15 22 12 22C9 22 3 16.5228 3 11C3 5.47715 7.02944 2 12 2C16.9706 2 21 5.47715 21 11Z'
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

AlienIcon.displayName = 'AlienIcon';
export default AlienIcon;
