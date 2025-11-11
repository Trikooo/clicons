import React from 'react';
import config from '../config';

interface Legal02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Legal02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/legal02)
 * @see {@link https://clicons.dev/icon/legal02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Legal02Icon = React.forwardRef<SVGSVGElement, Legal02IconProps>(
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

    const iconData = [["path", { d: "M14.0011 9.79802L4.39343 10.4919C3.10421 10.585 2.00109 9.66574 2.0011 8.49837C2.00111 7.331 3.10426 6.41176 4.39348 6.50485L14.0011 7.19851", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M21.001 13.9983L13.0011 13.9984M21.0011 2.99835L13.0012 2.99842M20.0012 2.99836L14.0013 2.99841C14.0013 2.99841 13.5012 5.95993 13.5012 8.49838C13.5012 11.0369 14.0011 13.9984 14.0011 13.9984L20.001 13.9983C20.001 13.9983 20.5011 11.0368 20.5011 8.49832C20.5011 5.95988 20.0012 2.99836 20.0012 2.99836Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12.0011 21.0016H21.9989M13.2258 21.0016C13.7773 20.0142 14.1892 18.1245 16.1412 18.0186C16.7209 17.9872 17.3108 17.9872 17.8906 18.0186C19.8426 18.1245 20.2564 20.0142 20.8079 21.0016", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

Legal02Icon.displayName = 'Legal02Icon';
export default Legal02Icon;
