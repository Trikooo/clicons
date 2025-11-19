import React from 'react';
import config from '../config';

interface ToolsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ToolsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tools)
 * @see {@link https://clicons.dev/icon/tools}
 */
const ToolsIcon = React.forwardRef<SVGSVGElement, ToolsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13 11L18 6'
    }
  ],
  [
    'path',
    {
      d: 'M19 7L17 5L19.5 3.5L20.5 4.5L19 7Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.02513 8.97487C3.01416 7.96391 2.75095 6.48836 3.23548 5.23548L4.65748 6.65748H6.65748V4.65748L5.23548 3.23548C6.48836 2.75095 7.96391 3.01416 8.97487 4.02513C9.98621 5.03647 10.2493 6.51274 9.76398 7.76593L16.2341 14.236C17.4873 13.7507 18.9635 14.0138 19.9749 15.0251C20.9858 16.0361 21.2491 17.5116 20.7645 18.7645L19.3425 17.3425L17.3425 17.3425V19.3425L18.7645 20.7645C17.5116 21.2491 16.0361 20.9858 15.0251 19.9749C14.0145 18.9643 13.7511 17.4895 14.2349 16.2369L7.76312 9.76507C6.51053 10.2489 5.03571 9.98546 4.02513 8.97487Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.203 14.5L6.59897 20.1041C6.07115 20.6319 5.2154 20.6319 4.68758 20.1041L3.89586 19.3124C3.36805 18.7846 3.36805 17.9288 3.89586 17.401L9.49994 11.7969'
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

ToolsIcon.displayName = 'ToolsIcon';
export default ToolsIcon;
