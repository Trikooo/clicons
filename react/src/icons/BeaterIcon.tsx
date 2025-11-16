import React from 'react';
import config from '../config';

interface BeaterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BeaterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/beater)
 * @see {@link https://clicons.dev/icon/beater}
 */
const BeaterIcon = React.forwardRef<SVGSVGElement, BeaterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.5 5H17.5C18.9045 5 19.6067 5 20.1111 5.33706C20.3295 5.48298 20.517 5.67048 20.6629 5.88886C21 6.39331 21 7.09554 21 8.5C21 9.90446 21 10.6067 20.6629 11.1111C20.517 11.3295 20.3295 11.517 20.1111 11.6629C19.6067 12 18.9045 12 17.5 12H6.5C5.09554 12 4.39331 12 3.88886 11.6629C3.67048 11.517 3.48298 11.3295 3.33706 11.1111C3 10.6067 3 9.90446 3 8.5C3 7.09554 3 6.39331 3.33706 5.88886C3.48298 5.67048 3.67048 5.48298 3.88886 5.33706C4.39331 5 5.09554 5 6.5 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 16H15.5C14.6716 16 14 16.6716 14 17.5V19.5C14 20.3284 14.6716 21 15.5 21H17.5C18.3284 21 19 20.3284 19 19.5V17.5C19 16.6716 18.3284 16 17.5 16Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 22V21M16.5 12V16'
    }
  ],
  [
    'path',
    {
      d: 'M8 2H15C15.9319 2 16.3978 2 16.7654 2.15224C17.2554 2.35523 17.6448 2.74458 17.8478 3.23463C18 3.60218 18 4.06812 18 5'
    }
  ],
  [
    'path',
    {
      d: 'M17 8.5H16.991M13.009 8.5H13'
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

BeaterIcon.displayName = 'BeaterIcon';
export default BeaterIcon;
