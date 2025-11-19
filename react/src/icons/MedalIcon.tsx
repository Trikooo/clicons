import React from 'react';
import config from '../config';

interface MedalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MedalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/medal)
 * @see {@link https://clicons.dev/icon/medal}
 */
const MedalIcon = React.forwardRef<SVGSVGElement, MedalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.5 2V10.5M15.5 2V10.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.9162 2.01166H6.0838C5.17286 2.01166 3.96696 1.85424 3.34398 2.69602C3 3.1608 3 3.83334 3 5.17844C3 6.32524 3 6.89864 3.23194 7.38174C3.62807 8.20684 4.51377 8.56526 5.27291 8.95504L8.98131 10.8591C10.4626 11.6197 11.2033 12 12 12C12.7967 12 13.5374 11.6197 15.0187 10.8591L18.7271 8.95504C19.4862 8.56526 20.3719 8.20684 20.7681 7.38174C21 6.89864 21 6.32524 21 5.17844C21 3.83334 21 3.1608 20.656 2.69602C20.033 1.85424 18.8271 2.01166 17.9162 2.01166Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.5292 13.6376C11.2478 13.2125 11.6071 13 12 13C12.3929 13 12.7522 13.2125 13.4708 13.6376L14.4708 14.2292C15.2167 14.6704 15.5896 14.891 15.7948 15.26C16 15.6289 16 16.0789 16 16.979V18.021C16 18.9211 16 19.3711 15.7948 19.74C15.5896 20.109 15.2167 20.3296 14.4708 20.7708L13.4708 21.3624C12.7522 21.7875 12.3929 22 12 22C11.6071 22 11.2478 21.7875 10.5292 21.3624L9.52922 20.7708C8.78332 20.3296 8.41037 20.109 8.20519 19.74C8 19.3711 8 18.9211 8 18.021V16.979C8 16.0789 8 15.6289 8.20519 15.26C8.41037 14.891 8.78332 14.6704 9.52922 14.2292L10.5292 13.6376Z'
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

MedalIcon.displayName = 'MedalIcon';
export default MedalIcon;
