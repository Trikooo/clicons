import React from 'react';
import config from '../config';

interface Joystick01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Joystick01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/joystick01)
 * @see {@link https://clicons.dev/icon/joystick01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Joystick01Icon = React.forwardRef<SVGSVGElement, Joystick01IconProps>(
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

    const iconData = [["path", { d: "M15.4749 22H8.52514C7.31383 22 6.70817 22 6.3832 21.7512C6.18901 21.6025 6.0581 21.4011 6.0117 21.1795C5.93404 20.8087 6.24565 20.3562 6.86886 19.4512C7.53544 18.4832 7.86873 17.9992 8.3452 17.6645C8.63776 17.459 8.96695 17.2966 9.31973 17.1838C9.89428 17 10.5421 17 11.8377 17H12.1623C13.4579 17 14.1057 17 14.6803 17.1838C15.033 17.2966 15.3622 17.459 15.6548 17.6645C16.1313 17.9992 16.4646 18.4832 17.1311 19.4512C17.7544 20.3562 18.066 20.8087 17.9883 21.1795C17.9419 21.4011 17.811 21.6025 17.6168 21.7512C17.2918 22 16.6862 22 15.4749 22Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M8.5 12H15.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 13L12 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M10.0064 12C10.0064 12 11.0384 6.1382 9.17022 3.41883C8.62458 2.62456 9.52092 2.30021 10.0305 2.15665C11.9538 1.61477 13.1167 2.50736 13.5581 4.39146C13.6047 4.59038 13.5765 4.79889 13.4913 4.98475L13.2346 5.54458C13.1032 5.83125 13.1153 6.16269 13.2675 6.43907L13.7558 7.32611C13.9271 7.63716 13.9197 8.01506 13.7366 8.31933L13.3619 8.94167C13.1575 9.28113 13.1784 9.70751 13.3482 10.0653C13.7559 10.9239 14 12 14 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

Joystick01Icon.displayName = 'Joystick01Icon';
export default Joystick01Icon;
