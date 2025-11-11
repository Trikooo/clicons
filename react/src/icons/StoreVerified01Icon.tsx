import React from 'react';
import config from '../config';

interface StoreVerified01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name StoreVerified01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/store-verified01)
 * @see {@link https://clicons.dev/icon/store-verified01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const StoreVerified01Icon = React.forwardRef<SVGSVGElement, StoreVerified01IconProps>(
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

    const iconData = [["path", { d: "M14.9713 7.5C14.9713 7.5 15.4713 7.5 15.9713 8.5C15.9713 8.5 17.5595 6 18.9713 5.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18.9954 15.042L19.0241 19.5927C18.9748 20.9362 17.8679 22 16.5192 22H5.39281C4.00847 22 2.88623 20.8814 2.88623 19.5014L2.9724 13.0355M8.98101 6.0129L5.1476 5.94884C4.25796 5.92732 3.46051 6.49283 3.18918 7.33765L2.09203 10.7538C1.96224 11.1579 1.95328 11.5994 2.16878 11.9654C2.95433 13.2993 5.06345 15.1192 8.41723 13.163M7.44587 11.3322C7.83597 12.6005 9.36528 14.8259 12.486 13.5372", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M22.0003 7.01618C22.0003 9.78653 19.7585 12.0324 16.9932 12.0324C14.2278 12.0324 11.986 9.78653 11.986 7.01618C11.986 4.24582 14.2278 2 16.9932 2C19.7585 2 22.0003 4.24582 22.0003 7.01618Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }]];

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

StoreVerified01Icon.displayName = 'StoreVerified01Icon';
export default StoreVerified01Icon;
