import React from 'react';
import config from '../config';

interface PointingLeft5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PointingLeft5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pointing-left5)
 * @see {@link https://clicons.dev/icon/pointing-left5}
 */
const PointingLeft5Icon = React.forwardRef<SVGSVGElement, PointingLeft5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 13.0004L8 14.0004C8 15.105 8.89543 16.0004 10 16.0004M10 16.0004L11 16.0004M10 16.0004C9.44771 16.0004 9 16.4481 9 17.0004C9 18.105 9.89543 19.0004 11 19.0004M11 19.0004L12 19.0004M11 19.0004C10.4765 19.0004 10.0783 19.4705 10.1644 19.9868L10.2215 20.3292C10.3822 21.2936 11.2166 22.0004 12.1943 22.0004L13.6668 22C15.8402 22 16.9269 22 17.792 21.6689C18.2939 21.4769 18.9339 20.9703 19.3964 20.5652C19.7964 20.2148 20.3038 20 20.8356 20L22.0002 20M10 13.0002L3.5 13.0002C2.67157 13.0002 2 12.3286 2 11.5002C2 10.6718 2.67157 10.0002 3.5 10.0002L13.4624 10L11.837 8.3797C11.1239 7.66877 11.1889 6.49772 11.9765 5.86965C12.5791 5.38907 13.4315 5.3758 14.0489 5.83738L18.6471 9.43707C19.5269 10.1258 20.8829 10.5 22.0002 10.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7'
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

PointingLeft5Icon.displayName = 'PointingLeft5Icon';
export default PointingLeft5Icon;
