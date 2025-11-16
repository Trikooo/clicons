import React from 'react';
import config from '../config';

interface CameraAdd2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CameraAdd2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/camera-add2)
 * @see {@link https://clicons.dev/icon/camera-add2}
 */
const CameraAdd2Icon = React.forwardRef<SVGSVGElement, CameraAdd2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 7.49945V15.4994C22 18.3279 22 19.7421 21.1213 20.6208C20.2426 21.4994 18.8284 21.4994 16 21.4994H8C5.17157 21.4994 3.75736 21.4994 2.87868 20.6208C2 19.7421 2 18.3279 2 15.4994V12.9994C2 10.171 2 8.7568 2.87868 7.87812C3.75736 6.99944 5.17157 6.99944 8 6.99944H8.39922C9.02578 6.99944 9.33906 6.99944 9.62612 6.91124C9.81759 6.85241 9.99914 6.76516 10.1647 6.65239C10.4129 6.48333 10.6086 6.2387 11 5.74944C11.3914 5.26018 11.5871 5.01555 11.8353 4.84648C12.0009 4.73372 12.1824 4.64646 12.3739 4.58763C12.5504 4.53339 12.7369 4.5086 13 4.50056'
    }
  ],
  [
    'path',
    {
      d: 'M16 5.00056H21M18.5 7.50056V2.50056'
    }
  ],
  [
    'path',
    {
      d: 'M5 10.0006H7'
    }
  ],
  [
    'path',
    {
      d: 'M18.5309 14.0006C18.5309 16.2097 16.74 18.0006 14.5309 18.0006C12.3217 18.0006 10.5309 16.2097 10.5309 14.0006C10.5309 11.7914 12.3217 10.0006 14.5309 10.0006C16.74 10.0006 18.5309 11.7914 18.5309 14.0006Z'
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

CameraAdd2Icon.displayName = 'CameraAdd2Icon';
export default CameraAdd2Icon;
