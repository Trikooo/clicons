import React from 'react';
import config from '../config';

interface MouseLeftClick2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MouseLeftClick2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mouse-left-click2)
 * @see {@link https://clicons.dev/icon/mouse-left-click2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MouseLeftClick2Icon = React.forwardRef<SVGSVGElement, MouseLeftClick2IconProps>(
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
      d: 'M10 2.09084C10.6655 2.02383 11.3389 2 12 2C12.9247 2 13.8373 2.07762 14.7349 2.1882C17.1758 2.48893 19.0694 4.51965 19.2593 6.91118C19.3909 8.56832 19.5 10.268 19.5 12C19.5 13.732 19.3909 15.4317 19.2593 17.0888C19.0694 19.4803 17.1758 21.511 14.7349 21.8118C13.8373 21.9223 12.9247 22 12 22C11.0752 22 10.1626 21.9223 9.26502 21.8118C6.82417 21.511 4.93047 19.4803 4.74061 17.0888C4.60903 15.4317 4.5 13.732 4.5 12C4.5 11.3283 4.5164 10.6614 4.54415 10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 2L12 11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M5 11H19',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '5.5',
      cy: '5',
      r: '2.5',
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

MouseLeftClick2Icon.displayName = 'MouseLeftClick2Icon';
export default MouseLeftClick2Icon;
