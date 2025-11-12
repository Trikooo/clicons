import React from 'react';
import config from '../config';

interface Cabinet3IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Cabinet3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cabinet3)
 * @see {@link https://clicons.dev/icon/cabinet3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Cabinet3Icon = React.forwardRef<SVGSVGElement, Cabinet3IconProps>(
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
      d: 'M5.5 18V21M18.5 18V21',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21 2.99994H3V12.9999C3 15.357 3 16.5355 3.82376 17.2677C4.64752 17.9999 5.97335 17.9999 8.625 17.9999H15.375C18.0267 17.9999 19.3525 17.9999 20.1762 17.2677C21 16.5355 21 15.357 21 12.9999V2.99994Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 3H22',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 10.5L21 10.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 13.5L10.1554 13.5777C10.5758 13.7879 10.786 13.893 11.0126 13.9465C11.2393 14 11.4743 14 11.9443 14H12.0557C12.5257 14 12.7607 14 12.9874 13.9465C13.214 13.893 13.4242 13.7879 13.8446 13.5777L14 13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 6.5L10.1554 6.57771C10.5758 6.7879 10.786 6.893 11.0126 6.9465C11.2393 7 11.4743 7 11.9443 7H12.0557C12.5257 7 12.7607 7 12.9874 6.9465C13.214 6.893 13.4242 6.7879 13.8446 6.57771L14 6.5',
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

Cabinet3Icon.displayName = 'Cabinet3Icon';
export default Cabinet3Icon;
