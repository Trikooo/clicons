import React from 'react';
import config from '../config';

interface StoreAdd01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name StoreAdd01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/store-add01)
 * @see {@link https://clicons.dev/icon/store-add01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const StoreAdd01Icon = React.forwardRef<SVGSVGElement, StoreAdd01IconProps>(
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

    const iconData = [["path", { d: "M3.50003 9.99988V14.9999C3.50003 17.8283 3.50003 19.2425 4.37871 20.1212C5.25739 20.9999 6.6716 20.9999 9.50003 20.9999H13M20.5 12.9999V9.99988", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17 7.50171C17 8.88243 15.8807 9.99985 14.5 9.99985C13.1193 9.99985 12 8.88056 12 7.49985C12 8.88056 10.8807 9.99985 9.50003 9.99985C8.11932 9.99985 7.00003 8.88056 7.00003 7.49985C7.00003 8.88056 5.82657 9.99985 4.37903 9.99985C3.59986 9.99985 2.9001 9.67555 2.42002 9.16075C1.59464 8.27567 2.12562 6.97391 2.81449 5.9883L3.20203 5.45839C4.08387 4.25258 4.52479 3.64968 5.16494 3.32482C5.8051 2.99996 6.55203 3.00005 8.04589 3.00025L15.9551 3.00131C17.4485 3.00151 18.1952 3.00161 18.8351 3.32646C19.4751 3.65131 19.9158 4.25402 20.7974 5.45945L21.1855 5.99017C21.8744 6.97577 22.4054 8.27754 21.58 9.16261C21.0999 9.67742 20.4002 10.0017 19.621 10.0017C18.1735 10.0017 17 8.88243 17 7.50171Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M14.5 17.9999H20.5M17.5 20.9999V14.9999", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

StoreAdd01Icon.displayName = 'StoreAdd01Icon';
export default StoreAdd01Icon;
