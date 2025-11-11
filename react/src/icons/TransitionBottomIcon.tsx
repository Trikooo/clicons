import React from 'react';
import config from '../config';

interface TransitionBottomIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TransitionBottomIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/transition-bottom)
 * @see {@link https://clicons.dev/icon/transition-bottom} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TransitionBottomIcon = React.forwardRef<SVGSVGElement, TransitionBottomIconProps>(
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

    const iconData = [["path", { d: "M18 1.99994C19.4001 1.99994 20.1002 1.99994 20.635 2.27242C21.1054 2.51211 21.4878 2.89456 21.7275 3.36496C22 3.89974 22 4.59981 22 5.99994C22 7.40007 22 8.10014 21.7275 8.63492C21.4878 9.10532 21.1054 9.48777 20.635 9.72746C20.1002 9.99994 19.4001 9.99994 18 9.99994L6 9.99994C4.59987 9.99994 3.8998 9.99994 3.36502 9.72746C2.89462 9.48777 2.51217 9.10532 2.27248 8.63492C2 8.10014 2 7.40007 2 5.99994C2 4.59981 2 3.89974 2.27248 3.36496C2.51217 2.89456 2.89462 2.51211 3.36502 2.27242C3.8998 1.99994 4.59987 1.99994 6 1.99994L18 1.99994Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 17.9999L12 9.99994M12 17.9999C11.2998 17.9999 9.99153 16.0056 9.5 15.4999M12 17.9999C12.7002 17.9999 14.0085 16.0056 14.5 15.4999", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M2 15.9999C2 18.3388 2 19.5083 2.53646 20.3621C2.81621 20.8073 3.19267 21.1837 3.63789 21.4635C4.49167 21.9999 5.66111 21.9999 8 21.9999L16 21.9999C18.3389 21.9999 19.5083 21.9999 20.3621 21.4635C20.8073 21.1837 21.1838 20.8073 21.4635 20.3621C22 19.5083 22 18.3388 22 15.9999", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }]];

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

TransitionBottomIcon.displayName = 'TransitionBottomIcon';
export default TransitionBottomIcon;
