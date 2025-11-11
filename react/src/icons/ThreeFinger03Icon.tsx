import React from 'react';
import config from '../config';

interface ThreeFinger03IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ThreeFinger03Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/three-finger03)
 * @see {@link https://clicons.dev/icon/three-finger03} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ThreeFinger03Icon = React.forwardRef<SVGSVGElement, ThreeFinger03IconProps>(
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

    const iconData = [["path", { d: "M11.5004 6C11.5004 5.17157 10.8289 4.5 10.0004 4.5C9.172 4.5 8.50042 5.17157 8.50042 6V13.9627L6.8797 12.3369C6.16877 11.6237 4.99772 11.6888 4.36965 12.4763C3.88907 13.0789 3.8758 13.9314 4.33738 14.5487L7.34137 18.5667C8.02311 19.4785 8.36398 19.9344 8.77419 20.2888C9.40001 20.8294 10.1499 21.2056 10.9566 21.3834C11.4853 21.5 12.0534 21.5 13.1896 21.5C15.3562 21.5 16.4395 21.5 17.3019 21.1679C18.6207 20.6601 19.6627 19.6148 20.1689 18.2918C20.5 17.4267 20.5 16.34 20.5 14.1667V11.5C20.5 10.3954 19.605 9.5 18.5004 9.5H17.5004M11.5004 6V4C11.5004 3.17157 12.172 2.5 13.0004 2.5C13.8289 2.5 14.5004 3.17157 14.5004 4V6M11.5004 6V10.5M14.5004 6V10.5M14.5004 6C14.5004 5.17157 15.172 4.5 16.0004 4.5C16.8289 4.5 17.5004 5.17157 17.5004 6V9.5M17.5004 9.5V11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

ThreeFinger03Icon.displayName = 'ThreeFinger03Icon';
export default ThreeFinger03Icon;
