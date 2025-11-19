import React from 'react';
import config from '../config';

interface DatabaseSettingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DatabaseSettingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/database-setting)
 * @see {@link https://clicons.dev/icon/database-setting}
 */
const DatabaseSettingIcon = React.forwardRef<SVGSVGElement, DatabaseSettingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'ellipse',
    {
      cx: '11',
      cy: '5',
      rx: '8',
      ry: '3'
    }
  ],
  [
    'path',
    {
      d: 'M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817'
    }
  ],
  [
    'path',
    {
      d: 'M3 12C3 13.5299 6.05369 14.7923 10 14.9768'
    }
  ],
  [
    'path',
    {
      d: 'M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817'
    }
  ],
  [
    'path',
    {
      d: 'M11 22C6.58172 22 3 20.6569 3 19V5M19 5V11'
    }
  ],
  [
    'path',
    {
      d: 'M17 20.7143V22M17 20.7143C15.8432 20.7143 14.8241 20.1461 14.2263 19.2833M17 20.7143C18.1568 20.7143 19.1759 20.1461 19.7737 19.2833M17 14.2857C18.1569 14.2857 19.1761 14.854 19.7738 15.7169M17 14.2857C15.8431 14.2857 14.8239 14.854 14.2262 15.7169M17 14.2857V13M21 14.9286L19.7738 15.7169M13.0004 20.0714L14.2263 19.2833M13 14.9286L14.2262 15.7169M20.9996 20.0714L19.7737 19.2833M19.7738 15.7169C20.1273 16.2271 20.3333 16.8403 20.3333 17.5C20.3333 18.1597 20.1272 18.773 19.7737 19.2833M14.2262 15.7169C13.8727 16.2271 13.6667 16.8403 13.6667 17.5C13.6667 18.1597 13.8728 18.773 14.2263 19.2833'
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

DatabaseSettingIcon.displayName = 'DatabaseSettingIcon';
export default DatabaseSettingIcon;
