import React from 'react';
import config from '../config';

interface RukuIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RukuIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ruku)
 * @see {@link https://clicons.dev/icon/ruku}
 */
const RukuIcon = React.forwardRef<SVGSVGElement, RukuIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 7.76239L18.3883 7.98862C19.7866 8.12106 21 7.08098 21 5.74989C21 4.50731 19.9365 3.5 18.6247 3.5H16'
    }
  ],
  [
    'path',
    {
      d: 'M12.5911 6.5L10.5207 10.3833V14.8978M10.5207 14.8978V18.5C7.28541 18.5 5.34681 17.8333 4 17.5V9.60937C4 5.68298 7.21707 2.5 11.1855 2.5C12.7479 2.5 13.9299 2.69092 14.7573 2.91951C15.6883 3.17674 16.2316 4.01566 16.4212 4.9535C16.5591 5.6359 16.5158 6.34727 16.2934 7.0075L10.5207 14.8978Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 18.5V21.5M9 21.5H8C7.05719 21.5 6.58579 21.5 6.29289 21.2071C6 20.9142 6 20.4428 6 19.5V18.5M9 21.5H10.5'
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

RukuIcon.displayName = 'RukuIcon';
export default RukuIcon;
