import React from 'react';
import config from '../config';

interface AlphabetGreekIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlphabetGreekIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/alphabet-greek)
 * @see {@link https://clicons.dev/icon/alphabet-greek}
 */
const AlphabetGreekIcon = React.forwardRef<SVGSVGElement, AlphabetGreekIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 19C2.02342 19.7767 2.11012 20.24 2.43105 20.5607C2.87077 21 3.57849 21 4.99393 21H7.965C8.74255 21 9.13132 21 9.17551 20.8603C9.2197 20.7206 8.88712 20.4868 8.22198 20.0192C5.86888 18.3648 3.99306 15.5091 3.99306 12.2636C3.99306 7.14744 7.57789 3 12 3C16.4221 3 20.0069 7.14744 20.0069 12.2636C20.0069 15.5091 18.1311 18.3648 15.778 20.0192C15.1129 20.4868 14.7803 20.7206 14.8245 20.8603C14.8687 21 15.2574 21 16.035 21H19.0061C20.4215 21 21.1292 21 21.5689 20.5607C21.8899 20.24 21.9766 19.7767 22 19'
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

AlphabetGreekIcon.displayName = 'AlphabetGreekIcon';
export default AlphabetGreekIcon;
