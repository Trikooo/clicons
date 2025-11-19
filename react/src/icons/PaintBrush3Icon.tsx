import React from 'react';
import config from '../config';

interface PaintBrush3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PaintBrush3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/paint-brush3)
 * @see {@link https://clicons.dev/icon/paint-brush3}
 */
const PaintBrush3Icon = React.forwardRef<SVGSVGElement, PaintBrush3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 12C5.13023 12.7386 1.94713 14.5658 2.00054 15.9012C2.01513 16.2661 2.3205 16.5714 2.93122 17.1822L3.90287 18.1538M12 18C11.2614 18.8698 9.43417 22.0529 8.09878 21.9995C7.73393 21.9849 7.42856 21.6795 6.81784 21.0688L5.84618 20.0971M3.90287 18.1538L6.29464 15.762M3.90287 18.1538L5.84618 20.0971M5.84618 20.0971L7.04207 18.9012'
    }
  ],
  [
    'path',
    {
      d: 'M13.9389 18.481C13.6199 18.8243 13.4604 18.996 13.2454 18.9999C13.0304 19.0039 12.8585 18.8319 12.5146 18.4881L5.51186 11.4849C5.16804 11.1411 4.99612 10.9692 5.00007 10.7542C5.00401 10.5392 5.17563 10.3797 5.51887 10.0607C5.75113 9.84487 5.93925 9.69256 6.14283 9.56702C7.90764 8.47876 10.1485 9.5093 11.9332 8.49885C13.9897 7.33452 15.7947 5.18592 17.4986 3.25974C18.2273 2.43601 18.5916 2.02414 19.1056 2.00066C20.0323 1.95831 22.0415 3.97332 21.9993 4.89475C21.9758 5.40882 21.5638 5.77316 20.7398 6.50183C18.8135 8.20531 16.6647 10.01 15.5006 12.0664C14.4902 13.8513 15.5207 16.0922 14.4325 17.8571C14.307 18.0607 14.1547 18.2488 13.9389 18.481Z'
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

PaintBrush3Icon.displayName = 'PaintBrush3Icon';
export default PaintBrush3Icon;
