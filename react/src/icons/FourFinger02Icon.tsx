import React from 'react';
import config from '../config';

interface FourFinger02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name FourFinger02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/four-finger02)
 * @see {@link https://clicons.dev/icon/four-finger02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const FourFinger02Icon = React.forwardRef<SVGSVGElement, FourFinger02IconProps>(
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

    const iconData = [["path", { d: "M7.84051 13.4813V4.98823C7.84051 4.1585 8.50582 3.48586 9.32652 3.48586C10.1472 3.48586 10.8125 4.15828 10.8125 4.98802M10.8125 9.97422V3.50238C10.8125 2.67264 11.4778 2 12.2986 2C13.1193 2 13.7846 2.67264 13.7846 3.50238V11.0057M13.7846 5.47656C13.7846 4.64306 14.4836 3.9678 15.308 3.9678C16.1324 3.9678 16.8008 4.64348 16.8008 5.47699V11.9989M16.8008 7.51562C16.8008 6.69224 17.461 6.02157 18.2754 6.02157C19.0898 6.02157 19.75 6.68905 19.75 7.51243V16.1246C19.75 17.1574 19.3743 18.3101 18.2322 19.6845C17.9015 20.0825 17.6958 20.5766 17.6958 21.0964V22M7.84051 8.85627C7.00785 9.63725 4.99016 11.6991 4.43639 12.8432C3.88262 13.9873 4.7059 15.3388 5.05201 15.8682L7.84008 19.5755C8.10344 19.9257 8.24603 20.3535 8.24603 20.7935V22", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }]];

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

FourFinger02Icon.displayName = 'FourFinger02Icon';
export default FourFinger02Icon;
