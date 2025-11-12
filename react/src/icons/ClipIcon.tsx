import React from 'react';
import config from '../config';

interface ClipIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ClipIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/clip)
 * @see {@link https://clicons.dev/icon/clip} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ClipIcon = React.forwardRef<SVGSVGElement, ClipIconProps>(
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
      d: 'M4 22H7.14444C7.51533 22 7.66655 21.6672 7.73659 21.3171C7.89059 20.5471 8.49844 20 9.2 20C9.90156 20 10.5094 20.5471 10.6634 21.3171C10.7334 21.6672 10.8847 22 11.2556 22H12.7444C13.1153 22 13.2666 21.6672 13.3366 21.3171C13.4906 20.5471 14.0984 20 14.8 20C15.5016 20 16.1094 20.5471 16.2634 21.3171C16.3334 21.6672 16.4847 22 16.8556 22H20',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.77232 19.9999C8.77232 19.9999 9.62267 11.8192 9.93709 9.47901C10.208 7.46272 6.43388 4.71914 8.76226 3.09366C10.8515 1.63514 13.1483 1.63539 15.2376 3.0938C17.5661 4.71921 13.7927 7.46274 14.0636 9.47901C14.378 11.8192 15.2283 19.9999 15.2283 19.9999',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M5 22L3.67748 17.1633C3.01417 14.3231 2.68252 12.903 3.41535 11.9515C4.14818 11 5.57361 11 8.42448 11H15.5755C18.4264 11 19.8518 11 20.5847 11.9515C21.3175 12.903 20.9858 14.3231 20.3225 17.1633L19 22',
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

ClipIcon.displayName = 'ClipIcon';
export default ClipIcon;
