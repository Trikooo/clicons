import React from 'react';
import config from '../config';

interface TipsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TipsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tips)
 * @see {@link https://clicons.dev/icon/tips}
 */
const TipsIcon = React.forwardRef<SVGSVGElement, TipsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 8C20 9.93293 18.433 11.5 16.5 11.5C14.567 11.5 13 9.93293 13 8C13 6.067 14.567 4.5 16.5 4.5C18.433 4.5 20 6.067 20 8Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.8311 4.92276C14.3768 3.51685 13.0571 2.5 11.5 2.5C9.567 2.5 8 4.067 8 6C8 7.93293 9.567 9.5 11.5 9.5C12.1043 9.5 12.6728 9.34684 13.1689 9.07723'
    }
  ],
  [
    'path',
    {
      d: 'M4 13.5H6.39482C6.68897 13.5 6.97908 13.5663 7.24217 13.6936L9.28415 14.6816C9.54724 14.8089 9.83735 14.8751 10.1315 14.8751H11.1741C12.1825 14.8751 13 15.6662 13 16.642C13 16.6814 12.973 16.7161 12.9338 16.7269L10.3929 17.4295C9.93707 17.5555 9.449 17.5116 9.025 17.3064L6.84211 16.2503M13 16L17.5928 14.5889C18.407 14.3352 19.2871 14.636 19.7971 15.3423C20.1659 15.8529 20.0157 16.5842 19.4785 16.8942L11.9629 21.2305C11.4849 21.5063 10.9209 21.5736 10.3952 21.4176L4 19.5199'
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
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'square';
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

TipsIcon.displayName = 'TipsIcon';
export default TipsIcon;
