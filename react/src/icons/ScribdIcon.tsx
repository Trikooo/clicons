import React from 'react';
import config from '../config';

interface ScribdIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ScribdIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/scribd)
 * @see {@link https://clicons.dev/icon/scribd} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ScribdIcon = React.forwardRef<SVGSVGElement, ScribdIconProps>(
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

    const iconData = [["path", { d: "M21.8181 16.9135C21.529 21.3939 18.298 21.7828 17.8843 21.9761C21.5207 16.9135 13.4265 11.766 12.3023 11.1653C11.1781 10.5647 9.67557 9.86998 8.90473 9.36339C7.62719 8.5238 7.174 7.74514 6.83123 7.13602C6.28163 6.15937 6.24663 3.85251 8.70487 3.73238C11.1631 3.61225 12.857 4.63324 12.9692 5.26037C12.7709 6.65093 15.4209 9.19726 17.7283 7.33718C20.3908 5.19091 17.9809 2.1304 16.9247 2C21.5928 2.22844 21.8365 6.07983 21.965 8.11072L21.9651 8.11266C21.9651 8.11266 22.1071 12.4331 21.8181 16.9135Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5.89221 21.5863C6.26017 18.7986 3.54263 17.6062 2.34281 18.0723C2.34281 18.0723 2 16.6741 2 14.2702V10.1C2.29361 10.9332 3.89608 13.1929 7.9571 15.0752C12.0181 16.9576 12.9787 18.6656 12.9787 19.2348C13.0383 19.7208 12.8844 20.9048 11.737 21.9374C10.0055 22.0232 6.33792 22.102 5.89221 21.5863Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

ScribdIcon.displayName = 'ScribdIcon';
export default ScribdIcon;
