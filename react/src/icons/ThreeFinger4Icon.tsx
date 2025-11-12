import React from 'react';
import config from '../config';

interface ThreeFinger4IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ThreeFinger4Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/three-finger4)
 * @see {@link https://clicons.dev/icon/three-finger4} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ThreeFinger4Icon = React.forwardRef<SVGSVGElement, ThreeFinger4IconProps>(
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

    const iconData = [
  [
    'path',
    {
      d: 'M7.76591 13.9903V5.98282C7.76412 5.15277 8.39407 4.48216 9.22412 4.48216C10.0529 4.48216 10.749 5.15727 10.749 5.98606M10.749 5.98606V10.4816M10.749 5.98606V3.99859C10.749 3.16979 11.4208 2.49792 12.2496 2.49792C13.0797 2.49792 13.7521 3.17177 13.7503 4.00183V10.475M16.7516 11.478V5.98606C16.7534 5.156 16.081 4.48216 15.251 4.48216C14.4222 4.48216 13.7503 5.15403 13.7503 5.98282M16.7516 9.62564C17.5582 9.50466 19.5438 9.62564 19.7467 11.4827V15.1446C19.7467 16.5054 19.8503 18.1424 18.6843 19.5346C17.9847 20.5756 16.4906 21.1453 16.4906 21.1453C14.9507 21.6538 13.5566 21.4484 12.6442 21.4816C11.6085 21.5194 10.9 21.5229 10.032 21.3303C10.032 21.3303 8.05237 20.9925 6.79365 18.8653C5.82699 17.2316 3.31365 14.9309 4.61865 12.8526C5.46058 11.5118 7.1236 10.0449 7.76591 9.48386',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ]
];

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

ThreeFinger4Icon.displayName = 'ThreeFinger4Icon';
export default ThreeFinger4Icon;
