import React from 'react';
import config from '../config';

interface ShapeCollectionIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShapeCollectionIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shape-collection)
 * @see {@link https://clicons.dev/icon/shape-collection}
 */
const ShapeCollectionIcon = React.forwardRef<SVGSVGElement, ShapeCollectionIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.88886 9.66294C4.39331 10 5.09554 10 6.5 10C7.90446 10 8.60669 10 9.11114 9.66294C9.32952 9.51702 9.51702 9.32952 9.66294 9.11114C10 8.60669 10 7.90446 10 6.5C10 5.09554 10 4.39331 9.66294 3.88886C9.51702 3.67048 9.32952 3.48298 9.11114 3.33706C8.60669 3 7.90446 3 6.5 3C5.09554 3 4.39331 3 3.88886 3.33706C3.67048 3.48298 3.48298 3.67048 3.33706 3.88886C3 4.39331 3 5.09554 3 6.5C3 7.90446 3 8.60669 3.33706 9.11114C3.48298 9.32952 3.67048 9.51702 3.88886 9.66294Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.809 10H20.191C20.6378 10 21 9.63779 21 9.19098C21 9.06539 20.9708 8.94152 20.9146 8.82918L18.2236 3.44721C18.0866 3.17313 17.8064 3 17.5 3C17.1936 3 16.9134 3.17313 16.7764 3.44721L14.0854 8.82918C14.0292 8.94152 14 9.06539 14 9.19098C14 9.63779 14.3622 10 14.809 10Z'
    }
  ],
  [
    'circle',
    {
      cx: '6.5',
      cy: '17.5',
      r: '3.5'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 15V17.5C20.5 18.9142 20.5 19.6213 20.0607 20.0607C19.6213 20.5 18.9142 20.5 17.5 20.5H15M14.5 14.5L19.5 19.5'
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

ShapeCollectionIcon.displayName = 'ShapeCollectionIcon';
export default ShapeCollectionIcon;
