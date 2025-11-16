import React from 'react';
import config from '../config';

interface DatevIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * @name DatevIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/datev)
 * @see {@link https://clicons.dev/icon/datev}
 */
const DatevIcon = React.forwardRef<SVGSVGElement, DatevIconProps>(
  ({ size, color, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M1.25 14.5V9.5H2.25C3.63071 9.5 4.75 10.6193 4.75 12C4.75 13.3807 3.63071 14.5 2.25 14.5H1.25Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.75 14.5L7.75 9.5L9.75 14.5H8.03571'
    }
  ],
  [
    'path',
    {
      d: 'M18.75 9.5L20.75 14.5L22.75 9.5H21.0357'
    }
  ],
  [
    'path',
    {
      d: 'M10.25 9.5H11.75M13.25 9.5H11.75M11.75 9.5V14.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.25 14.5H14.75V12M17.25 9.5H14.75V12M14.75 12H17.25'
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
        if (!processedAttrs.fill) processedAttrs.fill = finalColor;
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

DatevIcon.displayName = 'DatevIcon';
export default DatevIcon;
