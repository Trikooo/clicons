import React from 'react';
import config from '../config';

interface PoopIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PoopIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/poop)
 * @see {@link https://clicons.dev/icon/poop} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PoopIcon = React.forwardRef<SVGSVGElement, PoopIconProps>(
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

    const iconData = [["path", { d: "M19.2007 14C20.3305 14.8357 21 15.8744 21 17C21 19.7614 16.9706 22 12 22C7.02944 22 3 19.7614 3 17C3 15.8744 3.6695 14.8357 4.79934 14", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.7585 8C11.2229 7.11636 9.9284 6.78583 8.89652 6.79725M8.89652 6.79725C7.009 6.81815 6 7.9832 6 9C6 10.6569 8.59363 12 11.793 12C14.9924 12 16.8707 10.4819 17.5861 9C19.0343 6 16.6206 2.5 11.3103 2C12.4367 3.36484 13.531 6.23506 8.89652 6.79725Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M17.0144 10C18.8351 10.7211 20 11.8265 20 13.0657C20 15.2386 16.4183 17 12 17C7.58172 17 4 15.2386 4 13.0657C4 11.9588 4.92955 10.9586 6.42571 10.2437", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

PoopIcon.displayName = 'PoopIcon';
export default PoopIcon;
