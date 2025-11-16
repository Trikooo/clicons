import React from 'react';
import config from '../config';

interface TextCenterlineCenterTopIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TextCenterlineCenterTopIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/text-centerline-center-top)
 * @see {@link https://clicons.dev/icon/text-centerline-center-top}
 */
const TextCenterlineCenterTopIcon = React.forwardRef<SVGSVGElement, TextCenterlineCenterTopIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 3.5H5'
    }
  ],
  [
    'path',
    {
      d: 'M19 3.5H21'
    }
  ],
  [
    'path',
    {
      d: 'M3 9.5H5'
    }
  ],
  [
    'path',
    {
      d: 'M19 9.5H21'
    }
  ],
  [
    'path',
    {
      d: 'M3 15.5H21'
    }
  ],
  [
    'path',
    {
      d: 'M3 21H21'
    }
  ],
  [
    'path',
    {
      d: 'M8.58579 10.4142C9.17157 10.9999 10.1144 10.9999 12 10.9999C13.8856 10.9999 14.8284 10.9999 15.4142 10.4142C16 9.82837 16 8.88556 16 6.99994C16 5.11432 16 4.17151 15.4142 3.58573C14.8284 2.99994 13.8856 2.99994 12 2.99994C10.1144 2.99994 9.17157 2.99994 8.58579 3.58573C8 4.17151 8 5.11432 8 6.99994C8 8.88556 8 9.82837 8.58579 10.4142Z'
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

TextCenterlineCenterTopIcon.displayName = 'TextCenterlineCenterTopIcon';
export default TextCenterlineCenterTopIcon;
