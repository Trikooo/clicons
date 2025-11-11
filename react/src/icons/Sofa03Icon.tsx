import React from 'react';
import config from '../config';

interface Sofa03IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Sofa03Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/sofa03)
 * @see {@link https://clicons.dev/icon/sofa03} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Sofa03Icon = React.forwardRef<SVGSVGElement, Sofa03IconProps>(
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

    const iconData = [["path", { d: "M7 16V19M17 16V19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M20.9996 9.26828C20.043 8.716 18.8198 9.04375 18.2675 10.0003L17.2581 12.3892C17.0078 12.9815 16.9799 13 16.3369 13H7.66304C7.02008 13 6.99218 12.9815 6.74191 12.3893L5.73238 10.0003C5.1801 9.04375 3.95692 8.716 3.00033 9.26828C2.04375 9.82057 1.716 11.0437 2.26828 12.0003C2.69932 12.7469 3.89493 12.6838 4.08847 13.2646C4.5284 14.5848 4.74836 15.2449 5.27216 15.6224C5.79596 16 6.49175 16 7.88331 16H16.1166C17.5082 16 18.204 16 18.7278 15.6224C19.2516 15.2448 19.4716 14.5847 19.9115 13.2645C20.105 12.6838 21.3007 12.7468 21.7316 12.0003C22.2839 11.0437 21.9562 9.82057 20.9996 9.26828Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M4.5 9L4.54003 8.89326C5.24623 7.01005 5.59933 6.06845 6.37022 5.53422C7.1411 5 8.14674 5 10.158 5H13.842C15.8533 5 16.8589 5 17.6298 5.53422C18.4007 6.06845 18.7538 7.01005 19.46 8.89326L19.5 9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

Sofa03Icon.displayName = 'Sofa03Icon';
export default Sofa03Icon;
