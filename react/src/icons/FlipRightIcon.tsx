import React from 'react';
import config from '../config';

interface FlipRightIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FlipRightIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/flip-right)
 * @see {@link https://clicons.dev/icon/flip-right}
 */
const FlipRightIcon = React.forwardRef<SVGSVGElement, FlipRightIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 9.66676V14.3334M16.5 3.01509C16.0004 2.99793 15.5001 2.99705 15 2.99855M16.5 20.9849C16.0004 21.0021 15.5001 21.003 15 21.0015M19.2547 3.53709C20.213 4.02122 20.9914 4.80249 21.4718 5.76305M21.5 18.1797C21.0221 19.1665 20.232 19.9692 19.2547 20.4629'
    }
  ],
  [
    'path',
    {
      d: 'M12 5.5049C12 3.54683 11.3622 3.00683 9.5 3.00683C6.96832 3.00683 4.04633 2.7569 2.60289 5.25509C2 6.29851 2 7.69935 2 10.501V13.4987C2 16.3004 2 17.7012 2.60289 18.7447C4.04633 21.2429 6.96832 20.9929 9.5 20.9929C11.3622 20.9929 12 20.4529 12 18.4949V5.5049Z'
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

FlipRightIcon.displayName = 'FlipRightIcon';
export default FlipRightIcon;
