import React from 'react';
import config from '../config';

interface Mouse20IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Mouse20Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mouse20)
 * @see {@link https://clicons.dev/icon/mouse20} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Mouse20Icon = React.forwardRef<SVGSVGElement, Mouse20IconProps>(
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

    const iconData = [["path", { d: "M12 6V2.5M12 12V10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7.32948 4.4758C8.3873 4.23124 9.44531 3.70349 10.5038 2.89255C11.2805 2.29747 11.6689 1.99993 12.0012 2C12.3334 2.00007 12.7219 2.29794 13.4988 2.89369C14.5555 3.70396 15.6126 4.23133 16.6698 4.47578C17.4472 4.65552 17.8358 4.74538 18.0319 4.92956C18.228 5.11373 18.3175 5.40051 18.4964 5.97405C20.7629 13.2374 19.2955 19.4907 13.0181 21.7565C12.5682 21.9188 12.3433 22 12.0018 22C11.6603 22 11.4354 21.9188 10.9855 21.7565C4.70756 19.4907 3.23607 13.2373 5.50297 5.97386C5.68195 5.4004 5.77144 5.11367 5.96751 4.92951C6.16359 4.74535 6.55222 4.6555 7.32948 4.4758Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10.5 7.5C10.5 7.03406 10.5 6.80109 10.5761 6.61732C10.6776 6.37229 10.8723 6.17761 11.1173 6.07612C11.3011 6 11.5341 6 12 6C12.4659 6 12.6989 6 12.8827 6.07612C13.1277 6.17761 13.3224 6.37229 13.4239 6.61732C13.5 6.80109 13.5 7.03406 13.5 7.5V8.5C13.5 8.96594 13.5 9.19891 13.4239 9.38268C13.3224 9.62771 13.1277 9.82239 12.8827 9.92388C12.6989 10 12.4659 10 12 10C11.5341 10 11.3011 10 11.1173 9.92388C10.8723 9.82239 10.6776 9.62771 10.5761 9.38268C10.5 9.19891 10.5 8.96594 10.5 8.5V7.5Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M14.5 17C14.0126 17.6704 13.4275 18.2232 12.7332 18.6351C12.4273 18.8166 12.2743 18.9074 12 18.9074C11.7257 18.9074 11.5727 18.8166 11.2668 18.6351C10.5725 18.2232 9.98741 17.6704 9.5 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

Mouse20Icon.displayName = 'Mouse20Icon';
export default Mouse20Icon;
