import React from 'react';
import config from '../config';

interface CurvyLeftDirectionIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CurvyLeftDirectionIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/curvy-left-direction)
 * @see {@link https://clicons.dev/icon/curvy-left-direction} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CurvyLeftDirectionIcon = React.forwardRef<SVGSVGElement, CurvyLeftDirectionIconProps>(
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

    const iconData = [["path", { d: "M3.99709 15.0001C3.99709 15.0001 1.99805 13.5271 1.99805 13.0001C1.99805 12.473 3.99711 11.0001 3.99711 11.0001M2.2229 12.8675C3.63456 13.1574 6.28054 13.27 7.59106 10.8163C8.13439 9.95268 8.03253 8.50668 8.03253 6.86106C8.06633 6.19025 8.63778 4.96995 10.0699 5.00057C11.5021 5.03118 11.9723 6.20733 12.0284 6.79158V16.9022C12.0138 17.7539 12.5076 18.9993 14.0239 18.9993C15.5044 18.9993 16.0839 17.6872 15.9562 16.7036C15.6104 14.0396 16.4187 11.2472 19.9189 11.003H22.0029", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

CurvyLeftDirectionIcon.displayName = 'CurvyLeftDirectionIcon';
export default CurvyLeftDirectionIcon;
