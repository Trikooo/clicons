import React from 'react';
import config from '../config';

interface SmartPhone4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SmartPhone4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/smart-phone4)
 * @see {@link https://clicons.dev/icon/smart-phone4}
 */
const SmartPhone4Icon = React.forwardRef<SVGSVGElement, SmartPhone4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.0483 16.4922C20.2541 15.3405 21 13.7495 21 11.9922C21 10.2348 20.2541 8.64384 19.0483 7.49219M17 9.74219C17.6029 10.318 17.9759 11.1135 17.9759 11.9922C17.9759 12.8709 17.6029 13.6664 17 14.2422'
    }
  ],
  [
    'path',
    {
      d: 'M16 7C16 4.64298 16 3.46447 15.2678 2.73223C14.5355 2 13.357 2 11 2H8C5.64298 2 4.46447 2 3.73223 2.73223C3 3.46447 3 4.64298 3 7V17C3 19.357 3 20.5355 3.73223 21.2678C4.46447 22 5.64298 22 8 22H11C13.357 22 14.5355 22 15.2678 21.2678C16 20.5355 16 19.357 16 17'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 2H7.5L8 3H11L11.5 2Z'
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

SmartPhone4Icon.displayName = 'SmartPhone4Icon';
export default SmartPhone4Icon;
