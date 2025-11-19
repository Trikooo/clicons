import React from 'react';
import config from '../config';

interface SolarPanelIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SolarPanelIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/solar-panel)
 * @see {@link https://clicons.dev/icon/solar-panel}
 */
const SolarPanelIcon = React.forwardRef<SVGSVGElement, SolarPanelIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.6745 4H8.32553C6.86148 4 6.12945 4 5.56252 4.41264C4.99559 4.82528 4.72372 5.55596 4.17998 7.01733L3.287 9.41732C2.1773 12.3998 1.62245 13.891 2.28654 14.9455C2.95062 16 4.4446 16 7.43256 16H16.5674C19.5554 16 21.0494 16 21.7135 14.9455C22.3775 13.891 21.8227 12.3998 20.713 9.41732L19.82 7.01732C19.2763 5.55596 19.0044 4.82528 18.4375 4.41264C17.8706 4 17.1385 4 15.6745 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 16V20M12 20H15M12 20H9'
    }
  ],
  [
    'path',
    {
      d: 'M10 4L8 16'
    }
  ],
  [
    'path',
    {
      d: 'M14 4L16 16'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 10H3.5'
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

SolarPanelIcon.displayName = 'SolarPanelIcon';
export default SolarPanelIcon;
