import React from 'react';
import config from '../config';

interface DressingTable3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DressingTable3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dressing-table3)
 * @see {@link https://clicons.dev/icon/dressing-table3}
 */
const DressingTable3Icon = React.forwardRef<SVGSVGElement, DressingTable3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 15C2 14.0572 2 13.5858 2.29289 13.2929C2.58579 13 3.05719 13 4 13H20C20.9428 13 21.4142 13 21.7071 13.2929C22 13.5858 22 14.0572 22 15V17C22 17.9428 22 18.4142 21.7071 18.7071C21.4142 19 20.9428 19 20 19H4C3.05719 19 2.58579 19 2.29289 18.7071C2 18.4142 2 17.9428 2 17V15Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 16L13 16'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 19C18.7 20.6 19.5 21.6667 20 22M4.5 19C5.3 20.6 4.5 21.6667 4 22'
    }
  ],
  [
    'path',
    {
      d: 'M4 13V2'
    }
  ],
  [
    'path',
    {
      d: 'M20 13V2'
    }
  ],
  [
    'path',
    {
      d: 'M4 3.50005L8.08579 3.50003C8.28215 3.50003 8.38034 3.50003 8.4645 3.4688C8.54867 3.43757 8.63373 3.36436 8.80385 3.21795C10.6907 1.59404 13.3093 1.59403 15.1961 3.21791C15.3663 3.36432 15.4513 3.43753 15.5355 3.46876C15.6197 3.49999 15.7178 3.49999 15.9142 3.49999H20'
    }
  ],
  [
    'path',
    {
      d: 'M9 7L10 6'
    }
  ],
  [
    'path',
    {
      d: 'M10 9.5L12 7.5'
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

DressingTable3Icon.displayName = 'DressingTable3Icon';
export default DressingTable3Icon;
