import React from 'react';
import config from '../config';

interface LaughingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LaughingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/laughing)
 * @see {@link https://clicons.dev/icon/laughing}
 */
const LaughingIcon = React.forwardRef<SVGSVGElement, LaughingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 11C2.50421 5.94668 6.78892 2 12 2C17.2111 2 21.4958 5.94668 22 11M19 19.1752C17.1904 20.9235 14.7215 22 12 22C9.27848 22 6.80962 20.9235 5 19.1752'
    }
  ],
  [
    'path',
    {
      d: 'M12 18C13.8962 18 15.4889 16.7202 15.9362 14.9899C16.1443 14.1848 15.8422 14 15.0461 14H8.95386C8.15776 14 7.8557 14.1848 8.0638 14.9899C8.51109 16.7202 10.1038 18 12 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 9.5C7 8.67157 7.67157 8 8.5 8C9.32843 8 10 8.67157 10 9.5M14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M6 12C4.44452 12.3985 1.54103 13.2338 2.06165 15.782C2.33013 17.0421 3.73652 17.275 4.5 16.708C6.33821 15.343 4.5 14 6 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 12C19.5555 12.3985 22.459 13.2338 21.9383 15.782C21.6699 17.0421 20.2635 17.275 19.5 16.708C17.6618 15.343 19.5 14 18 12Z'
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

LaughingIcon.displayName = 'LaughingIcon';
export default LaughingIcon;
