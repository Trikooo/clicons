import React from 'react';
import config from '../config';

interface DuaIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DuaIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dua)
 * @see {@link https://clicons.dev/icon/dua}
 */
const DuaIcon = React.forwardRef<SVGSVGElement, DuaIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 13L18.3417 12.3417C17.5896 11.5896 16.3803 11.5578 15.5896 12.2694L12.9931 14.6062C12.361 15.1751 12 15.9856 12 16.8361V21H14.6865C15.5238 21 16.323 20.6501 16.8909 20.0348L21.2044 15.3619C21.7159 14.8077 22 14.0812 22 13.327V6H21C19.8954 6 19 6.89543 19 8V13ZM19 13L16 16'
    }
  ],
  [
    'path',
    {
      d: 'M5 13L5.65826 12.3417C6.41042 11.5896 7.61975 11.5578 8.41041 12.2694L11.0069 14.6062C11.639 15.1751 12 15.9856 12 16.8361V21H9.31349C8.4762 21 7.677 20.6501 7.10908 20.0348L2.79559 15.3619C2.28405 14.8077 2 14.0812 2 13.327V6H3C4.10457 6 5 6.89543 5 8V13ZM5 13L8 16'
    }
  ],
  [
    'path',
    {
      d: 'M15 7.43427C14.4347 8.3725 13.406 9 12.2308 9C10.4465 9 9 7.55354 9 5.76923C9 4.594 9.6275 3.56534 10.5657 3'
    }
  ],
  [
    'path',
    {
      d: 'M14 4H14.009'
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

DuaIcon.displayName = 'DuaIcon';
export default DuaIcon;
