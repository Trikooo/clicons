import React from 'react';
import config from '../config';

interface TrafficLightIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TrafficLightIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/traffic-light)
 * @see {@link https://clicons.dev/icon/traffic-light}
 */
const TrafficLightIcon = React.forwardRef<SVGSVGElement, TrafficLightIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.5 6.5C13.5 7.32843 12.8284 8 12 8C11.1716 8 10.5 7.32843 10.5 6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 12.5C13.5 13.3284 12.8284 14 12 14C11.1716 14 10.5 13.3284 10.5 12.5C10.5 11.6716 11.1716 11 12 11C12.8284 11 13.5 11.6716 13.5 12.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 17C10.1308 17 9.19615 17 8.5 16.5981C8.04394 16.3348 7.66523 15.9561 7.40192 15.5C7 14.8038 7 13.8692 7 12L7 7C7 5.13077 7 4.19615 7.40192 3.5C7.66523 3.04394 8.04394 2.66523 8.5 2.40192C9.19615 2 10.1308 2 12 2C13.8692 2 14.8038 2 15.5 2.40192C15.9561 2.66523 16.3348 3.04394 16.5981 3.5C17 4.19615 17 5.13077 17 7V12C17 13.8692 17 14.8038 16.5981 15.5C16.3348 15.9561 15.9561 16.3348 15.5 16.5981C14.8038 17 13.8692 17 12 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 17V22'
    }
  ],
  [
    'path',
    {
      d: 'M7 8L5.95617 7.12348C4.64147 6.0195 3.98413 5.46751 4.00029 4.96618C4.00686 4.76236 4.07264 4.56553 4.18881 4.40207C4.47455 4 5.31637 4 7 4'
    }
  ],
  [
    'path',
    {
      d: 'M17 8L18.0438 7.12348C19.3585 6.0195 20.0159 5.46751 19.9997 4.96618C19.9931 4.76236 19.9274 4.56553 19.8112 4.40207C19.5254 4 18.6836 4 17 4'
    }
  ],
  [
    'path',
    {
      d: 'M17 15L18.0438 14.1235C19.3585 13.0195 20.0159 12.4675 19.9997 11.9662C19.9931 11.7624 19.9274 11.5655 19.8112 11.4021C19.5254 11 18.6836 11 17 11'
    }
  ],
  [
    'path',
    {
      d: 'M7 15L5.95617 14.1235C4.64147 13.0195 3.98413 12.4675 4.00029 11.9662C4.00686 11.7624 4.07264 11.5655 4.18881 11.4021C4.47455 11 5.31637 11 7 11'
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

TrafficLightIcon.displayName = 'TrafficLightIcon';
export default TrafficLightIcon;
