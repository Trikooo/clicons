import React from 'react';
import config from '../config';

interface HomeWifiIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HomeWifiIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/home-wifi)
 * @see {@link https://clicons.dev/icon/home-wifi}
 */
const HomeWifiIcon = React.forwardRef<SVGSVGElement, HomeWifiIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.7292 11.9C20.0103 9.95968 20.1398 8.96204 19.7823 8.07444C19.4131 7.15801 18.5941 6.53099 16.956 5.27696L15.7322 4.34C13.6945 2.78 12.6756 2 11.5 2C10.3244 2 9.30555 2.78 7.26784 4.34L6.04397 5.27696C4.40592 6.53099 3.5869 7.15801 3.21774 8.07444C2.84858 8.99087 2.99862 10.0246 3.29868 12.0921L3.55456 13.8552C3.97994 16.786 4.19263 18.2515 5.18535 19.1257C6.17807 20 7.62938 20 10.532 20H11'
    }
  ],
  [
    'path',
    {
      d: 'M13 16.4778C14.1488 15.5431 15.5209 15 16.9946 15C18.4729 15 19.849 15.5466 21 16.4866M19.1743 19C18.5182 18.5909 17.7779 18.3607 16.9946 18.3607C16.2152 18.3607 15.4784 18.5886 14.8248 18.9938'
    }
  ],
  [
    'path',
    {
      d: 'M17 22H17.0064'
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

HomeWifiIcon.displayName = 'HomeWifiIcon';
export default HomeWifiIcon;
