import React from 'react';
import config from '../config';

interface RssIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RssIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rss)
 * @see {@link https://clicons.dev/icon/rss}
 */
const RssIcon = React.forwardRef<SVGSVGElement, RssIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.9915 20.5C13.7121 20.5 13.9925 20.4956 13.9925 20.4956C17.4088 20.471 19.2922 20.3099 20.5342 19.2552C22 18.0104 22 16.0069 22 12C22 7.99306 22 5.98959 20.5342 4.7448C19.0683 3.5 16.7091 3.5 11.9906 3.5C7.27213 3.5 4.91289 3.5 3.44705 4.7448C2.32426 5.69827 2.0615 7.09687 2 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.98242 19.5H2.9914'
    }
  ],
  [
    'path',
    {
      d: 'M2 15.7349C4.49328 15.7349 6.77053 18 6.77053 20.4996M10 20.4996C10 16 5.99511 12.5 2.04522 12.5'
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

RssIcon.displayName = 'RssIcon';
export default RssIcon;
