import React from 'react';
import config from '../config';

interface IncognitoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name IncognitoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/incognito)
 * @see {@link https://clicons.dev/icon/incognito}
 */
const IncognitoIcon = React.forwardRef<SVGSVGElement, IncognitoIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 18C10 16.3431 8.65685 15 7 15C5.34315 15 4 16.3431 4 18C4 19.6569 5.34315 21 7 21C8.65685 21 10 19.6569 10 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 18C20 16.3431 18.6569 15 17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21C18.6569 21 20 19.6569 20 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 12H22'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 16.3411C13.9625 15.5328 13.0435 15 12 15C10.9565 15 10.0375 15.5328 9.5 16.3411'
    }
  ],
  [
    'path',
    {
      d: 'M3 11.9999L4.66166 5.70273C4.75853 5.33563 4.80697 5.15208 4.85375 5.02195C5.53545 3.12561 7.7632 2.40097 9.37283 3.552C9.48328 3.63099 9.6247 3.75279 9.90752 3.99638C10.0699 4.13626 10.1511 4.2062 10.2264 4.26322C11.2822 5.06309 12.7178 5.06309 13.7736 4.26322C13.8489 4.2062 13.9301 4.13626 14.0925 3.99638C14.3753 3.75279 14.5167 3.63099 14.6272 3.552C16.2368 2.40097 18.4645 3.12561 19.1463 5.02195C19.193 5.15208 19.2415 5.33563 19.3383 5.70273L21 11.9999H3Z'
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

IncognitoIcon.displayName = 'IncognitoIcon';
export default IncognitoIcon;
