import React from 'react';
import config from '../config';

interface RainDoubleDropIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RainDoubleDropIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rain-double-drop)
 * @see {@link https://clicons.dev/icon/rain-double-drop}
 */
const RainDoubleDropIcon = React.forwardRef<SVGSVGElement, RainDoubleDropIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 13.3424C2 9.9951 4.73825 6.68726 6.66022 4.77778C7.70404 3.74074 9.29597 3.74074 10.3398 4.77778C12.2617 6.68726 15 9.9951 15 13.3424C15 16.6243 12.5386 20 8.5 20C4.46142 20 2 16.6243 2 13.3424Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 20C19.5386 20 22 16.6243 22 13.3424C22 9.9951 19.2617 6.68726 17.3398 4.77778C16.296 3.74074 14.704 3.74074 13.6602 4.77778'
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

RainDoubleDropIcon.displayName = 'RainDoubleDropIcon';
export default RainDoubleDropIcon;
