import React from 'react';
import config from '../config';

interface CharityIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CharityIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/charity)
 * @see {@link https://clicons.dev/icon/charity}
 */
const CharityIcon = React.forwardRef<SVGSVGElement, CharityIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 19H17'
    }
  ],
  [
    'path',
    {
      d: 'M19 16C19.7767 16.0234 20.24 16.1102 20.5607 16.4313C21 16.8713 21 17.5794 21 18.9957C21 20.4119 21 21.12 20.5607 21.56C20.1213 22 19.4142 22 18 22H6C4.58579 22 3.87868 22 3.43934 21.56C3 21.12 3 20.4119 3 18.9957C3 17.5794 3 16.8713 3.43934 16.4313C3.75999 16.1102 4.22328 16.0234 5 16'
    }
  ],
  [
    'path',
    {
      d: 'M14.3151 19C15.0417 18.3718 15.5 17.4526 15.5 16.4286C15.5 14.535 13.933 13 12 13C10.067 13 8.5 14.535 8.5 16.4286C8.5 17.4526 8.95829 18.3718 9.6849 19'
    }
  ],
  [
    'path',
    {
      d: 'M20 10L17.6052 10C17.311 10 17.0209 9.93373 16.7578 9.80643L14.7159 8.81844C14.4528 8.69114 14.1627 8.62487 13.8685 8.62487L12.8259 8.62487C11.8175 8.62487 11 7.83382 11 6.858C11 6.81856 11.027 6.7839 11.0662 6.77306L13.6071 6.07055C14.0629 5.94453 14.551 5.98842 14.975 6.19357L17.1579 7.24974M11 7.5L6.40723 8.91108C5.59303 9.16476 4.71292 8.86396 4.2029 8.1577C3.83414 7.64706 3.98428 6.91581 4.52154 6.60583L12.0371 2.26947C12.5151 1.99367 13.0791 1.92638 13.6048 2.08239L20 3.98005'
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

CharityIcon.displayName = 'CharityIcon';
export default CharityIcon;
