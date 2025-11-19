import React from 'react';
import config from '../config';

interface DiggIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DiggIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/digg)
 * @see {@link https://clicons.dev/icon/digg}
 */
const DiggIcon = React.forwardRef<SVGSVGElement, DiggIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 19H20C20.9428 19 21.4142 19 21.7071 18.7071C22 18.4142 22 17.9428 22 17V16M22 16V11C22 10.0572 22 9.58579 21.7071 9.29289C21.4142 9 20.9428 9 20 9C19.0572 9 18.5858 9 18.2929 9.29289C18 9.58579 18 10.0572 18 11V14C18 14.9428 18 15.4142 18.2929 15.7071C18.5858 16 19.0572 16 20 16H22Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 19H13.5C14.4428 19 14.9142 19 15.2071 18.7071C15.5 18.4142 15.5 17.9428 15.5 17V16M15.5 16V11C15.5 10.0572 15.5 9.58579 15.2071 9.29289C14.9142 9 14.4428 9 13.5 9C12.5572 9 12.0858 9 11.7929 9.29289C11.5 9.58579 11.5 10.0572 11.5 11V14C11.5 14.9428 11.5 15.4142 11.7929 15.7071C12.0858 16 12.5572 16 13.5 16H15.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 9V14C6 14.9428 6 15.4142 5.70711 15.7071C5.41421 16 4.94281 16 4 16C3.05719 16 2.58579 16 2.29289 15.7071C2 15.4142 2 14.9428 2 14V11C2 10.0572 2 9.58579 2.29289 9.29289C2.58579 9 3.05719 9 4 9H6ZM6 9V5'
    }
  ],
  [
    'path',
    {
      d: 'M9 5V6M9 9V16'
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

DiggIcon.displayName = 'DiggIcon';
export default DiggIcon;
