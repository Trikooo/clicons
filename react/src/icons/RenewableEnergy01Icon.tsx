import React from 'react';
import config from '../config';

interface RenewableEnergy01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name RenewableEnergy01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/renewable-energy01)
 * @see {@link https://clicons.dev/icon/renewable-energy01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const RenewableEnergy01Icon = React.forwardRef<SVGSVGElement, RenewableEnergy01IconProps>(
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

    const iconData = [["path", { d: "M18 7.26294C20.412 8.60838 22 10.8996 22 13.5C22 15.5586 21.0047 17.4235 19.3933 18.7787C19.1517 18.9819 19 19.2762 19 19.5919V22H17L16.2062 20.8674C16.083 20.6916 15.8616 20.6152 15.6537 20.6687C13.9248 21.1132 12.0752 21.1132 10.3463 20.6687C10.1384 20.6152 9.91703 20.6916 9.79384 20.8674L9 22H7V19.6154C7 19.2866 6.83835 18.9788 6.56764 18.7921C5.49285 18.0511 2 16.6014 2 15.0582V13.5C2 12.9082 2.44771 12.4286 3 12.4286C3.60665 12.4286 4.10188 12.1929 4.30205 11.5661C4.87123 9.78376 6.20828 8.26239 8 7.26294", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13.5 2L11 6H15L12.5 10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M7.49981 12H7.50879", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "2" }]];

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

RenewableEnergy01Icon.displayName = 'RenewableEnergy01Icon';
export default RenewableEnergy01Icon;
