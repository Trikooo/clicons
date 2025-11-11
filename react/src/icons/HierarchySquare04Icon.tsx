import React from 'react';
import config from '../config';

interface HierarchySquare04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HierarchySquare04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hierarchy-square04)
 * @see {@link https://clicons.dev/icon/hierarchy-square04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HierarchySquare04Icon = React.forwardRef<SVGSVGElement, HierarchySquare04IconProps>(
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

    const iconData = [["path", { d: "M9 12C9 10.5858 9 9.87868 8.48744 9.43934C7.97487 9 7.14992 9 5.5 9C3.85008 9 3.02513 9 2.51256 9.43934C2 9.87868 2 10.5858 2 12C2 13.4142 2 14.1213 2.51256 14.5607C3.02513 15 3.85008 15 5.5 15C7.14992 15 7.97487 15 8.48744 14.5607C9 14.1213 9 13.4142 9 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M22 5C22 3.58579 22 2.87868 21.5899 2.43934C21.1799 2 20.5199 2 19.2 2H17.8C16.4801 2 15.8201 2 15.4101 2.43934C15 2.87868 15 3.58579 15 5C15 6.41421 15 7.12132 15.4101 7.56066C15.8201 8 16.4801 8 17.8 8H19.2C20.5199 8 21.1799 8 21.5899 7.56066C22 7.12132 22 6.41421 22 5Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M22 19C22 17.5858 22 16.8787 21.5899 16.4393C21.1799 16 20.5199 16 19.2 16H17.8C16.4801 16 15.8201 16 15.4101 16.4393C15 16.8787 15 17.5858 15 19C15 20.4142 15 21.1213 15.4101 21.5607C15.8201 22 16.4801 22 17.8 22H19.2C20.5199 22 21.1799 22 21.5899 21.5607C22 21.1213 22 20.4142 22 19Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12 11.999L12 16.0462C12 17.9201 12.9172 18.7615 15 19M12 11.999L12 7.95192C12 6.18453 12.779 5.25846 15 5M12 11.999L9 11.999", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

HierarchySquare04Icon.displayName = 'HierarchySquare04Icon';
export default HierarchySquare04Icon;
