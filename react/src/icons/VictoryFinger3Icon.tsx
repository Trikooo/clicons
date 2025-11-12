import React from 'react';
import config from '../config';

interface VictoryFinger3IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name VictoryFinger3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/victory-finger3)
 * @see {@link https://clicons.dev/icon/victory-finger3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const VictoryFinger3Icon = React.forwardRef<SVGSVGElement, VictoryFinger3IconProps>(
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
      d: 'M6.97809 13.5196L6.38311 10.0699M6.38311 10.0699L5.32331 3.92521C5.17123 2.942 5.70202 2.23777 6.51218 2.03937C7.33198 1.83861 8.18303 2.48368 8.29549 3.18841L9.99009 10.0699L11.6372 3.36463C11.8014 2.37214 12.7453 1.93054 13.5651 2.1313C14.3752 2.3297 14.8096 2.942 14.6576 3.92521L13.4798 10.5572M6.38311 10.0699C5.69802 10.7529 4.5957 11.9809 4.24908 12.756C4.1635 12.9473 4.09591 13.1477 4.04777 13.3516C3.8181 14.3245 4.37723 15.4279 5.95195 17.5026C6.58241 18.2417 7.69179 19.6008 7.7582 19.8228C7.76482 19.8449 8.06999 20.2163 7.99161 21.9979M13.8734 8.34106C14.5178 7.87452 16.2467 7.70574 16.9221 9.47321C16.946 9.60185 16.9842 9.70326 16.9972 9.83092M16.9972 9.83092C17.0559 10.4083 16.9972 10.9603 16.9972 11.0299M16.9972 9.83092C17.3809 9.08115 19.624 10.0007 19.915 12.7239C20.1674 14.0971 19.8096 15.9667 19.5931 16.6261C19.2713 17.6064 18.3813 19.1284 18.1814 19.3561C17.3495 20.4835 17.4354 21.4492 17.4354 21.9829',
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

VictoryFinger3Icon.displayName = 'VictoryFinger3Icon';
export default VictoryFinger3Icon;
