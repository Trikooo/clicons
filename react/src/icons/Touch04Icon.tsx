import React from 'react';
import config from '../config';

interface Touch04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Touch04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/touch04)
 * @see {@link https://clicons.dev/icon/touch04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Touch04Icon = React.forwardRef<SVGSVGElement, Touch04IconProps>(
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
      d: 'M7.41601 14V10.5M7.41601 10.5V4.25C7.41601 3.2835 8.19951 2.5 9.16601 2.5C10.1325 2.5 10.916 3.2835 10.916 4.25V9.5L13.993 9.97757C15.9216 10.2669 16.886 10.4115 17.5652 10.8184C18.6872 11.4906 19.5 12.5 19.5 13.9736C19.5 15 19.2463 15.6886 18.6296 17.5387C18.2383 18.7127 18.0426 19.2996 17.7236 19.7643C17.1983 20.5293 16.4233 21.0878 15.5315 21.3442C14.9898 21.5 14.3711 21.5 13.1336 21.5H11.7287C9.94422 21.5 9.05198 21.5 8.28584 21.1651C7.9397 21.0137 7.61674 20.8141 7.32659 20.5722C6.68438 20.0367 6.28536 19.2387 5.48731 17.6426C4.84015 16.3483 4.51657 15.7011 4.50083 15.0302C4.49373 14.7276 4.53246 14.4256 4.61571 14.1346C4.80031 13.4894 5.27678 12.9448 6.2297 11.8558L7.41601 10.5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
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

Touch04Icon.displayName = 'Touch04Icon';
export default Touch04Icon;
