import React from 'react';
import config from '../config';

interface Airplane2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Airplane2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/airplane2)
 * @see {@link https://clicons.dev/icon/airplane2}
 */
const Airplane2Icon = React.forwardRef<SVGSVGElement, Airplane2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 9.50003L5.27531 4.47565C4.85705 4.0245 4.92403 3.69496 5.41729 3.40965C6.34454 2.8733 7.06689 2.85873 8.04428 3.39511L12.949 6.08675C13.2982 6.27836 13.6406 6.47259 14 6.57855'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 13.6632L14.6103 20.4697C14.7826 21.0255 15.086 21.1263 15.556 20.8568C16.4396 20.3501 16.7958 19.765 16.8197 18.7107L16.9395 13.4198C16.9555 12.7131 16.9526 12.0215 17.5 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.32846 10.9843L10.2154 9.60557L14.6377 6.38136L14.6416 6.37851L14.6491 6.37301C14.7535 6.29661 16.3094 5.16238 17.1919 4.77581C18.2765 4.30067 19.2869 4.52156 20.3739 4.82515C20.9362 4.98218 21.2173 5.06069 21.4202 5.20717C21.742 5.43958 21.9513 5.79728 21.9943 6.18852C22.0215 6.4351 21.9498 6.71459 21.8065 7.27356L21.8065 7.27358C21.5294 8.35431 21.2181 9.32819 20.2588 10.0175C19.4782 10.5784 17.7045 11.341 17.5856 11.3919L17.5771 11.3955L17.5726 11.3974L12.5317 13.5645L10.3782 14.4876L10.3782 14.4876C9.5974 14.8223 9.207 14.9896 8.94139 15.3002C8.31933 16.0275 8.23148 17.3438 7.99931 18.2494C7.87101 18.7498 7.16748 19.6171 6.54058 19.4869C6.15355 19.4065 6.14613 18.922 6.09796 18.6131L5.6342 15.6389C5.5233 14.9276 5.51479 14.9131 4.94599 14.4627L2.56757 12.5793C2.32053 12.3836 1.89903 12.135 2.022 11.7641C2.22119 11.1633 3.33408 10.9957 3.83747 11.1363C4.74834 11.3907 5.94747 11.9738 6.89684 11.8058C7.3022 11.7341 7.64428 11.4842 8.32844 10.9843L8.32846 10.9843Z'
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

Airplane2Icon.displayName = 'Airplane2Icon';
export default Airplane2Icon;
