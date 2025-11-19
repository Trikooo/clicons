import React from 'react';
import config from '../config';

interface ComingSoonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ComingSoonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/coming-soon)
 * @see {@link https://clicons.dev/icon/coming-soon}
 */
const ComingSoonIcon = React.forwardRef<SVGSVGElement, ComingSoonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 16H3C2.44772 16 2 16.4477 2 17V17.5C2 18.0523 2.44772 18.5 3 18.5H4C4.55228 18.5 5 18.9477 5 19.5V20C5 20.5523 4.55228 21 4 21H2'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 16H9.5C10.0523 16 10.5 16.4477 10.5 17V20C10.5 20.5523 10.0523 21 9.5 21H8.5C7.94772 21 7.5 20.5523 7.5 20V17C7.5 16.4477 7.94772 16 8.5 16Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 16H15C15.5523 16 16 16.4477 16 17V20C16 20.5523 15.5523 21 15 21H14C13.4477 21 13 20.5523 13 20V17C13 16.4477 13.4477 16 14 16Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 16V21L18.5 16V21'
    }
  ],
  [
    'path',
    {
      d: 'M17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 8.5L12 8V5.5'
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

ComingSoonIcon.displayName = 'ComingSoonIcon';
export default ComingSoonIcon;
