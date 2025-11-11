import React from 'react';
import config from '../config';

interface ShoppingCartFavorite02IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShoppingCartFavorite02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/shopping-cart-favorite02)
 * @see {@link https://clicons.dev/icon/shopping-cart-favorite02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ShoppingCartFavorite02Icon = React.forwardRef<SVGSVGElement, ShoppingCartFavorite02IconProps>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? 16;
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.8;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [["path", { d: "M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M6 6H7M22 6H20", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10.515 2.38661C11.5876 1.74692 12.5238 2.00471 13.0863 2.41534C13.3169 2.58371 13.4322 2.66789 13.5 2.66789C13.5678 2.66789 13.6831 2.58371 13.9137 2.41534C14.4762 2.00471 15.4124 1.74692 16.485 2.38661C17.8928 3.22614 18.2113 5.99578 14.9642 8.33242C14.3457 8.77747 14.0365 9 13.5 9C12.9635 9 12.6543 8.77747 12.0358 8.33242C8.78869 5.99578 9.10723 3.22614 10.515 2.38661Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["circle", { cx: "6", cy: "20", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "3" }],
  ["circle", { cx: "17", cy: "20", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M8 20L15 20", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "6" }]];

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
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

ShoppingCartFavorite02Icon.displayName = 'ShoppingCartFavorite02Icon';
export default ShoppingCartFavorite02Icon;
