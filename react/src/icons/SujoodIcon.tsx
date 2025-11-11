import React from 'react';
import config from '../config';

interface SujoodIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SujoodIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/sujood)
 * @see {@link https://clicons.dev/icon/sujood} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SujoodIcon = React.forwardRef<SVGSVGElement, SujoodIconProps>(
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

    const iconData = [["path", { d: "M20 12.5107C20 11.0269 19.1112 8.56411 15.5561 6.5857C11.1122 4.11268 7.81475 4.86323 6.66835 6.5857C5.6808 8.06949 5.18705 10.0479 9.63094 14.9939H7.99878C7.05716 14.9939 6.58499 14.9953 6.29222 15.2875C6 15.5802 6 16.0511 6 16.9927C6 17.9343 6 18.4051 6.29222 18.6979C6.58499 18.9901 7.05716 18.9915 7.99878 18.9915H10C11.165 19.069 13.4951 18.6512 13.4951 16.3595M20 12.5107C19.5 12.8337 18 14.382 16 13.9945L17 16.493C17.6667 16.6596 19.1 17.7922 19.5 18.9915H16.1606C15.4429 18.9915 14.7802 18.6071 14.4242 17.9844L13.4951 16.3595M20 12.5107H20.2577C21.7722 12.5107 23 13.7378 23 15.2514C23 16.765 21.7722 17.9921 20.2577 17.9921H19M15.5561 10.4966C14.7099 10.4966 13.6934 10.7926 12.8021 11.1429C11.7757 11.5463 11.443 12.7705 11.9902 13.7275L13.4951 16.3595", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M6.0001 15.5C4.99881 15.5 3.79726 14 2.99623 14C2.16898 14 2.02519 14.3413 2.00019 16.9976C1.9898 18.1021 2.394 19 3.5 19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

SujoodIcon.displayName = 'SujoodIcon';
export default SujoodIcon;
