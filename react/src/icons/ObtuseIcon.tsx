import React from 'react';
import config from '../config';

interface ObtuseIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ObtuseIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/obtuse)
 * @see {@link https://clicons.dev/icon/obtuse}
 */
const ObtuseIcon = React.forwardRef<SVGSVGElement, ObtuseIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22.0007 17C22.0007 17.5602 19.9999 19 19.9999 19M22.0007 17C22.0007 16.4398 19.9999 15 19.9999 15M22.0007 17H11.5039C10.2864 17 9.6776 17 9.19076 16.6953C8.70393 16.3905 8.43793 15.8429 7.90594 14.7478L2.70815 4.04763M2.70815 4.04763C2.23858 4.32009 2 6.70598 2 6.70598M2.70815 4.04763C3.17772 3.77517 5.35295 4.76046 5.35295 4.76046'
    }
  ],
  [
    'path',
    {
      d: 'M6 10.8027C6.88252 10.2922 7.90714 10 9 10C12.3137 10 15 12.6863 15 16C15 16.3407 14.9716 16.6748 14.917 17'
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

ObtuseIcon.displayName = 'ObtuseIcon';
export default ObtuseIcon;
