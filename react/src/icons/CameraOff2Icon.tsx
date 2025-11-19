import React from 'react';
import config from '../config';

interface CameraOff2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CameraOff2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/camera-off2)
 * @see {@link https://clicons.dev/icon/camera-off2}
 */
const CameraOff2Icon = React.forwardRef<SVGSVGElement, CameraOff2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 9H6'
    }
  ],
  [
    'path',
    {
      d: 'M2 2L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M16.4889 16.4889C15.9102 16.8144 15.2423 17 14.531 17C12.3219 17 10.531 15.2091 10.531 13C10.531 12.2887 10.7167 11.6208 11.0421 11.0421M13.2199 9.21983C13.6306 9.07739 14.0718 9 14.531 9C16.7401 9 18.531 10.7909 18.531 13C18.531 13.4592 18.4536 13.9004 18.3112 14.3111'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 20.4983H8C5.17157 20.4983 3.75736 20.4983 2.87868 19.6196C2 18.7409 2 17.3267 2 14.4983V11.9983C2 9.16987 2 7.75566 2.87868 6.87698C3.51998 6.23568 4.44655 6.06243 6 6.01562'
    }
  ],
  [
    'path',
    {
      d: 'M22 18V8.02617C22 6.90715 21.0929 6 19.9738 6C19.3583 6 18.7762 5.72021 18.3917 5.23957L17.8 4.5C17.6049 4.25611 17.5073 4.13416 17.3979 4.03281C17.1031 3.75969 16.7328 3.58172 16.3354 3.52212C16.1879 3.5 16.0317 3.5 15.7194 3.5H13.9225C12.9779 3.5 12.5056 3.5 12.0949 3.69739C11.6842 3.89479 11.3891 4.2636 10.799 5.00122L10 6'
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

CameraOff2Icon.displayName = 'CameraOff2Icon';
export default CameraOff2Icon;
