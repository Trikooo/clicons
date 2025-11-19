import React from 'react';
import config from '../config';

interface SortByDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SortByDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sort-by-down)
 * @see {@link https://clicons.dev/icon/sort-by-down}
 */
const SortByDownIcon = React.forwardRef<SVGSVGElement, SortByDownIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 16.3265L16.409 17.8131C17.159 18.6044 17.534 19 18 19C18.466 19 18.841 18.6044 19.591 17.8131L21 16.3265M18 18.9128L18 14.5377C18 12.3042 18 11.1875 17.5532 10.2028C17.1063 9.21804 16.2659 8.48266 14.585 7.01192L14 6.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 6.5C3 5.27489 3 4.66233 3.23842 4.1944C3.44815 3.78279 3.78279 3.44815 4.1944 3.23842C4.66233 3 5.27489 3 6.5 3C7.72511 3 8.33767 3 8.8056 3.23842C9.21721 3.44815 9.55185 3.78279 9.76158 4.1944C10 4.66233 10 5.27489 10 6.5C10 7.72511 10 8.33767 9.76158 8.8056C9.55185 9.21721 9.21721 9.55185 8.8056 9.76158C8.33767 10 7.72511 10 6.5 10C5.27489 10 4.66233 10 4.1944 9.76158C3.78279 9.55185 3.44815 9.21721 3.23842 8.8056C3 8.33767 3 7.72511 3 6.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 17.5C3 16.2749 3 15.6623 3.23842 15.1944C3.44815 14.7828 3.78279 14.4481 4.1944 14.2384C4.66233 14 5.27489 14 6.5 14C7.72511 14 8.33767 14 8.8056 14.2384C9.21721 14.4481 9.55185 14.7828 9.76158 15.1944C10 15.6623 10 16.2749 10 17.5C10 18.7251 10 19.3377 9.76158 19.8056C9.55185 20.2172 9.21721 20.5519 8.8056 20.7616C8.33767 21 7.72511 21 6.5 21C5.27489 21 4.66233 21 4.1944 20.7616C3.78279 20.5519 3.44815 20.2172 3.23842 19.8056C3 19.3377 3 18.7251 3 17.5Z'
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

SortByDownIcon.displayName = 'SortByDownIcon';
export default SortByDownIcon;
