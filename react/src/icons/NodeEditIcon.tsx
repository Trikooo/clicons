import React from 'react';
import config from '../config';

interface NodeEditIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name NodeEditIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/node-edit)
 * @see {@link https://clicons.dev/icon/node-edit} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const NodeEditIcon = React.forwardRef<SVGSVGElement, NodeEditIconProps>(
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

    const iconData = [["path", { d: "M13 19.5H12C9.17157 19.5 7.75736 19.5 6.87868 18.6213C6 17.7426 6 16.3284 6 13.5V11.5M6 11.5V8M6 11.5H11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13 19.5C13 18.3215 13 17.7322 13.3515 17.3661C13.7029 17 14.2686 17 15.4 17H16.6C17.7314 17 18.2971 17 18.6485 17.3661C19 17.7322 19 18.3215 19 19.5C19 20.6785 19 21.2678 18.6485 21.6339C18.2971 22 17.7314 22 16.6 22H15.4C14.2686 22 13.7029 22 13.3515 21.6339C13 21.2678 13 20.6785 13 19.5Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M4.28571 2H7.71429C9.7888 2 10 3.10993 10 5C10 6.89007 9.7888 8 7.71429 8H4.28571C2.2112 8 2 6.89007 2 5C2 3.10993 2.2112 2 4.28571 2Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M21.0058 5.38441L21.614 5.99021C22.1286 6.50276 22.1286 7.33376 21.6141 7.84631L18.4275 11.0799C18.1768 11.3296 17.8561 11.4979 17.5077 11.5627L15.5327 11.9898C15.2209 12.0572 14.9432 11.7814 15.01 11.4706L15.4304 9.5148C15.4955 9.1677 15.6645 8.84834 15.9151 8.59867L19.1423 5.38441C19.6569 4.87186 20.4912 4.87186 21.0058 5.38441Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

NodeEditIcon.displayName = 'NodeEditIcon';
export default NodeEditIcon;
