import React from 'react';
import config from '../config';

interface RssConnectedIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RssConnectedIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rss-connected)
 * @see {@link https://clicons.dev/icon/rss-connected}
 */
const RssConnectedIcon = React.forwardRef<SVGSVGElement, RssConnectedIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.9915 21C13.7121 21 13.9925 20.9956 13.9925 20.9956C17.4088 20.971 19.2922 20.8099 20.5342 19.7552C22 18.5104 22 16.5069 22 12.5C22 11.1094 22 9.96004 21.9387 9M11.9906 4C7.27213 4 4.91289 4 3.44705 5.2448C2.32426 6.19827 2.0615 7.59687 2 10'
    }
  ],
  [
    'path',
    {
      d: 'M14 7C14 7 15 7 16 9C16 9 19.1765 4 22 3'
    }
  ],
  [
    'path',
    {
      d: 'M2.98242 20H2.9914'
    }
  ],
  [
    'path',
    {
      d: 'M2 16.2349C4.49328 16.2349 6.77053 18.5 6.77053 20.9996M10 20.9996C10 16.5 5.99511 13 2.04522 13'
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

RssConnectedIcon.displayName = 'RssConnectedIcon';
export default RssConnectedIcon;
