import React from 'react';
import config from '../config';

interface SunCloud01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SunCloud01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/sun-cloud01)
 * @see {@link https://clicons.dev/icon/sun-cloud01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SunCloud01Icon = React.forwardRef<SVGSVGElement, SunCloud01IconProps>(
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

    const iconData = [["path", { d: "M17.4776 11.0001C17.485 11 17.4925 11 17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.9853 19.9853 20 17.5 20H7C4.23858 20 2 17.7614 2 15C2 12.4003 3.98398 10.2641 6.52042 10.0227M17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227M17.4776 11.0001C17.3753 12.1345 16.9286 13.1696 16.2428 14M6.52042 10.0227C6.67826 10.0077 6.83823 10 7 10C8.12582 10 9.16474 10.3721 10.0005 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M9 5.65468C8.30552 4.65451 7.15088 4 5.84388 4C3.72096 4 2 5.72674 2 7.85679C2 9.15354 2.63783 10.3008 3.61588 11", stroke: "currentColor", strokeWidth: "1.5", key: "1" }]];

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

SunCloud01Icon.displayName = 'SunCloud01Icon';
export default SunCloud01Icon;
