import React from 'react';
import config from '../config';

interface BasketballHoopIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BasketballHoopIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/basketball-hoop)
 * @see {@link https://clicons.dev/icon/basketball-hoop} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BasketballHoopIcon = React.forwardRef<SVGSVGElement, BasketballHoopIconProps>(
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

    const iconData = [["path", { d: "M5 17C4.37188 16.8651 3.87905 16.6488 3.46243 16.3018C3.25989 16.1331 3.07418 15.9446 2.90796 15.7391C2 14.6163 2 12.9481 2 9.61164C2 6.27522 2 4.60701 2.90796 3.48419C3.07418 3.27864 3.25989 3.09016 3.46243 2.92147C4.56878 2 6.21252 2 9.5 2H14.5C17.7875 2 19.4312 2 20.5376 2.92147C20.7401 3.09016 20.9258 3.27864 21.092 3.48419C22 4.60701 22 6.27522 22 9.61164C22 12.9481 22 14.6163 21.092 15.7391C20.9258 15.9446 20.7401 16.1331 20.5376 16.3018C20.1209 16.6488 19.6281 16.8651 19 17", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M6 13H7.33333M7.33333 13L8.5 22M7.33333 13H12M18 13H16.6667M16.6667 13L15.5 22M16.6667 13H12M12 13V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M8 10C8.05893 8.04825 9.26181 8 10.9978 8H13.0022C14.7382 8 15.9411 8.04825 16 10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M8 16.5H16M8.44444 20H15.5556", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

BasketballHoopIcon.displayName = 'BasketballHoopIcon';
export default BasketballHoopIcon;
