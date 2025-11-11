import React from 'react';
import config from '../config';

interface TypeCursorIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TypeCursorIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/type-cursor)
 * @see {@link https://clicons.dev/icon/type-cursor} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TypeCursorIcon = React.forwardRef<SVGSVGElement, TypeCursorIconProps>(
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

    const iconData = [["path", { d: "M6 16C5.07003 16 4.60504 16 4.22354 15.8978C3.18827 15.6204 2.37962 14.8117 2.10222 13.7765C2 13.395 2 12.93 2 12C2 11.07 2 10.605 2.10222 10.2235C2.37962 9.18827 3.18827 8.37962 4.22354 8.10222C4.60504 8 5.07003 8 6 8M12 16H18C18.93 16 19.395 16 19.7765 15.8978C20.8117 15.6204 21.6204 14.8117 21.8978 13.7765C22 13.395 22 12.93 22 12C22 11.07 22 10.605 21.8978 10.2235C21.6204 9.18827 20.8117 8.37962 19.7765 8.10222C19.395 8 18.93 8 18 8H12", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7 3H9M11 3H9M9 3V21M9 21H7M9 21H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

TypeCursorIcon.displayName = 'TypeCursorIcon';
export default TypeCursorIcon;
