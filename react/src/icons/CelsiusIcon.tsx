import React from 'react';
import config from '../config';

interface CelsiusIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CelsiusIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/celsius)
 * @see {@link https://clicons.dev/icon/celsius}
 */
const CelsiusIcon = React.forwardRef<SVGSVGElement, CelsiusIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '5',
      cy: '6',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M21 7C20.9557 6.3469 20.8561 5.88667 20.6321 5.5C20.3679 5.04394 19.9878 4.66523 19.5301 4.40192C18.8315 4 17.8936 4 16.0177 4C14.1419 4 13.2039 4 12.5053 4.40192C12.0476 4.66523 11.6676 5.04394 11.4033 5.5C11 6.19615 11 7.13077 11 9V15C11 16.8692 11 17.8038 11.4033 18.5C11.6676 18.9561 12.0476 19.3348 12.5053 19.5981C13.2039 20 14.1419 20 16.0177 20C17.8936 20 18.8315 20 19.5301 19.5981C19.9878 19.3348 20.3679 18.9561 20.6321 18.5C20.8561 18.1133 20.9557 17.6531 21 17'
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

CelsiusIcon.displayName = 'CelsiusIcon';
export default CelsiusIcon;
