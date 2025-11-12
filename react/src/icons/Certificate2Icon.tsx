import React from 'react';
import config from '../config';

interface Certificate2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Certificate2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/certificate2)
 * @see {@link https://clicons.dev/icon/certificate2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Certificate2Icon = React.forwardRef<SVGSVGElement, Certificate2IconProps>(
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
      d: 'M9 5.02649C7.42349 4.60306 4.65212 3.46017 3.16165 4.30124C1.61279 5.17525 1.61278 10.8248 3.16165 11.6988C4.65212 12.5398 7.42349 11.3969 9 10.9735',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 5.02649C16.5765 4.60306 19.3479 3.46017 20.8384 4.30124C22.3872 5.17525 22.3872 10.8248 20.8384 11.6988C19.3479 12.5398 16.5765 11.3969 15 10.9735',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '8',
      r: '4',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.77244 11L8.34515 17.3753C8.01375 18.8555 7.84805 19.5957 8.18452 19.8368C9.33435 20.6607 10.7588 18.0976 12 18.0976C13.13 18.0976 14.817 20.5523 15.8155 19.8368C16.1519 19.5957 15.9862 18.8555 15.6548 17.3753L14.2276 11',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
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

Certificate2Icon.displayName = 'Certificate2Icon';
export default Certificate2Icon;
