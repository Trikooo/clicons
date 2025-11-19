import React from 'react';
import config from '../config';

interface Archive3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Archive3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/archive3)
 * @see {@link https://clicons.dev/icon/archive3}
 */
const Archive3Icon = React.forwardRef<SVGSVGElement, Archive3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 8V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V8'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 3H4.5C3.56538 3 3.09808 3 2.75 3.20096C2.52197 3.33261 2.33261 3.52197 2.20096 3.75C2 4.09808 2 4.56538 2 5.5C2 6.43462 2 6.90192 2.20096 7.25C2.33261 7.47803 2.52197 7.66739 2.75 7.79904C3.09808 8 3.56538 8 4.5 8H19.5C20.4346 8 20.9019 8 21.25 7.79904C21.478 7.66739 21.6674 7.47803 21.799 7.25C22 6.90192 22 6.43462 22 5.5C22 4.56538 22 4.09808 21.799 3.75C21.6674 3.52197 21.478 3.33261 21.25 3.20096C20.9019 3 20.4346 3 19.5 3Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 11H14'
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

Archive3Icon.displayName = 'Archive3Icon';
export default Archive3Icon;
