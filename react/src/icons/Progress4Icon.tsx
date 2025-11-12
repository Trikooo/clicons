import React from 'react';
import config from '../config';

interface Progress4IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Progress4Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/progress4)
 * @see {@link https://clicons.dev/icon/progress4} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Progress4Icon = React.forwardRef<SVGSVGElement, Progress4IconProps>(
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
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '10',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 4.5C13.4834 4.5 14.9334 4.93987 16.1668 5.76398C17.4001 6.58809 18.3614 7.75943 18.9291 9.12987C19.4968 10.5003 19.6453 12.0083 19.3559 13.4632C19.0665 14.918 18.3522 16.2544 17.3033 17.3033C16.2544 18.3522 14.918 19.0665 13.4632 19.3559C12.0083 19.6453 10.5003 19.4968 9.12987 18.9291C7.75943 18.3614 6.58809 17.4001 5.76398 16.1668C4.93987 14.9334 4.5 13.4834 4.5 12H12V4.5Z',
      fill: 'currentColor'
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

Progress4Icon.displayName = 'Progress4Icon';
export default Progress4Icon;
