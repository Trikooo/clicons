import React from 'react';
import config from '../config';

interface EarRings2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EarRings2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ear-rings2)
 * @see {@link https://clicons.dev/icon/ear-rings2}
 */
const EarRings2Icon = React.forwardRef<SVGSVGElement, EarRings2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 14.0056C7.6 14.0056 6.4 18.0056 10 18.0056'
    }
  ],
  [
    'path',
    {
      d: 'M14 14.0056C17.6 14.0056 16.4 18.0056 20 18.0056'
    }
  ],
  [
    'path',
    {
      d: 'M7 20.9998C8.65685 20.9998 10 18.5382 10 15.5016C10 12.4651 8.65685 10.0035 7 10.0035C5.34315 10.0035 4 12.4651 4 15.5016C4 18.5382 5.34315 20.9998 7 20.9998Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 20.9999C18.6569 20.9999 20 18.5383 20 15.5018C20 12.4653 18.6569 10.0037 17 10.0037C15.3431 10.0037 14 12.4653 14 15.5018C14 18.5383 15.3431 20.9999 17 20.9999Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.95511 7.2344C9.60461 7.03294 9.06061 6.71307 8.93297 4.78798C8.81979 3.08095 7.26883 2.90969 6.67606 3.03009C6.11908 3.14328 5.07565 3.73133 5.00769 4.95443C4.96211 5.77417 5.47047 6.56049 6.67279 7.03896C6.87541 7.1196 7.0183 7.30991 7.0183 7.52792V9.76224'
    }
  ],
  [
    'path',
    {
      d: 'M19.937 7.2344C19.5865 7.03294 19.0425 6.71307 18.9149 4.78798C18.8017 3.08095 17.2508 2.90969 16.658 3.03009C16.101 3.14328 15.0576 3.73133 14.9896 4.95443C14.944 5.77417 15.4524 6.56049 16.6547 7.03896C16.8573 7.1196 17.0002 7.30991 17.0002 7.52792V9.76224'
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

EarRings2Icon.displayName = 'EarRings2Icon';
export default EarRings2Icon;
