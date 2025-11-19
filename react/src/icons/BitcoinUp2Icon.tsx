import React from 'react';
import config from '../config';

interface BitcoinUp2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinUp2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-up2)
 * @see {@link https://clicons.dev/icon/bitcoin-up2}
 */
const BitcoinUp2Icon = React.forwardRef<SVGSVGElement, BitcoinUp2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11.9999 8.99985C8.41007 8.99985 5.49992 11.91 5.49992 15.4998C5.49992 19.0897 8.41007 21.9998 11.9999 21.9998C15.5898 21.9998 18.4999 19.0897 18.4999 15.4998C18.4999 11.91 15.5898 8.99985 11.9999 8.99985Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 2L16.0237 5.6148C15.3073 6.26613 14.949 6.5918 14.527 6.56553C14.1051 6.53926 13.79 6.17167 13.1599 5.4365L12.6533 4.84557C12.1043 4.20505 11.8298 3.88479 11.4541 3.83296C11.0783 3.78112 10.7274 4.0151 10.0254 4.48305L4 8.5M20 2H16.5M20 2V5'
    }
  ],
  [
    'path',
    {
      d: 'M10.4374 18.1665L10.4374 12.8332M11.9999 12.8332V11.4998M11.9999 19.4998V18.1665M10.4374 15.4998H13.5624M13.5624 15.4998C14.0802 15.4998 14.4999 15.9476 14.4999 16.4998V17.1665C14.4999 17.7188 14.0802 18.1665 13.5624 18.1665H9.49993M13.5624 15.4998C14.0802 15.4998 14.4999 15.0521 14.4999 14.4998V13.8332C14.4999 13.2809 14.0802 12.8332 13.5624 12.8332H9.49993'
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

BitcoinUp2Icon.displayName = 'BitcoinUp2Icon';
export default BitcoinUp2Icon;
