import React from 'react';
import config from '../config';

interface Rhombus01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Rhombus01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/rhombus01)
 * @see {@link https://clicons.dev/icon/rhombus01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Rhombus01Icon = React.forwardRef<SVGSVGElement, Rhombus01IconProps>(
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

    const iconData = [["path", { d: "M8.05622 4.78867C9.91534 2.92956 10.8449 2 12 2C13.1551 2 14.0847 2.92956 15.9438 4.78867L19.2113 8.05622C21.0704 9.91534 22 10.8449 22 12C22 13.1551 21.0704 14.0847 19.2113 15.9438L15.9438 19.2113C14.0847 21.0704 13.1551 22 12 22C10.8449 22 9.91534 21.0704 8.05622 19.2113L4.78867 15.9438C2.92956 14.0847 2 13.1551 2 12C2 10.8449 2.92956 9.91534 4.78867 8.05622L8.05622 4.78867Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

Rhombus01Icon.displayName = 'Rhombus01Icon';
export default Rhombus01Icon;
