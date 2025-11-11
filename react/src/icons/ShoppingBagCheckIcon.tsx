import React from 'react';
import config from '../config';

interface ShoppingBagCheckIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ShoppingBagCheckIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/shopping-bag-check)
 * @see {@link https://clicons.dev/icon/shopping-bag-check} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ShoppingBagCheckIcon = React.forwardRef<SVGSVGElement, ShoppingBagCheckIconProps>(
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

    const iconData = [["path", { d: "M20.1765 12.5113C19.8261 9.50898 19.3142 7.25784 18.8394 5.65851C18.4501 4.34711 18.2554 3.69141 17.4572 3.0957C16.659 2.5 15.8431 2.5 14.2113 2.5H8.78876C7.15697 2.5 6.34107 2.5 5.54283 3.0957C4.74459 3.69141 4.54994 4.34711 4.16063 5.65851C3.68586 7.25784 3.1739 9.50898 2.82352 12.5113C2.41058 16.0497 2.20411 17.8189 3.39731 19.1594C4.59052 20.5 6.52422 20.5 10.3916 20.5H11.6084", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M8.5 6.5C8.5 8.15685 9.84315 9.5 11.5 9.5C13.1569 9.5 14.5 8.15685 14.5 6.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M14.5 19.5C14.5 19.5 15.5 19.5 16.5 21.5C16.5 21.5 18.6765 16.5 21.5 15.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

ShoppingBagCheckIcon.displayName = 'ShoppingBagCheckIcon';
export default ShoppingBagCheckIcon;
