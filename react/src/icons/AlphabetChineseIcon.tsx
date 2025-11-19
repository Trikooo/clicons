import React from 'react';
import config from '../config';

interface AlphabetChineseIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlphabetChineseIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/alphabet-chinese)
 * @see {@link https://clicons.dev/icon/alphabet-chinese}
 */
const AlphabetChineseIcon = React.forwardRef<SVGSVGElement, AlphabetChineseIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.02344 14H18.0234'
    }
  ],
  [
    'path',
    {
      d: 'M8.52344 9H14.7587C15.2218 9 15.4533 9 15.5109 9.1605C15.6967 9.67818 13.7549 11.4137 13.4567 11.7577C12.9682 12.3213 12.724 12.6031 12.5954 12.9615C12.4667 13.3198 12.4667 13.7184 12.4667 14.5154V18.075C12.4667 19.7377 11.5142 21 9.93177 21'
    }
  ],
  [
    'path',
    {
      d: 'M5.0157 7.99997C4.9404 7.25983 5.06511 5.86347 7.00907 5.99998H17.4743C18.1117 6.03692 19.1963 6.46024 18.9693 7.99997M10.9958 3C11.5968 3.31337 12.67 4.51459 12.9892 6'
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

AlphabetChineseIcon.displayName = 'AlphabetChineseIcon';
export default AlphabetChineseIcon;
