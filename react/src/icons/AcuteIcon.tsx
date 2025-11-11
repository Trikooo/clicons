import React from 'react';
import config from '../config';

interface AcuteIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AcuteIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/acute)
 * @see {@link https://clicons.dev/icon/acute} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AcuteIcon = React.forwardRef<SVGSVGElement, AcuteIconProps>(
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

    const iconData = [["path", { d: "M10.5958 2.52324C11.3962 2.29824 13.2718 1.82324 13.7721 2.07324M13.7721 2.07324C14.2973 2.39824 14.3973 4.14824 14.5475 4.87324M13.7721 2.07324L3.81773 18.1732C3.81773 18.1732 3.29249 19.0232 3.59264 19.4982C3.81774 20.0232 5.11831 19.9982 5.11831 19.9982H20.5M20.5 19.9982C20.5 19.3982 18.6992 18.1982 18.5241 17.9982M20.5 19.9982C20.5 20.5982 19.0494 21.4482 18.5241 21.9982", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.45", key: "0" }],
  ["path", { d: "M7.49414 12.498C9.36996 12.823 10.8049 13.723 11.6553 15.048C12.6057 16.398 12.7214 18.273 12.1462 19.798", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

AcuteIcon.displayName = 'AcuteIcon';
export default AcuteIcon;
