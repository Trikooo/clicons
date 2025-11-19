import React from 'react';
import config from '../config';

interface Kaaba2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Kaaba2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/kaaba2)
 * @see {@link https://clicons.dev/icon/kaaba2}
 */
const Kaaba2Icon = React.forwardRef<SVGSVGElement, Kaaba2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.5 22V5C21.5 3.58579 21.5 2.87868 21.0607 2.43934C20.6213 2 19.9142 2 18.5 2H6.5C5.08579 2 4.37868 2 3.93934 2.43934C3.5 2.87868 3.5 3.58579 3.5 5V22'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 17C7.5 16.0572 7.5 15.5858 7.79289 15.2929C8.08579 15 8.55719 15 9.5 15H10.5C11.4428 15 11.9142 15 12.2071 15.2929C12.5 15.5858 12.5 16.0572 12.5 17V22H7.5V17Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 22H22.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 6H21.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 19H7.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 19L21.5 19'
    }
  ],
  [
    'path',
    {
      d: 'M4 9H6M9 9H11M14 9H16M19 9H21'
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

Kaaba2Icon.displayName = 'Kaaba2Icon';
export default Kaaba2Icon;
