import React from 'react';
import config from '../config';

interface RootIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RootIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/root)
 * @see {@link https://clicons.dev/icon/root}
 */
const RootIcon = React.forwardRef<SVGSVGElement, RootIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 5H13.6138C12.3798 5 11.965 5.1398 11.659 6.36394L9.33913 15.6416C8.78948 17.8398 8.51466 18.9389 7.78481 18.9976C7.05496 19.0564 6.55032 18.02 5.54104 15.9472L4.97014 14.7748C4.53541 13.882 4.31804 13.4356 3.87855 13.3147C3.21709 13.1327 2.5084 13.6703 2 14'
    }
  ],
  [
    'path',
    {
      d: 'M14.4004 11.004C15.1804 10.92 16.1337 11.0385 16.4404 11.64C17.0523 12.84 18.0604 15.36 18.4204 16.14C18.6004 16.44 18.7804 16.8 19.5004 16.98C19.9804 17.04 20.6039 16.9955 20.6039 16.9955'
    }
  ],
  [
    'path',
    {
      d: 'M21.0005 10.998C19.5005 10.998 18.5405 12.66 17.7005 13.68C16.6205 15.24 15.4205 17.1 13.9805 16.98'
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

RootIcon.displayName = 'RootIcon';
export default RootIcon;
