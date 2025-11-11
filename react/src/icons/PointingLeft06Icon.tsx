import React from 'react';
import config from '../config';

interface PointingLeft06IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PointingLeft06Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pointing-left06)
 * @see {@link https://clicons.dev/icon/pointing-left06} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PointingLeft06Icon = React.forwardRef<SVGSVGElement, PointingLeft06IconProps>(
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

    const iconData = [["path", { d: "M1.99994 4.50012H7.9981M1.99994 4.50012C1.99994 3.79989 3.99363 2.49165 4.49917 2.00012M1.99994 4.50012C1.99994 5.20035 3.99363 6.50859 4.49917 7.00012", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.0746 13.0053H7.97205M7.97205 13.0053H3.50404C2.67335 13.0053 1.99994 12.3329 1.99994 11.5035C1.99994 10.6741 2.67335 10.0017 3.50404 10.0017L8.96681 10.0017M7.97205 13.0053L7.9989 14.0596C8.01701 14.7707 8.40517 15.3872 8.97657 15.7276M8.96681 10.0017L13.5283 10.0017M8.96681 10.0017L11.7258 7.40828C13.5928 5.83582 14.9538 6.66214 15.71 7.24239L19.6826 10.1228C20.0238 10.3702 20.4345 10.5035 20.856 10.5035H21.9887M11.0051 16.0088H10.0014C9.62726 16.0088 9.27665 15.9063 8.97657 15.7276M8.97657 15.7276L9.03126 17.0632C9.04843 17.7374 9.39835 18.3267 9.92172 18.6761M12.0375 19.0123H11.0337C10.6228 19.0123 10.2401 18.8886 9.92172 18.6761M9.92172 18.6761L10.1906 20.267C10.3256 21.2662 11.1844 22.0089 12.1943 21.9996H15.7425C16.3462 21.9996 16.9526 21.9511 17.5262 21.7624C18.0038 21.6053 18.5296 21.385 18.873 21.1151C19.6139 20.5328 19.8764 20.1257 20.5114 20.0199C21.0195 19.9352 21.6567 19.9233 22.0005 19.9233", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

PointingLeft06Icon.displayName = 'PointingLeft06Icon';
export default PointingLeft06Icon;
