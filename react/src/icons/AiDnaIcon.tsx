import React from 'react';
import config from '../config';

interface AiDnaIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AiDnaIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ai-dna)
 * @see {@link https://clicons.dev/icon/ai-dna} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AiDnaIcon = React.forwardRef<SVGSVGElement, AiDnaIconProps>(
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

    const iconData = [["path", { d: "M7.49115 14.0016C3.00095 11.6016 3.00095 10.4016 3.00095 10.0016C3.00095 9.60159 3.00095 8.40159 7.49115 6.00159M7.49115 14.0016C3.00095 16.4016 3.00008 17.2016 3.00008 18.0016M7.49115 14.0016C11.9805 11.6021 11.9805 10.4021 11.9805 10.0018C11.9805 9.60159 11.9805 8.40112 7.49115 6.00159M7.49115 6.00159C11.9814 3.60159 11.9814 2.80159 11.9814 2.00159M7.49115 6.00159L5.30789 4.74589C3.00065 3.28308 3.00008 2.64234 3.00008 2.00159", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14.4119 12.0006V13.9796M10.9249 15.501H12.9769M18.9479 15.501H20.9999M18.9479 18.4742H20.9999M10.9249 18.4742H12.9769M14.4119 20.0198V21.9989M17.4374 20.0198V21.9989M17.4266 12.0006V13.9796M13.9769 19.9682H17.9479C18.5002 19.9682 18.9479 19.5205 18.9479 18.9682V14.9796C18.9479 14.4273 18.5002 13.9796 17.9479 13.9796H13.9769C13.4246 13.9796 12.9769 14.4273 12.9769 14.9796V18.9682C12.9769 19.5205 13.4246 19.9682 13.9769 19.9682Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]];

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

AiDnaIcon.displayName = 'AiDnaIcon';
export default AiDnaIcon;
