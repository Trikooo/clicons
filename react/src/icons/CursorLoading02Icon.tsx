import React from 'react';
import config from '../config';

interface CursorLoading02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CursorLoading02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cursor-loading02)
 * @see {@link https://clicons.dev/icon/cursor-loading02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CursorLoading02Icon = React.forwardRef<SVGSVGElement, CursorLoading02IconProps>(
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

    const iconData = [["path", { d: "M8.5469 3.44865L13.9101 5.54728L13.9101 5.54728C17.0034 6.75771 18.55 7.36293 18.4988 8.32296C18.4475 9.28299 16.8334 9.7232 13.6051 10.6036C12.6439 10.8658 12.1633 10.9969 11.8301 11.3301C11.4969 11.6633 11.3658 12.1439 11.1036 13.1051C10.2232 16.3334 9.78299 17.9475 8.82296 17.9988C7.86293 18.05 7.25771 16.5034 6.04728 13.4101L6.04728 13.4101L3.94865 8.0469C2.68138 4.80831 2.04774 3.18901 2.86837 2.36837C3.68901 1.54774 5.30831 2.18138 8.5469 3.44865Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.9999 17.5C19.9329 17.5 21.4999 15.989 21.4999 14.125C21.4999 13.5037 20.9776 13 20.3333 13H15.6666C15.0223 13 14.4999 13.5037 14.4999 14.125C14.4999 15.989 16.0669 17.5 17.9999 17.5ZM17.9999 17.5C19.9329 17.5 21.4999 19.011 21.4999 20.875C21.4999 21.4963 20.9776 22 20.3333 22H15.6666C15.0223 22 14.4999 21.4963 14.4999 20.875C14.4999 19.011 16.0669 17.5 17.9999 17.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

CursorLoading02Icon.displayName = 'CursorLoading02Icon';
export default CursorLoading02Icon;
