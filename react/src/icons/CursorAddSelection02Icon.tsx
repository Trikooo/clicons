import React from 'react';
import config from '../config';

interface CursorAddSelection02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CursorAddSelection02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cursor-add-selection02)
 * @see {@link https://clicons.dev/icon/cursor-add-selection02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CursorAddSelection02Icon = React.forwardRef<SVGSVGElement, CursorAddSelection02IconProps>(
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

    const iconData = [["path", { d: "M9.0469 4.44865L14.4101 6.54728L14.4101 6.54728C17.5034 7.75771 19.05 8.36293 18.9988 9.32296C18.9475 10.283 17.3334 10.7232 14.1051 11.6036C13.1439 11.8658 12.6633 11.9969 12.3301 12.3301C11.9969 12.6633 11.8658 13.1439 11.6036 14.1051C10.7232 17.3334 10.283 18.9475 9.32296 18.9988C8.36293 19.05 7.75771 17.5034 6.54728 14.4101L6.54728 14.4101L4.44865 9.0469C3.18138 5.80831 2.54774 4.18901 3.36837 3.36837C4.18901 2.54774 5.80831 3.18138 9.0469 4.44865Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.5 14V21M21 17.5L14 17.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

CursorAddSelection02Icon.displayName = 'CursorAddSelection02Icon';
export default CursorAddSelection02Icon;
