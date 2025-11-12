import React from 'react';
import config from '../config';

interface Dress6IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Dress6Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/dress6)
 * @see {@link https://clicons.dev/icon/dress6} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Dress6Icon = React.forwardRef<SVGSVGElement, Dress6IconProps>(
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
      d: 'M5.17736 9.03229C8.90312 12.6692 3.12493 17.3689 5.6574 20.5631C7.05911 22.3311 16.7295 22.6216 18.3615 20.5631C20.8927 17.3706 15.1293 12.6763 18.8416 9.03229',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.35531 12.9999C4.08976 12.7909 2.24317 11.3281 2.01008 9.23847C1.97692 8.94124 2.02708 8.64267 2.13808 8.36425C2.85289 6.57126 4.85232 3.53048 7.91642 2.04745C8.12532 1.94634 8.37469 2.01195 8.51635 2.19356C9.27591 3.16733 10.5845 4.68453 12 4.68453C13.4155 4.68453 14.7241 3.16733 15.4836 2.19356C15.6253 2.01195 15.8747 1.94634 16.0836 2.04745C19.1477 3.53048 21.1471 6.57126 21.8619 8.36425C21.9729 8.64267 22.0231 8.94124 21.9899 9.23847C21.7568 11.3281 19.9297 12.7881 17.6641 12.9971',
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

Dress6Icon.displayName = 'Dress6Icon';
export default Dress6Icon;
