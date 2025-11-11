import React from 'react';
import config from '../config';

interface MilkBottleIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MilkBottleIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/milk-bottle)
 * @see {@link https://clicons.dev/icon/milk-bottle} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MilkBottleIcon = React.forwardRef<SVGSVGElement, MilkBottleIconProps>(
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

    const iconData = [["path", { d: "M14.7273 5C15.631 5 16.3636 4.32843 16.3636 3.5C16.3636 2.67157 15.631 2 14.7273 2H9.27273C8.36899 2 7.63636 2.67157 7.63636 3.5C7.63636 4.32843 8.36899 5 9.27273 5M15.2459 4.92311C16.8664 7.89408 18 10.3773 18 13.7771V18C18 21.3093 17.2465 22 13.6364 22H10.3636C6.75345 22 6 21.3093 6 18V13.7771C6 10.3773 7.10674 7.88562 8.72727 4.91465", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M6 12C6.57143 12.5 8.09206 12.4761 8.98433 12.2789C9.60646 12.1415 10.2768 12.3027 10.6984 12.7639L11.523 13.6658C11.9973 14.1846 12.7163 14.4309 13.4245 14.3173L14.4681 14.1499C15.0422 14.0578 15.6132 14.2904 16.004 14.7055C17.2226 16 18 16 18 16", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

MilkBottleIcon.displayName = 'MilkBottleIcon';
export default MilkBottleIcon;
