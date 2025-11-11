import React from 'react';
import config from '../config';

interface RotateBottomLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name RotateBottomLeftIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/rotate-bottom-left)
 * @see {@link https://clicons.dev/icon/rotate-bottom-left} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const RotateBottomLeftIcon = React.forwardRef<SVGSVGElement, RotateBottomLeftIconProps>(
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

    const iconData = [["path", { d: "M2 10C2 13.2998 2 14.9497 3.02513 15.9749C4.05025 17 5.70017 17 9 17C12.2998 17 13.9497 17 14.9749 15.9749C16 14.9497 16 13.2998 16 10C16 6.70017 16 5.05025 14.9749 4.02513C13.9497 3 12.2998 3 9 3C5.70017 3 4.05025 3 3.02513 4.02513C2 5.05025 2 6.70017 2 10Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M22 14.4201L20.8899 13.0744C20.299 12.3581 20.0035 12 19.6364 12V13C19.6364 16.7712 19.6364 18.6569 18.4648 19.8284C17.2932 21 15.4076 21 11.6364 21H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

RotateBottomLeftIcon.displayName = 'RotateBottomLeftIcon';
export default RotateBottomLeftIcon;
