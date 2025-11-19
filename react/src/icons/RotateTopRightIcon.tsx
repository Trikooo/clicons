import React from 'react';
import config from '../config';

interface RotateTopRightIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RotateTopRightIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rotate-top-right)
 * @see {@link https://clicons.dev/icon/rotate-top-right}
 */
const RotateTopRightIcon = React.forwardRef<SVGSVGElement, RotateTopRightIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 15C7 18.2998 7 19.9497 8.02513 20.9749C9.05025 22 10.7002 22 14 22C17.2998 22 18.9497 22 19.9749 20.9749C21 19.9497 21 18.2998 21 15C21 11.7002 21 10.0503 19.9749 9.02513C18.9497 8 17.2998 8 14 8C10.7002 8 9.05025 8 8.02513 9.02513C7 10.0503 7 11.7002 7 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.57987 2L10.9256 3.11013C11.6419 3.70104 12 3.99649 12 4.36364L11 4.36364C7.22876 4.36364 5.34315 4.36364 4.17157 5.53521C3 6.70678 3 8.5924 3 12.3636V13'
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

RotateTopRightIcon.displayName = 'RotateTopRightIcon';
export default RotateTopRightIcon;
