import React from 'react';
import config from '../config';

interface Tap04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Tap04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/tap04)
 * @see {@link https://clicons.dev/icon/tap04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Tap04Icon = React.forwardRef<SVGSVGElement, Tap04IconProps>(
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

    const iconData = [["path", { d: "M7.72161 14.8947V11.5789M7.72161 11.5789V6.15789C7.72161 5.24227 8.45287 4.5 9.35494 4.5C10.257 4.5 10.9883 5.24226 10.9883 6.15789V10.6316L13.8601 11.084C15.6602 11.3581 16.5602 11.4951 17.1942 11.8806C18.2414 12.5174 19 13.4737 19 14.8697C19 15.8421 18.7632 16.4945 18.1876 18.2472C17.8224 19.3594 17.6398 19.9154 17.342 20.3556C16.8517 21.0804 16.1285 21.6095 15.2961 21.8524C14.7905 22 14.213 22 13.0581 22H11.7468C10.0813 22 9.24852 22 8.53345 21.6827C8.21038 21.5393 7.90896 21.3502 7.63815 21.121C7.03875 20.6138 6.66633 19.8577 5.92149 18.3456C5.31747 17.1194 5.01546 16.5063 5.00077 15.8707C4.99414 15.584 5.0303 15.298 5.108 15.0223C5.28029 14.411 5.72499 13.8951 6.61438 12.8634L7.72161 11.5789Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13.3164 6C13.3164 3.79086 11.5255 2 9.31641 2C7.10727 2 5.31641 3.79086 5.31641 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

Tap04Icon.displayName = 'Tap04Icon';
export default Tap04Icon;
