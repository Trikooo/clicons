import React from 'react';
import config from '../config';

interface ArrowLeft05IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ArrowLeft05Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/arrow-left05)
 * @see {@link https://clicons.dev/icon/arrow-left05} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ArrowLeft05Icon = React.forwardRef<SVGSVGElement, ArrowLeft05IconProps>(
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

    const iconData = [["path", { d: "M4.00002 5.99951L4.00005 18.0002", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.4968 12.0109V12.3814C12.5374 15.3525 12.4024 16.3847 11.1519 15.9055L10.8438 15.7236L10.5952 15.5508L10.06 15.1378L9.0596 14.2685L8.03672 13.4047L7.53672 12.9516L7.31406 12.7251L7.05189 12.346L6.99807 12.0097L7.05189 11.6757L7.31406 11.2967L7.53672 11.0701L8.03672 10.617L9.0596 9.75323L10.06 8.8839L10.5952 8.47091L10.8438 8.29813L11.1519 8.11621C12.4024 7.63699 12.5374 8.66922 12.4968 11.6403V12.0109ZM12.4968 12.0109H19.9998", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

ArrowLeft05Icon.displayName = 'ArrowLeft05Icon';
export default ArrowLeft05Icon;
