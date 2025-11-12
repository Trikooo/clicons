import React from 'react';
import config from '../config';

interface WifiError2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WifiError2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/wifi-error2)
 * @see {@link https://clicons.dev/icon/wifi-error2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WifiError2Icon = React.forwardRef<SVGSVGElement, WifiError2IconProps>(
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
      d: 'M8.25 17.0001C8.67265 16.5774 9.16229 16.2441 9.6906 16.0001M15.75 17.0001C15.3274 16.5774 14.8377 16.2441 14.3094 16.0001',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 14.0001C17.4308 13.0692 16.2435 12.4026 15 12.0001M5.5 14.0001C6.59299 13.1038 7.778 12.4525 9 12.046',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 11C3.92227 9.3768 5.94206 8.1353 8 7.50015M22 10.9999C20.0778 9.37675 18.0579 8.13529 16 7.50015',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 20H12.0118',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M13.5864 4.32714C12.6577 3.89104 11.3422 3.89102 10.4136 4.32714C10.0852 4.48134 9.95517 4.84478 10.0135 5.19157L12 17.0001L13.9865 5.19159C14.0448 4.84479 13.9148 4.48134 13.5864 4.32714Z',
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

WifiError2Icon.displayName = 'WifiError2Icon';
export default WifiError2Icon;
