import React from 'react';
import config from '../config';

interface MochiIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MochiIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mochi)
 * @see {@link https://clicons.dev/icon/mochi} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MochiIcon = React.forwardRef<SVGSVGElement, MochiIconProps>(
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

    const iconData = [["path", { d: "M19 21C20.7514 20.3192 22 19.0219 22 16.7771C22 13.0188 18.5 9 15 9C11.5 9 8 13.0188 8 16.7771C8 19.0219 9.24858 20.3192 11 21", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M16 9.00935C15.4708 5.45852 12.2544 2 9.03788 2C5.51894 2 2 6.13953 2 10.0107C2 13.61 5.04202 14.8444 8.29768 15", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M7.5 5L6.5 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M10.5 5L11.5 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M15 12C17 12 19 14.226 19 16.3077C19 17.5561 18.1523 18.2754 17.0951 18.6513C16.6449 18.8113 16.3021 19.2104 16.3021 19.6882V20.718C16.3021 21.426 15.7281 22 15.0201 22C14.312 22 13.7381 21.426 13.7381 20.718V19.6882C13.7381 19.2104 13.3955 18.8109 12.9447 18.6526C11.8758 18.2771 11 17.5575 11 16.3077C11 14.226 13 12 15 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "4" }]];

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

MochiIcon.displayName = 'MochiIcon';
export default MochiIcon;
