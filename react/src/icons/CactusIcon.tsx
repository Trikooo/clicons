import React from 'react';
import config from '../config';

interface CactusIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CactusIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cactus)
 * @see {@link https://clicons.dev/icon/cactus} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CactusIcon = React.forwardRef<SVGSVGElement, CactusIconProps>(
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

    const iconData = [["path", { d: "M13.1509 15H10.8491C8.79675 15 7.77055 15 7.2641 15.5967C6.75765 16.1934 7.03957 17.0703 7.6034 18.8242L7.69704 19.1154C8.14071 20.4955 8.36255 21.1855 8.95349 21.5878L8.97997 21.6055C9.57752 22 10.385 22 12 22C13.615 22 14.4225 22 15.02 21.6055L15.0465 21.5878C15.6375 21.1855 15.8593 20.4955 16.303 19.1154L16.3966 18.8242C16.9604 17.0703 17.2423 16.1934 16.7359 15.5967C16.2294 15 15.2033 15 13.1509 15Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M9.90373 15L8.55745 7.93548C8.16693 5.8863 9.81696 4 12 4C14.183 4 15.8331 5.88629 15.4426 7.93548L14.0963 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 15L12 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M15.5 6L17 5M8.5 6L7 5M12 4V2M15.5 10L17 11M8.5 10L7 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

CactusIcon.displayName = 'CactusIcon';
export default CactusIcon;
