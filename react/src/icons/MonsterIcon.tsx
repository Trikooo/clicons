import React from 'react';
import config from '../config';

interface MonsterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MonsterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/monster)
 * @see {@link https://clicons.dev/icon/monster}
 */
const MonsterIcon = React.forwardRef<SVGSVGElement, MonsterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 11.5H12.009'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 11.5C16.5 13.433 14.4853 15 12 15C9.51472 15 7.5 13.433 7.5 11.5C7.5 9.567 9.51472 8 12 8C14.4853 8 16.5 9.567 16.5 11.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 18C13.4846 18.3093 12.7787 18.5 12 18.5C11.2213 18.5 10.5154 18.3093 10 18'
    }
  ],
  [
    'path',
    {
      d: 'M12 4C7.30558 4 3.5 7.80558 3.5 12.5C3.5 14.5752 4.24365 16.4767 5.47899 17.9525C6.06977 18.6583 6.5 19.5115 6.5 20.4319C6.5 21.2979 7.20207 22 8.06812 22H15.9319C16.7979 22 17.5 21.2979 17.5 20.4319C17.5 19.5115 17.9302 18.6583 18.521 17.9525C19.7564 16.4767 20.5 14.5752 20.5 12.5C20.5 7.80558 16.6944 4 12 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 5C16.1667 4.1 17 2.24 19 2'
    }
  ],
  [
    'path',
    {
      d: 'M8 5C7.83333 4.1 7 2.24 5 2'
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

MonsterIcon.displayName = 'MonsterIcon';
export default MonsterIcon;
