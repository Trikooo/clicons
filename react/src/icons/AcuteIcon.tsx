import React from 'react';
import config from '../config';

interface AcuteIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AcuteIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/acute)
 * @see {@link https://clicons.dev/icon/acute}
 */
const AcuteIcon = React.forwardRef<SVGSVGElement, AcuteIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.5958 2.52324C11.3962 2.29824 13.2718 1.82324 13.7721 2.07324M13.7721 2.07324C14.2973 2.39824 14.3973 4.14824 14.5475 4.87324M13.7721 2.07324L3.81773 18.1732C3.81773 18.1732 3.29249 19.0232 3.59264 19.4982C3.81774 20.0232 5.11831 19.9982 5.11831 19.9982H20.5M20.5 19.9982C20.5 19.3982 18.6992 18.1982 18.5241 17.9982M20.5 19.9982C20.5 20.5982 19.0494 21.4482 18.5241 21.9982'
    }
  ],
  [
    'path',
    {
      d: 'M7.49414 12.498C9.36996 12.823 10.8049 13.723 11.6553 15.048C12.6057 16.398 12.7214 18.273 12.1462 19.798'
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

AcuteIcon.displayName = 'AcuteIcon';
export default AcuteIcon;
