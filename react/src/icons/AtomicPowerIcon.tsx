import React from 'react';
import config from '../config';

interface AtomicPowerIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AtomicPowerIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/atomic-power)
 * @see {@link https://clicons.dev/icon/atomic-power} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AtomicPowerIcon = React.forwardRef<SVGSVGElement, AtomicPowerIconProps>(
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

    const iconData = [["path", { d: "M20.663 8.85C21.2522 6.81022 21.0868 5.03955 20.0236 3.97636C17.7744 1.7271 12.3587 3.49602 7.92736 7.92736C7.45397 8.40074 7.01097 8.88536 6.6 9.37615M17.4 14.6238C16.989 15.1146 16.546 15.5993 16.0726 16.0726C11.6413 20.504 6.22562 22.2729 3.97636 20.0236C2.83569 18.883 2.72842 16.928 3.47772 14.7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.6754 9.30005L10.9243 11.3704C10.7105 11.6476 10.6037 11.7862 10.6699 11.8931C10.7361 12 10.9288 12 11.3141 12H12.6867C13.072 12 13.2647 12 13.3309 12.107C13.3971 12.2139 13.2902 12.3525 13.0765 12.6297L11.3141 14.7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M9.75 17.7059C9.13145 17.2114 8.52058 16.6659 7.92736 16.0726C3.49602 11.6413 1.7271 6.22562 3.97636 3.97636C5.11702 2.83569 7.07202 2.72842 9.3 3.47772M14.25 20.3607C16.6631 21.2813 18.8068 21.2405 20.0236 20.0236C22.2729 17.7744 20.504 12.3587 16.0726 7.92736C15.4794 7.33413 14.8686 6.78862 14.25 6.29407", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

AtomicPowerIcon.displayName = 'AtomicPowerIcon';
export default AtomicPowerIcon;
