import React from 'react';
import config from '../config';

interface Kurta01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Kurta01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/kurta01)
 * @see {@link https://clicons.dev/icon/kurta01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Kurta01Icon = React.forwardRef<SVGSVGElement, Kurta01IconProps>(
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
      d: 'M18.0488 15C18.0889 16.2407 18.0857 17.7741 18.07 19.0892C18.0538 20.4524 18.0456 21.1339 17.6064 21.567C17.1672 22 16.476 22 15.0937 22H9.90634C8.52398 22 7.83279 22 7.39359 21.567C6.95438 21.1339 6.94625 20.4524 6.92997 19.0892C6.91428 17.7741 6.91113 16.2407 6.95124 15M18.0488 15C17.945 11.7897 17.6556 8.36182 17.01 6M18.0488 15H19.9165C20.6808 15 21.063 15 21.3004 14.7487C21.5377 14.4973 21.516 14.1317 21.4725 13.4005C21.233 9.37316 20.1338 6.15858 19.2273 4.28185C18.9606 3.72971 18.8273 3.45365 18.4998 3.17821C18.1723 2.90277 17.815 2.80091 17.1003 2.59718L15.0056 2C14.5044 3 13.5022 3.5 12.5 3.5C11.4978 3.5 10.4956 3 9.99444 2L7.89966 2.59718C7.18503 2.80091 6.82771 2.90277 6.50022 3.17821C6.17273 3.45365 6.03939 3.72971 5.7727 4.28185C4.86625 6.15858 3.76703 9.37316 3.5275 13.4005C3.48401 14.1317 3.46227 14.4973 3.69965 14.7487C3.93703 15 4.3192 15 5.08354 15H6.95124M6.95124 15C7.05501 11.7897 7.34442 8.36182 7.98999 6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 12H21M4 12H7',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 4L12.5 9',
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

Kurta01Icon.displayName = 'Kurta01Icon';
export default Kurta01Icon;
