import React from 'react';
import config from '../config';

interface TextSuperscriptIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TextSuperscriptIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/text-superscript)
 * @see {@link https://clicons.dev/icon/text-superscript} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TextSuperscriptIcon = React.forwardRef<SVGSVGElement, TextSuperscriptIconProps>(
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

    const iconData = [["path", { d: "M12 21H6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3H9.75ZM8.25 21C8.25 21.4142 8.58579 21.75 9 21.75C9.41421 21.75 9.75 21.4142 9.75 21H8.25ZM8.25 3V21H9.75V3H8.25Z", fill: "currentColor", key: "1" }],
  ["path", { d: "M16 6C16 5.37191 16 5.05787 15.9194 4.78267C15.7518 4.21026 15.3066 3.71716 14.7541 3.49226C14.4886 3.38413 14.1885 3.35347 13.5884 3.29216C12.1695 3.14718 10.3874 3 9 3C7.61262 3 5.83047 3.14718 4.41161 3.29216C3.8115 3.35347 3.51144 3.38413 3.24586 3.49226C2.69344 3.71716 2.24816 4.21026 2.08057 4.78267C2 5.05787 2 5.37191 2 6", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M22 12H20C19.5286 12 19.2929 12 19.1464 11.8566C19 11.7133 19 11.4825 19 11.021V10.0766C19 9.28117 19.176 9.12533 20.0004 9.10939C20.7769 9.09438 21.2401 9.03883 21.5607 8.83328C22 8.55161 22 8.09827 22 7.19159C22 5.45943 19 6.12617 19 6.12617", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

TextSuperscriptIcon.displayName = 'TextSuperscriptIcon';
export default TextSuperscriptIcon;
