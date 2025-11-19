import React from 'react';
import config from '../config';

interface Shaka2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Shaka2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shaka2)
 * @see {@link https://clicons.dev/icon/shaka2}
 */
const Shaka2Icon = React.forwardRef<SVGSVGElement, Shaka2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.7116 11.671L15.6393 13.5C15.6393 12.1103 15.6393 11.4155 15.4376 10.8867C15.0858 9.96466 14.3147 9.28087 13.377 9.05945C12.8393 8.93248 12.172 9.03555 10.8373 9.2417L6.899 10V4.75C6.899 3.7835 6.13811 3 5.1995 3C4.26089 3 3.5 3.7835 3.5 4.75V13.1795C3.5 15.8106 3.5 17.1261 3.98274 18.1435C4.47679 19.1846 5.31535 20.0232 6.35655 20.5173C7.37391 21 8.68944 21 11.3205 21C12.791 21 13.5263 21 14.188 20.7435C14.392 20.6643 14.5893 20.5677 14.7776 20.4545C15.3882 20.0874 15.8519 19.4998 16.7792 18.3246L20.1218 14.0883C20.623 13.4531 20.6264 12.5441 20.1299 11.905C19.5331 11.1369 18.4369 11.0308 17.7116 11.671Z'
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

Shaka2Icon.displayName = 'Shaka2Icon';
export default Shaka2Icon;
