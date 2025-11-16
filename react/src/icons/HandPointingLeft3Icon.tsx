import React from 'react';
import config from '../config';

interface HandPointingLeft3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandPointingLeft3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-left3)
 * @see {@link https://clicons.dev/icon/hand-pointing-left3}
 */
const HandPointingLeft3Icon = React.forwardRef<SVGSVGElement, HandPointingLeft3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 11.5004L8 12.5004C8 13.605 8.89543 14.5004 10 14.5004M10 14.5004L11 14.5004M10 14.5004C9.44772 14.5004 9 14.9481 9 15.5004C9 16.605 9.89543 17.5004 11 17.5004M11 17.5004L12 17.5004M11 17.5004C10.4765 17.5004 10.0783 17.9705 10.1644 18.4868L10.2215 18.8292C10.3822 19.7936 11.2166 20.5004 12.1943 20.5004L13.6668 20.5C15.8402 20.5 16.9269 20.5 17.792 20.1689C18.2939 19.9769 18.9339 19.4703 19.3964 19.0652C19.7964 18.7148 20.3038 18.5 20.8356 18.5L22.0002 18.5M10 11.5002L3.5 11.5002C2.67157 11.5002 2 10.8286 2 10.0002C2 9.17178 2.67157 8.50021 3.5 8.50021L13.4624 8.5L11.837 6.8797C11.1239 6.16877 11.1889 4.99772 11.9765 4.36965C12.5791 3.88907 13.4315 3.8758 14.0489 4.33738L18.6471 7.93707C19.5269 8.62579 20.8829 9 22.0002 9'
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

HandPointingLeft3Icon.displayName = 'HandPointingLeft3Icon';
export default HandPointingLeft3Icon;
