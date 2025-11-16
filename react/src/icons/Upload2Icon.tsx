import React from 'react';
import config from '../config';

interface Upload2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Upload2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/upload2)
 * @see {@link https://clicons.dev/icon/upload2}
 */
const Upload2Icon = React.forwardRef<SVGSVGElement, Upload2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.9502 8.3183C17.198 7.68602 16.5075 6.92738 15.1266 5.41011C13.6701 3.80984 12.92 3.00959 11.9999 3C11.0798 3.00959 10.3297 3.80984 8.8732 5.41011C7.49227 6.92738 6.80181 7.68602 7.04953 8.3183C7.05857 8.34138 7.06839 8.36414 7.07898 8.38653C7.34917 8.95795 8.24466 8.99712 9.99989 8.9998V15.5C9.99989 15.965 9.99989 16.1975 10.051 16.3882C10.1897 16.9059 10.594 17.3102 11.1117 17.4489C11.3024 17.5 11.5349 17.5 11.9999 17.5C12.4648 17.5 12.6973 17.5 12.8881 17.4489C13.4057 17.3102 13.81 16.9059 13.9487 16.3882C13.9998 16.1975 13.9998 15.965 13.9998 15.5V8.9998C15.7551 8.99712 16.6506 8.95796 16.9208 8.38653C16.9314 8.36414 16.9412 8.34138 16.9502 8.3183Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.99998 21H19'
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

Upload2Icon.displayName = 'Upload2Icon';
export default Upload2Icon;
