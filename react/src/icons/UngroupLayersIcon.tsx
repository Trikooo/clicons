import React from 'react';
import config from '../config';

interface UngroupLayersIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UngroupLayersIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ungroup-layers)
 * @see {@link https://clicons.dev/icon/ungroup-layers}
 */
const UngroupLayersIcon = React.forwardRef<SVGSVGElement, UngroupLayersIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.6497 8.48045L9.56106 9.01321C8.18702 9.68563 7.5 10.0218 7.5 10.5C7.5 10.9782 8.18702 11.3144 9.56106 11.9868L10.6497 12.5195C11.3042 12.8398 11.6315 13 12 13C12.3685 13 12.6958 12.8398 13.3503 12.5195L14.4389 11.9868C15.813 11.3144 16.5 10.9782 16.5 10.5C16.5 10.0218 15.813 9.68563 14.4389 9.01321L13.3503 8.48045C12.6958 8.16015 12.3685 8 12 8C11.6315 8 11.3042 8.16015 10.6497 8.48045Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 13.5C16.5 13.9782 15.813 14.3144 14.4389 14.9868L13.3503 15.5195C12.6958 15.8398 12.3685 16 12 16C11.6315 16 11.3042 15.8398 10.6497 15.5195L9.56106 14.9868C8.18702 14.3144 7.5 13.9782 7.5 13.5'
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

UngroupLayersIcon.displayName = 'UngroupLayersIcon';
export default UngroupLayersIcon;
