import React from 'react';
import config from '../config';

interface PassportValidIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PassportValidIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/passport-valid)
 * @see {@link https://clicons.dev/icon/passport-valid}
 */
const PassportValidIcon = React.forwardRef<SVGSVGElement, PassportValidIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 3.5C7.28595 3.5 4.92893 3.5 3.46447 4.81802C2 6.13604 2 8.25736 2 12.5C2 16.7426 2 18.864 3.46447 20.182C4.92893 21.5 7.28595 21.5 12 21.5C16.714 21.5 19.0711 21.5 20.5355 20.182C22 18.864 22 16.7426 22 12.5C22 11.3538 22 8.5 22 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M5 17C6.20831 14.4189 10.7122 14.2491 12 17M10.5 10C10.5 11.1046 9.60457 12 8.5 12C7.39543 12 6.5 11.1046 6.5 10C6.5 8.89543 7.39543 8 8.5 8C9.60457 8 10.5 8.89543 10.5 10Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 6.5C14 6.5 15 6.5 16 8.5C16 8.5 19.1765 3.5 22 2.5'
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

PassportValidIcon.displayName = 'PassportValidIcon';
export default PassportValidIcon;
