import React from 'react';
import config from '../config';

interface SolarPanel4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SolarPanel4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/solar-panel4)
 * @see {@link https://clicons.dev/icon/solar-panel4}
 */
const SolarPanel4Icon = React.forwardRef<SVGSVGElement, SolarPanel4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.5 9.00005H7.73252C6.63802 9.00005 6.09077 9.00005 5.67127 9.33394C5.25177 9.66783 5.05962 10.2563 4.67531 11.4333L3.85904 13.9333C3.10748 16.2351 2.7317 17.386 3.21864 18.193C3.70558 19.0001 4.7758 19.0001 6.91624 19.0001H17.0838C19.2242 19.0001 20.2944 19.0001 20.7814 18.193C21.2683 17.386 20.8925 16.2351 20.141 13.9333L19.3247 11.4333C18.9404 10.2563 18.7482 9.66783 18.3287 9.33394C17.9092 9.00005 17.362 9.00005 16.2675 9.00005H15'
    }
  ],
  [
    'path',
    {
      d: 'M12 11.5001V19.0001'
    }
  ],
  [
    'path',
    {
      d: 'M20 14H4'
    }
  ],
  [
    'path',
    {
      d: 'M12 19V22M12 22H14M12 22H10'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 2L10 5.5H14L11.5 9'
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

SolarPanel4Icon.displayName = 'SolarPanel4Icon';
export default SolarPanel4Icon;
