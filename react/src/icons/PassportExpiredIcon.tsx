import React from 'react';
import config from '../config';

interface PassportExpiredIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PassportExpiredIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/passport-expired)
 * @see {@link https://clicons.dev/icon/passport-expired}
 */
const PassportExpiredIcon = React.forwardRef<SVGSVGElement, PassportExpiredIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 11V13C22 17.2426 22 19.364 20.5355 20.682C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.682C2 19.364 2 17.2426 2 13C2 8.75736 2 6.63604 3.46447 5.31802C4.92893 4 7.28595 4 12 4H13'
    }
  ],
  [
    'path',
    {
      d: 'M5 17.5C6.20831 14.9189 10.7122 14.7491 12 17.5M10.5 10.5C10.5 11.6046 9.60457 12.5 8.5 12.5C7.39543 12.5 6.5 11.6046 6.5 10.5C6.5 9.39543 7.39543 8.5 8.5 8.5C9.60457 8.5 10.5 9.39543 10.5 10.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 2L19 5M19 5L22 8M19 5L16 8M19 5L22 2'
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

PassportExpiredIcon.displayName = 'PassportExpiredIcon';
export default PassportExpiredIcon;
