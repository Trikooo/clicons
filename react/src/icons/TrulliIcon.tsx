import React from 'react';
import config from '../config';

interface TrulliIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TrulliIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/trulli)
 * @see {@link https://clicons.dev/icon/trulli}
 */
const TrulliIcon = React.forwardRef<SVGSVGElement, TrulliIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.67201 10.5471L7.47975 5.84674C9.55727 3.28222 10.596 1.99995 12.0001 1.99995C13.4042 1.99995 14.443 3.28222 16.5205 5.84674L20.3282 10.5471C20.8408 11.1798 21.097 11.4961 20.9664 11.748C20.8357 12 20.4154 12 19.5748 12H4.4254C3.5848 12 3.1645 12 3.03386 11.748C2.90322 11.4961 3.15949 11.1798 3.67201 10.5471Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.00012 8.50764C9.32819 9.40699 10.8212 5.23135 13.5795 7.91038C15.0001 9.29003 16.4165 9.20495 18.0001 8.50764'
    }
  ],
  [
    'path',
    {
      d: 'M10.0002 21.9999V17.9999C10.0002 16.8953 10.8957 15.9999 12.0002 15.9999C13.1048 15.9999 14.0002 16.8953 14.0002 17.9999V21.9999'
    }
  ],
  [
    'path',
    {
      d: 'M19.5002 11.9999L19.5002 19.9999C19.5002 20.9427 19.5002 21.4141 19.2074 21.707C18.9145 21.9999 18.4431 21.9999 17.5002 21.9999L6.50024 21.9999C5.55743 21.9999 5.08603 21.9999 4.79314 21.707C4.50024 21.4141 4.50024 20.9427 4.50024 19.9999L4.50024 11.9999'
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

TrulliIcon.displayName = 'TrulliIcon';
export default TrulliIcon;
