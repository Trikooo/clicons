import React from 'react';
import config from '../config';

interface DialpadSquare02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name DialpadSquare02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/dialpad-square02)
 * @see {@link https://clicons.dev/icon/dialpad-square02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const DialpadSquare02Icon = React.forwardRef<SVGSVGElement, DialpadSquare02IconProps>(
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

    const iconData = [["path", { d: "M2 4C2 4.94281 2 5.41421 2.29289 5.70711C2.58579 6 3.05719 6 4 6C4.94281 6 5.41421 6 5.70711 5.70711C6 5.41421 6 4.94281 6 4C6 3.05719 6 2.58579 5.70711 2.29289C5.41421 2 4.94281 2 4 2C3.05719 2 2.58579 2 2.29289 2.29289C2 2.58579 2 3.05719 2 4Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2 12C2 12.9428 2 13.4142 2.29289 13.7071C2.58579 14 3.05719 14 4 14C4.94281 14 5.41421 14 5.70711 13.7071C6 13.4142 6 12.9428 6 12C6 11.0572 6 10.5858 5.70711 10.2929C5.41421 10 4.94281 10 4 10C3.05719 10 2.58579 10 2.29289 10.2929C2 10.5858 2 11.0572 2 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10 4C10 4.94281 10 5.41421 10.2929 5.70711C10.5858 6 11.0572 6 12 6C12.9428 6 13.4142 6 13.7071 5.70711C14 5.41421 14 4.94281 14 4C14 3.05719 14 2.58579 13.7071 2.29289C13.4142 2 12.9428 2 12 2C11.0572 2 10.5858 2 10.2929 2.29289C10 2.58579 10 3.05719 10 4Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M10 12C10 12.9428 10 13.4142 10.2929 13.7071C10.5858 14 11.0572 14 12 14C12.9428 14 13.4142 14 13.7071 13.7071C14 13.4142 14 12.9428 14 12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10C11.0572 10 10.5858 10 10.2929 10.2929C10 10.5858 10 11.0572 10 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M10 20C10 20.9428 10 21.4142 10.2929 21.7071C10.5858 22 11.0572 22 12 22C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20C14 19.0572 14 18.5858 13.7071 18.2929C13.4142 18 12.9428 18 12 18C11.0572 18 10.5858 18 10.2929 18.2929C10 18.5858 10 19.0572 10 20Z", stroke: "currentColor", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M18 4C18 4.94281 18 5.41421 18.2929 5.70711C18.5858 6 19.0572 6 20 6C20.9428 6 21.4142 6 21.7071 5.70711C22 5.41421 22 4.94281 22 4C22 3.05719 22 2.58579 21.7071 2.29289C21.4142 2 20.9428 2 20 2C19.0572 2 18.5858 2 18.2929 2.29289C18 2.58579 18 3.05719 18 4Z", stroke: "currentColor", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M18 12C18 12.9428 18 13.4142 18.2929 13.7071C18.5858 14 19.0572 14 20 14C20.9428 14 21.4142 14 21.7071 13.7071C22 13.4142 22 12.9428 22 12C22 11.0572 22 10.5858 21.7071 10.2929C21.4142 10 20.9428 10 20 10C19.0572 10 18.5858 10 18.2929 10.2929C18 10.5858 18 11.0572 18 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "6" }]];

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

DialpadSquare02Icon.displayName = 'DialpadSquare02Icon';
export default DialpadSquare02Icon;
