import React from 'react';
import config from '../config';

interface SignalLowIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SignalLowIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/signal-low)
 * @see {@link https://clicons.dev/icon/signal-low}
 */
const SignalLowIcon = React.forwardRef<SVGSVGElement, SignalLowIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 10L6 19'
    }
  ],
  [
    'path',
    {
      d: 'M6.80844 9.28111C6.43534 9.76037 6.2488 10 6 10C5.7512 10 5.56466 9.76037 5.19156 9.28112L4.44578 8.32312C3.37255 6.94451 2.83594 6.25521 3.04429 5.68812C3.06552 5.63034 3.0916 5.57458 3.12224 5.52145C3.423 5 4.282 5 6 5C7.718 5 8.577 5 8.87776 5.52145C8.9084 5.57458 8.93448 5.63034 8.95571 5.68812C9.16406 6.25521 8.62745 6.94451 7.55422 8.32312L6.80844 9.28111Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 13V19'
    }
  ],
  [
    'path',
    {
      d: 'M13 19L14 19'
    }
  ],
  [
    'path',
    {
      d: 'M17 19L18 19'
    }
  ],
  [
    'path',
    {
      d: 'M21 19L22 19'
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

SignalLowIcon.displayName = 'SignalLowIcon';
export default SignalLowIcon;
