import React from 'react';
import config from '../config';

interface SecurityBlockIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SecurityBlockIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/security-block)
 * @see {@link https://clicons.dev/icon/security-block}
 */
const SecurityBlockIcon = React.forwardRef<SVGSVGElement, SecurityBlockIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.8598 15.8599C20.5537 14.5522 21 13.0186 21 11.2371L21 7.74821C21 6.34255 21 5.63972 20.5504 4.91385C20.1008 4.18797 19.6368 3.95712 18.7088 3.4954C16.8165 2.55388 14.5009 2.00006 12 2.00006C10.1475 2.00006 8.3966 2.30394 6.84414 2.8442M4.1416 4.14166C3.8764 4.33979 3.6614 4.57189 3.4496 4.91385C3 5.63972 3 6.34254 3 7.7482V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4339C10.9067 21.8113 11.2735 22.0001 12 22.0001C12.7265 22.0001 13.0933 21.8113 13.8269 21.4339C15.0804 20.789 16.7679 19.734 18.1912 18.1913'
    }
  ],
  [
    'path',
    {
      d: 'M2 2.00006L22 22.0001'
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

SecurityBlockIcon.displayName = 'SecurityBlockIcon';
export default SecurityBlockIcon;
