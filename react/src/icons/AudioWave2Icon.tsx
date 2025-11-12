import React from 'react';
import config from '../config';

interface AudioWave2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AudioWave2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/audio-wave2)
 * @see {@link https://clicons.dev/icon/audio-wave2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AudioWave2Icon = React.forwardRef<SVGSVGElement, AudioWave2IconProps>(
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
      d: 'M3 14V9.5C3 8.67157 3.67157 8 4.5 8C5.32843 8 6 8.67157 6 9.5V16.5C6 17.3284 6.67157 18 7.5 18C8.32843 18 9 17.3284 9 16.5V4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5V19.5C12 20.3284 12.6716 21 13.5 21C14.3284 21 15 20.3284 15 19.5V8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5V15.5C18 16.3284 18.6716 17 19.5 17C20.3284 17 21 16.3284 21 15.5V12',
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

AudioWave2Icon.displayName = 'AudioWave2Icon';
export default AudioWave2Icon;
