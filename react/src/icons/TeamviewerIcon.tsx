import React from 'react';
import config from '../config';

interface TeamviewerIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TeamviewerIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/teamviewer)
 * @see {@link https://clicons.dev/icon/teamviewer} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TeamviewerIcon = React.forwardRef<SVGSVGElement, TeamviewerIconProps>(
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

    const iconData = [["path", { d: "M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18.9973 12.0838C18.9627 12.6123 18.4918 13.0126 17.55 13.8133C16.0773 15.0654 15.3409 15.6914 14.7351 15.4483C14.6734 15.4236 14.6138 15.3931 14.5571 15.3574C14.1246 15.085 14.0279 14.42 14.0062 13.1982H9.99377C9.97214 14.42 9.87543 15.085 9.44294 15.3574C9.38619 15.3931 9.32661 15.4236 9.26489 15.4483C8.65908 15.6914 7.92271 15.0654 6.44997 13.8133C5.50821 13.0126 5.03733 12.6123 5.00274 12.0838C4.99909 12.028 4.99909 11.972 5.00274 11.9162C5.03733 11.3877 5.50821 10.9874 6.44997 10.1867C7.92271 8.93464 8.65908 8.3086 9.26489 8.55167C9.32661 8.57644 9.38619 8.60687 9.44294 8.64262C9.86305 8.90724 9.96633 9.54228 9.99172 10.6982H14.0083C14.0337 9.54228 14.1369 8.90724 14.5571 8.64262C14.6138 8.60687 14.6734 8.57644 14.7351 8.55167C15.3409 8.3086 16.0773 8.93464 17.55 10.1867C18.4918 10.9874 18.9627 11.3877 18.9973 11.9162C19.0009 11.972 19.0009 12.028 18.9973 12.0838Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

TeamviewerIcon.displayName = 'TeamviewerIcon';
export default TeamviewerIcon;
