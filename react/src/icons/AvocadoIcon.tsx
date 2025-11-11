import React from 'react';
import config from '../config';

interface AvocadoIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AvocadoIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/avocado)
 * @see {@link https://clicons.dev/icon/avocado} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AvocadoIcon = React.forwardRef<SVGSVGElement, AvocadoIconProps>(
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

    const iconData = [["path", { d: "M12 5C12 4 12.4 2 14 2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 18.0412V13.9588C12 13.167 12.2189 12.8334 13.1525 13.0797C16.2825 13.9053 16.2825 18.0947 13.1525 18.9203C12.2189 19.1666 12 18.833 12 18.0412Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M11.9999 5C9.60664 5 7.66654 6.79086 7.66654 9C7.66654 10.2239 7.38884 11.5983 6.63817 12.6071C5.9201 13.5722 5.49988 14.7408 5.49988 16C5.49988 19.3137 8.41003 22 11.9999 22C15.5897 22 18.4999 19.3137 18.4999 16C18.4999 14.7408 18.0797 13.5722 17.3616 12.6071C16.6109 11.5983 16.3332 10.2239 16.3332 9C16.3332 6.79086 14.3931 5 11.9999 5Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }]];

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

AvocadoIcon.displayName = 'AvocadoIcon';
export default AvocadoIcon;
