import React from 'react';
import config from '../config';

interface TreadmillIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TreadmillIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/treadmill)
 * @see {@link https://clicons.dev/icon/treadmill}
 */
const TreadmillIcon = React.forwardRef<SVGSVGElement, TreadmillIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.1913 21H2.93168C2.35308 21 2.03614 20.5214 2.00291 20.0152C1.97055 19.5222 2.20738 19.003 2.7338 18.8747L17.9482 15.106C22.205 14.0681 23.3638 21 20.1913 21Z'
    }
  ],
  [
    'path',
    {
      d: 'M19 18H19.009'
    }
  ],
  [
    'path',
    {
      d: 'M22 2C21.6994 2.90192 21.5175 4.14866 20.8331 4.83307C20.4992 5.16693 20.0337 5.3221 19.1026 5.63246L15 7'
    }
  ],
  [
    'path',
    {
      d: 'M15 16L20 5.5'
    }
  ],
  [
    'path',
    {
      d: 'M6 21L5 22'
    }
  ],
  [
    'path',
    {
      d: 'M18 21V22'
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

TreadmillIcon.displayName = 'TreadmillIcon';
export default TreadmillIcon;
