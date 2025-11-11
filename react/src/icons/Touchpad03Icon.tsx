import React from 'react';
import config from '../config';

interface Touchpad03IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Touchpad03Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/touchpad03)
 * @see {@link https://clicons.dev/icon/touchpad03} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Touchpad03Icon = React.forwardRef<SVGSVGElement, Touchpad03IconProps>(
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

    const iconData = [["path", { d: "M14.8184 9.4444H15.7275C16.7316 9.4444 17.5456 10.2403 17.5456 11.2222M17.5456 11.2222V12.111M17.5456 11.2222C17.5456 10.7312 17.9526 10.3333 18.4547 10.3333C19.4588 10.3333 20.2728 11.1292 20.2728 12.111M20.2728 12.111V12.9999M20.2728 12.111C20.2728 11.6457 20.7001 11.2918 21.1695 11.3683L21.4808 11.419C22.3574 11.5619 23 12.3036 23 13.1726L22.9996 13.5927C22.9996 15.5245 22.9996 16.4904 22.6987 17.2594C22.5241 17.7055 22.0635 18.2744 21.6952 18.6855C21.3767 19.0411 21.1815 19.4922 21.1815 19.9648V21M14.8182 11.2222V6.33332C14.8182 5.59695 14.2077 5 13.4546 5C12.7015 5 12.091 5.59695 12.091 6.33332L12.0908 13.411L10.6178 11.9662C9.97156 11.3323 8.907 11.3901 8.33604 12.0902C7.89916 12.6258 7.88709 13.3835 8.3067 13.9323L11.5791 18.0195C12.2052 18.8015 12.5453 20.0069 12.5453 21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7.00217 18C5.77781 17.9905 5.06065 17.9423 4.47034 17.6978C3.4898 17.2918 2.71077 16.513 2.30461 15.5327C2 14.7975 2 13.8655 2 12.0015V10.0012C2 6.22938 2 4.34349 3.17208 3.17174C4.34416 2 6.2306 2 10.0035 2H14.0052C17.7781 2 19.6645 2 20.8366 3.17174C21.7801 4.11497 21.9641 5.52095 22 8.00088", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]];

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

Touchpad03Icon.displayName = 'Touchpad03Icon';
export default Touchpad03Icon;
