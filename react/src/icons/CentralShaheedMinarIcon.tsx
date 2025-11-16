import React from 'react';
import config from '../config';

interface CentralShaheedMinarIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CentralShaheedMinarIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/central-shaheed-minar)
 * @see {@link https://clicons.dev/icon/central-shaheed-minar}
 */
const CentralShaheedMinarIcon = React.forwardRef<SVGSVGElement, CentralShaheedMinarIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 22V10.2014C3 10.0655 3.13111 9.96866 3.25997 10.0094L6.35997 10.9896C6.4433 11.0159 6.5 11.0937 6.5 11.1816V22'
    }
  ],
  [
    'path',
    {
      d: 'M21 21.9999V10.2012C21 10.0653 20.8689 9.96853 20.74 10.0093L17.64 10.9895C17.5567 11.0158 17.5 11.0935 17.5 11.1814V21.9999'
    }
  ],
  [
    'path',
    {
      d: 'M9 21.9999V7.99988H15V21.9999'
    }
  ],
  [
    'path',
    {
      d: 'M2 21.9999L22 21.9999'
    }
  ],
  [
    'path',
    {
      d: 'M9 7.99988L7.17245 3.31611C6.79764 2.25369 6.99125 1.99988 8.17652 1.99988H15.8235C17.0087 1.99988 17.2024 2.25369 16.8275 3.31611L15 7.99988'
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

CentralShaheedMinarIcon.displayName = 'CentralShaheedMinarIcon';
export default CentralShaheedMinarIcon;
