import React from 'react';
import config from '../config';

interface PackageDimensions01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PackageDimensions01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/package-dimensions01)
 * @see {@link https://clicons.dev/icon/package-dimensions01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PackageDimensions01Icon = React.forwardRef<SVGSVGElement, PackageDimensions01IconProps>(
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

    const iconData = [["path", { d: "M15.5 7.5H13.5C10.6716 7.5 9.25736 7.5 8.37868 8.37868C7.5 9.25736 7.5 10.6716 7.5 13.5V15.5C7.5 18.3284 7.5 19.7426 8.37868 20.6213C9.25736 21.5 10.6716 21.5 13.5 21.5H15.5C18.3284 21.5 19.7426 21.5 20.6213 20.6213C21.5 19.7426 21.5 18.3284 21.5 15.5V13.5C21.5 10.6716 21.5 9.25736 20.6213 8.37868C19.7426 7.5 18.3284 7.5 15.5 7.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M16 7.5H13V10.5C13 10.9714 13 11.2071 13.1464 11.3536C13.2929 11.5 13.5286 11.5 14 11.5H15C15.4714 11.5 15.7071 11.5 15.8536 11.3536C16 11.2071 16 10.9714 16 10.5V7.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10.5 18.5H13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M7.5 3.5H21.5M7.5 3.5V2.5M7.5 3.5V4.5M21.5 3.5V2.5M21.5 3.5V4.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M3.5 7.5L3.5 21.5M3.5 7.5L4.5 7.5M3.5 7.5L2.5 7.5M3.5 21.5H4.5M3.5 21.5H2.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]];

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

PackageDimensions01Icon.displayName = 'PackageDimensions01Icon';
export default PackageDimensions01Icon;
