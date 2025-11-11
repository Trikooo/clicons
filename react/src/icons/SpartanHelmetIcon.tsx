import React from 'react';
import config from '../config';

interface SpartanHelmetIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SpartanHelmetIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/spartan-helmet)
 * @see {@link https://clicons.dev/icon/spartan-helmet} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SpartanHelmetIcon = React.forwardRef<SVGSVGElement, SpartanHelmetIconProps>(
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

    const iconData = [["path", { d: "M4.53767 15.0937C2.8878 8.60966 5.99612 4.5631 12.0003 2C18.0046 4.5631 21.1122 8.60966 19.4623 15.0937C19.3427 15.5637 19.3575 16.063 19.5336 16.514L20.9095 20.038C21.4448 21.409 19.4664 21.7351 18.6252 21.9121C16.3106 22.3991 14.0668 20.8106 13.693 18.4203C13.4291 16.7328 14.3833 16.4559 15.6306 15.817C15.6306 15.817 17.1867 15.2855 17.1867 13.6913C17.1867 12.5173 16.2578 11.5656 15.1119 11.5656C14.3943 11.5656 13.7621 11.774 13.135 12.4517C12.5272 13.1086 12.2234 13.437 12.0004 13.437C11.7774 13.437 11.4734 13.1086 10.8656 12.4518C10.2382 11.774 9.60571 11.5656 8.88813 11.5656C7.74224 11.5656 6.81332 12.5173 6.81332 13.6913C6.81332 15.2855 8.36942 15.817 8.36942 15.817C9.61674 16.4559 10.5709 16.7328 10.307 18.4203C9.93315 20.8106 7.6894 22.3991 5.37484 21.9121C4.53362 21.7351 2.55521 21.409 3.09051 20.038L4.46636 16.514C4.64246 16.063 4.65729 15.5637 4.53767 15.0937Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M10 20H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M11.9998 8H12.0088", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "2" }]];

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

SpartanHelmetIcon.displayName = 'SpartanHelmetIcon';
export default SpartanHelmetIcon;
