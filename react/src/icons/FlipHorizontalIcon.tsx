import React from 'react';
import config from '../config';

interface FlipHorizontalIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name FlipHorizontalIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/flip-horizontal)
 * @see {@link https://clicons.dev/icon/flip-horizontal} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const FlipHorizontalIcon = React.forwardRef<SVGSVGElement, FlipHorizontalIconProps>(
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

    const iconData = [["path", { d: "M6.29516 14.4204C7.65364 13.4668 8.33288 12.99 8.46522 12.3436C8.51159 12.1172 8.51159 11.8828 8.46522 11.6563C8.33288 11.01 7.65364 10.5332 6.29516 9.57959C4.65002 8.42475 3.82745 7.84734 3.15323 8.03482C2.91938 8.09984 2.70324 8.22164 2.52214 8.39045C2 8.87715 2 9.9181 2 12C2 14.0819 2 15.1229 2.52214 15.6096C2.70324 15.7784 2.91938 15.9002 3.15323 15.9652C3.82745 16.1527 4.65003 15.5752 6.29516 14.4204Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.7048 9.57959C16.3464 10.5332 15.6671 11.01 15.5348 11.6564C15.4884 11.8828 15.4884 12.1172 15.5348 12.3436C15.6671 12.99 16.3464 13.4668 17.7048 14.4204C19.35 15.5752 20.1725 16.1527 20.8468 15.9652C21.0806 15.9002 21.2968 15.7784 21.4779 15.6096C22 15.1229 22 14.0819 22 12C22 9.9181 22 8.87715 21.4779 8.39045C21.2968 8.22164 21.0806 8.09984 20.8468 8.03482C20.1725 7.84734 19.35 8.42476 17.7048 9.57959Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 14V10M12 6.5V3M12 21V17.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }]];

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

FlipHorizontalIcon.displayName = 'FlipHorizontalIcon';
export default FlipHorizontalIcon;
