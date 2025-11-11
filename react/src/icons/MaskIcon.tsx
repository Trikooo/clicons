import React from 'react';
import config from '../config';

interface MaskIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MaskIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mask)
 * @see {@link https://clicons.dev/icon/mask} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MaskIcon = React.forwardRef<SVGSVGElement, MaskIconProps>(
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

    const iconData = [["path", { d: "M6 9C7.46589 8.38677 9.61061 8 12 8C14.3894 8 16.5341 8.38677 18 9", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M9 11.5C9.93974 11.176 10.9492 11 12 11C13.0508 11 14.0603 11.176 15 11.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M8 15C9.17669 15.636 10.5429 16 12 16C13.4571 16 14.8233 15.636 16 15", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M6 10C6 13.2571 4.1688 14.9419 3.05731 14.9985C3.02153 15.0003 2.98891 14.9808 2.97139 14.9496C2.15656 13.4966 2 11.7879 2 10C2 6.68629 2.89543 4 4 4C5.10457 4 6 6.68629 6 10Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M18 10C18 13.2571 19.8312 14.9419 20.9427 14.9985C20.9785 15.0003 21.0111 14.9808 21.0286 14.9496C21.8434 13.4966 22 11.7879 22 10C22 6.68629 21.1046 4 20 4C18.8954 4 18 6.68629 18 10Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M21 15C19.2035 17.989 15.8458 20 12 20C8.15423 20 4.79648 17.989 3 15", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "5" }]];

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

MaskIcon.displayName = 'MaskIcon';
export default MaskIcon;
