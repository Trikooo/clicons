import React from 'react';
import config from '../config';

interface DimSum2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DimSum2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dim-sum2)
 * @see {@link https://clicons.dev/icon/dim-sum2}
 */
const DimSum2Icon = React.forwardRef<SVGSVGElement, DimSum2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.5 11.5L7 12.5M10.5 11.5L11 12.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 6.5L17 7.5'
    }
  ],
  [
    'path',
    {
      d: 'M9 22C12.866 22 16 19.3137 16 16C16 14.5985 15.4394 13.1304 14.5 11.9028C12.5622 9.57474 12.0035 7.80237 12 7C11.9412 8.60728 9.9849 9.47735 9 8C8.0151 9.47735 6.05882 8.60728 6 7C5.99651 7.80237 5.43778 9.57474 3.5 11.9028C2.56057 13.1304 2 14.5985 2 16C2 19.3137 5.13401 22 9 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 5.01625C11.8344 3.62313 12.11 2.56899 12.1124 2C12.1706 3.61599 14.1049 4.49076 15.0787 3.00542C16.0525 4.49076 17.9868 3.61599 18.045 2C18.0484 2.80672 18.6009 4.58869 20.5169 6.9293C21.4457 8.16365 22 9.6397 22 11.0487C22 13.0987 20.8268 14.9099 19.0337 16'
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

DimSum2Icon.displayName = 'DimSum2Icon';
export default DimSum2Icon;
