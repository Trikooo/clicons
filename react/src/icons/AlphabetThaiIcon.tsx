import React from 'react';
import config from '../config';

interface AlphabetThaiIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlphabetThaiIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/alphabet-thai)
 * @see {@link https://clicons.dev/icon/alphabet-thai}
 */
const AlphabetThaiIcon = React.forwardRef<SVGSVGElement, AlphabetThaiIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 21V14C6 13.371 6.24724 12.8125 6.74172 12.248C7.22967 11.671 8.25411 11.2708 9 11.0472C9.04786 11.0329 9.05246 10.9458 9.00628 10.9257C8.3551 10.6418 7.06568 10.2569 6.5674 9.59877C6.55409 9.58118 6.54743 9.57239 6.54632 9.57095C6.54521 9.5695 6.50377 9.5164 6.4209 9.41019C6 8.87077 6 7.80847 6 7.80847C6 5.93718 7.27312 4.43992 8.75497 3.69556C9.65563 3.23185 10.7241 3 11.9603 3C13.0375 3 14.0353 3.20161 14.9536 3.60484C16.9456 4.43574 18 6.43605 18 8.71573V21'
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

AlphabetThaiIcon.displayName = 'AlphabetThaiIcon';
export default AlphabetThaiIcon;
