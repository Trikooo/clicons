import React from 'react';
import config from '../config';

interface EightSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name EightSquareIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/eight-square)
 * @see {@link https://clicons.dev/icon/eight-square} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const EightSquareIcon = React.forwardRef<SVGSVGElement, EightSquareIconProps>(
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

    const iconData = [["path", { d: "M2.99707 12C2.99707 7.52166 2.99707 5.28249 4.38831 3.89124C5.77956 2.5 8.01873 2.5 12.4971 2.5C16.9754 2.5 19.2146 2.5 20.6058 3.89124C21.9971 5.28249 21.9971 7.52166 21.9971 12C21.9971 16.4783 21.9971 18.7175 20.6058 20.1088C19.2146 21.5 16.9754 21.5 12.4971 21.5C8.01873 21.5 5.77956 21.5 4.38831 20.1088C2.99707 18.7175 2.99707 16.4783 2.99707 12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.9971 12H11.9971M12.9971 12C14.3778 12 15.4971 10.8807 15.4971 9.5C15.4971 8.11929 14.3778 7 12.9971 7H11.9971C10.6164 7 9.49707 8.11929 9.49707 9.5C9.49707 10.8807 10.6164 12 11.9971 12M12.9971 12C14.3778 12 15.4971 13.1193 15.4971 14.5C15.4971 15.8807 14.3778 17 12.9971 17H11.9971C10.6164 17 9.49707 15.8807 9.49707 14.5C9.49707 13.1193 10.6164 12 11.9971 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

EightSquareIcon.displayName = 'EightSquareIcon';
export default EightSquareIcon;
