import React from 'react';
import config from '../config';

interface EidMubarakIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EidMubarakIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/eid-mubarak)
 * @see {@link https://clicons.dev/icon/eid-mubarak}
 */
const EidMubarakIcon = React.forwardRef<SVGSVGElement, EidMubarakIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 11.8049C3 17.1594 7.34065 21.5 12.6951 21.5C17.101 21.5 20.8204 18.5611 22 14.5367C20.5791 15.5691 18.8306 16.1779 16.94 16.1779C12.1804 16.1779 8.32208 12.3196 8.32208 7.56005C8.32208 5.66937 8.93094 3.9209 9.96326 2.5C5.9389 3.67959 3 7.39904 3 11.8049Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.7503 8.5C11.3263 5.5 15.4612 4 16.4999 2.5C17.5388 4 21.6737 5.5 19.2497 8.5M13.7503 8.5H19.2497M13.7503 8.5V15.5M19.2497 8.5V15.5'
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

EidMubarakIcon.displayName = 'EidMubarakIcon';
export default EidMubarakIcon;
