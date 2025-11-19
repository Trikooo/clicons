import React from 'react';
import config from '../config';

interface AlphabetArabicIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlphabetArabicIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/alphabet-arabic)
 * @see {@link https://clicons.dev/icon/alphabet-arabic}
 */
const AlphabetArabicIcon = React.forwardRef<SVGSVGElement, AlphabetArabicIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 4L9 11'
    }
  ],
  [
    'path',
    {
      d: 'M13 14H20.743C21.4486 14 21.8015 14 21.9479 13.7401C22.0944 13.4803 21.9203 13.2157 21.5721 12.6867C20.4517 10.9841 18.7844 10 17.117 10'
    }
  ],
  [
    'path',
    {
      d: 'M13 4V17.6667C13 18.7666 13 19.3166 12.7071 19.6583C12.4142 20 11.9428 20 11 20H10'
    }
  ],
  [
    'path',
    {
      d: 'M5 4V17.6667C5 18.7666 5 19.3166 4.70711 19.6583C4.41421 20 3.94281 20 3 20H2'
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

AlphabetArabicIcon.displayName = 'AlphabetArabicIcon';
export default AlphabetArabicIcon;
