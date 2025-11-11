import React from 'react';
import config from '../config';

interface WorkflowSquare04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WorkflowSquare04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/workflow-square04)
 * @see {@link https://clicons.dev/icon/workflow-square04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WorkflowSquare04Icon = React.forwardRef<SVGSVGElement, WorkflowSquare04IconProps>(
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

    const iconData = [["path", { d: "M15 18C15 16.5858 15 15.8787 15.4393 15.4393C15.8787 15 16.5858 15 18 15C19.4142 15 20.1213 15 20.5607 15.4393C21 15.8787 21 16.5858 21 18C21 19.4142 21 20.1213 20.5607 20.5607C20.1213 21 19.4142 21 18 21C16.5858 21 15.8787 21 15.4393 20.5607C15 20.1213 15 19.4142 15 18Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M3 9C3 7.58579 3 6.87868 3.43934 6.43934C3.87868 6 4.58579 6 6 6C7.41421 6 8.12132 6 8.56066 6.43934C9 6.87868 9 7.58579 9 9C9 10.4142 9 11.1213 8.56066 11.5607C8.12132 12 7.41421 12 6 12C4.58579 12 3.87868 12 3.43934 11.5607C3 11.1213 3 10.4142 3 9Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M9 9H12C14.8284 9 16.2426 9 17.1213 9.87868C18 10.7574 18 12.1716 18 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M6 12V22M6 6V2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

WorkflowSquare04Icon.displayName = 'WorkflowSquare04Icon';
export default WorkflowSquare04Icon;
