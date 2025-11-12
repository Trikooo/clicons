import React from 'react';
import config from '../config';

interface PanIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PanIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pan)
 * @see {@link https://clicons.dev/icon/pan} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PanIcon = React.forwardRef<SVGSVGElement, PanIconProps>(
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
      d: 'M19.8033 14.8033C16.8744 17.7322 12.1256 17.7322 9.1967 14.8033C6.26777 11.8744 6.26777 7.12563 9.1967 4.1967C12.1256 1.26777 16.8744 1.26777 19.8033 4.1967C22.7322 7.12563 22.7322 11.8744 19.8033 14.8033Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.3284 12.3284C15.7663 13.8905 13.2337 13.8905 11.6716 12.3284C10.1095 10.7663 10.1095 8.23367 11.6716 6.67157C13.2337 5.10948 15.7663 5.10948 17.3284 6.67157C18.8905 8.23367 18.8905 10.7663 17.3284 12.3284Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11 15.9707C8.26829 16.7441 7.48472 19.486 5.58597 21.3847C4.76563 22.2051 3.43559 22.2051 2.61525 21.3847C1.79492 20.5644 1.79492 19.2344 2.61525 18.414C4.514 16.5153 7.25588 15.7317 8.02929 13',
      stroke: 'currentColor',
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

PanIcon.displayName = 'PanIcon';
export default PanIcon;
