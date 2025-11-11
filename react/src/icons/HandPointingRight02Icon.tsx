import React from 'react';
import config from '../config';

interface HandPointingRight02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HandPointingRight02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-right02)
 * @see {@link https://clicons.dev/icon/hand-pointing-right02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HandPointingRight02Icon = React.forwardRef<SVGSVGElement, HandPointingRight02IconProps>(
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

    const iconData = [["path", { d: "M10 7.41601L13.5 7.41601M13.5 7.41601L19.75 7.41601C20.7165 7.41601 21.5 8.19951 21.5 9.16601C21.5 10.1325 20.7165 10.916 19.75 10.916L14.5 10.916L14.0224 13.993C13.7331 15.9216 13.5885 16.886 13.1816 17.5652C12.5094 18.6872 11.5 19.5 10.0264 19.5C9 19.5 8.3114 19.2463 6.46127 18.6296C5.28733 18.2383 4.70036 18.0426 4.23571 17.7236C3.47073 17.1983 2.91219 16.4233 2.65576 15.5315C2.5 14.9898 2.5 14.3711 2.5 13.1336L2.5 11.7287C2.5 9.94422 2.5 9.05198 2.83495 8.28584C2.98627 7.9397 3.18587 7.61674 3.42779 7.32659C3.96326 6.68438 4.7613 6.28535 6.35738 5.48731C7.65171 4.84015 8.29887 4.51657 8.96984 4.50082C9.27244 4.49372 9.57436 4.53246 9.86537 4.61571C10.5106 4.80031 11.0552 5.27678 12.1442 6.2297L13.5 7.41601Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

HandPointingRight02Icon.displayName = 'HandPointingRight02Icon';
export default HandPointingRight02Icon;
