import React from 'react';
import config from '../config';

interface MoonFastWindIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MoonFastWindIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/moon-fast-wind)
 * @see {@link https://clicons.dev/icon/moon-fast-wind} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MoonFastWindIcon = React.forwardRef<SVGSVGElement, MoonFastWindIconProps>(
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

    const iconData = [["path", { d: "M19.5483 17C20.7476 15.9645 21.5819 14.6272 22 13.1756C19.5473 13.4746 17.0369 12.3432 15.7234 10.1113C14.4099 7.87928 14.6664 5.1807 16.1567 3.2463C14.1701 2.75234 11.9929 2.98823 10.0779 4.07295C7.30713 5.64236 5.83056 8.56635 6.0155 11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2 15C5.5 18.5 11.5755 17 12.7324 15C12.9026 14.7058 13 14.3643 13 14C13 12.8954 12.1046 12 11 12C9.89543 12 9 12.8954 9 14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M14.0001 20.9146C14.1565 20.9699 14.3248 21 14.5001 21C15.3285 21 16.0001 20.3284 16.0001 19.5C16.0001 18.6716 15.3285 18 14.5001 18C14.206 18 13.9317 18.0846 13.7002 18.2309C12.5505 19.0225 10.4209 20.0378 8 20.301M5 20.1936C4.33025 20.0635 3.6594 19.8541 3 19.5478", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M19 20.0003C19.2581 20.0003 19.9557 19.8804 21 19.4551", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }]];

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

MoonFastWindIcon.displayName = 'MoonFastWindIcon';
export default MoonFastWindIcon;
