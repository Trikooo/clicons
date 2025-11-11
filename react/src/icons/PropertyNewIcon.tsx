import React from 'react';
import config from '../config';

interface PropertyNewIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PropertyNewIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/property-new)
 * @see {@link https://clicons.dev/icon/property-new} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PropertyNewIcon = React.forwardRef<SVGSVGElement, PropertyNewIconProps>(
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

    const iconData = [["path", { d: "M2.50014 11.9999C2.50014 7.52157 2.50014 5.28239 3.89138 3.89115C5.28263 2.49991 7.5218 2.49991 12.0001 2.49991C16.4785 2.49991 18.7177 2.49991 20.1089 3.89115C21.5001 5.28239 21.5001 7.52157 21.5001 11.9999C21.5001 16.4783 21.5001 18.7174 20.1089 20.1087C18.7177 21.4999 16.4785 21.4999 12.0001 21.4999C7.5218 21.4999 5.28263 21.4999 3.89138 20.1087C2.50014 18.7174 2.50014 16.4783 2.50014 11.9999Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2.5 8H21.5", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M11 17H17M7 17H8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M11 13H17M7 13H8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

PropertyNewIcon.displayName = 'PropertyNewIcon';
export default PropertyNewIcon;
