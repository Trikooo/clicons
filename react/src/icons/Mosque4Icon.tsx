import React from 'react';
import config from '../config';

interface Mosque4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Mosque4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mosque4)
 * @see {@link https://clicons.dev/icon/mosque4}
 */
const Mosque4Icon = React.forwardRef<SVGSVGElement, Mosque4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 22V14C17 12.1144 17 11.1716 16.4142 10.5858C15.8284 10 14.8856 10 13 10H11C9.11438 10 8.17157 10 7.58579 10.5858C7 11.1716 7 12.1144 7 14V22H17Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 22V12H3V22H7Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 12V10'
    }
  ],
  [
    'path',
    {
      d: 'M19 12V10'
    }
  ],
  [
    'path',
    {
      d: 'M17 22V12H21V22H17Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 12H7'
    }
  ],
  [
    'path',
    {
      d: 'M9.02481 10C5.93952 6 10.6777 4 11.9998 2C13.3221 4 18.0602 6 14.9748 10H9.02481Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 12H17'
    }
  ],
  [
    'path',
    {
      d: 'M10 22V19C10 18.0218 10 17.5326 10.1422 17.0874C10.2364 16.7924 10.3757 16.5137 10.5552 16.2613C10.8261 15.8804 11.2174 15.5869 12 15C12.7826 15.5869 13.1739 15.8804 13.4448 16.2613C13.6243 16.5137 13.7636 16.7924 13.8578 17.0874C14 17.5326 14 18.0218 14 19V22'
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

Mosque4Icon.displayName = 'Mosque4Icon';
export default Mosque4Icon;
