import React from 'react';
import config from '../config';

interface WatermelonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WatermelonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/watermelon)
 * @see {@link https://clicons.dev/icon/watermelon}
 */
const WatermelonIcon = React.forwardRef<SVGSVGElement, WatermelonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.8868 4.07654C17.1488 5.55202 17.9211 7.53337 17.9211 9.71174C17.9211 14.272 14.5364 17.9688 10.3612 17.9688C8.04167 17.9688 6.03867 16.9089 4.67822 15.2242'
    }
  ],
  [
    'path',
    {
      d: 'M16.4175 3.57276L13.3562 6.41533C13.2666 6.49855 13.2726 6.64182 13.3537 6.73342C14.0308 7.49886 14.048 9.14294 13.2715 10.1706C12.4455 11.2636 11.2161 11.1153 10.774 10.8878L10.5235 11.5915C10.4287 11.8578 10.1611 12.0219 9.88068 11.9858L8.23877 11.7744C8.11395 11.7583 7.98884 11.8018 7.90094 11.8918L4.97952 14.8835L3.58065 16.3786C2.72253 17.2958 2.8051 18.7534 3.9034 19.3631C7.37659 21.2913 12.9566 22.3318 17.8425 17.7359C22.3576 13.0699 21.2088 7.40772 19.431 3.95709C18.844 2.81784 17.3568 2.70057 16.4175 3.57276Z'
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

WatermelonIcon.displayName = 'WatermelonIcon';
export default WatermelonIcon;
