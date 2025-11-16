import React from 'react';
import config from '../config';

interface MoveToIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoveToIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/move-to)
 * @see {@link https://clicons.dev/icon/move-to}
 */
const MoveToIcon = React.forwardRef<SVGSVGElement, MoveToIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.99997 5H19'
    }
  ],
  [
    'path',
    {
      d: 'M4.99997 5H5.00895'
    }
  ],
  [
    'path',
    {
      d: 'M4.99997 11.0039H5.00895'
    }
  ],
  [
    'path',
    {
      d: 'M4.99997 17.0073H5.00895'
    }
  ],
  [
    'path',
    {
      d: 'M8.99997 11.0039H19'
    }
  ],
  [
    'path',
    {
      d: 'M8.99997 17.0074H19M19 17.0074C19.0035 16.7467 18.8202 16.4896 18.5964 16.2998L16.9939 15.0259M19 17.0074C18.9965 17.2588 18.8142 17.5135 18.5964 17.7149L16.9939 19.0002'
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

MoveToIcon.displayName = 'MoveToIcon';
export default MoveToIcon;
