import React from 'react';
import config from '../config';

interface GameControllerIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name GameControllerIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/game-controller)
 * @see {@link https://clicons.dev/icon/game-controller} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const GameControllerIcon = React.forwardRef<SVGSVGElement, GameControllerIconProps>(
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
      d: 'M11 13H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 9V3',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M20.1526 20.9174C22.0143 20.3289 22.5597 16.7547 21.3708 12.9344C20.1819 9.11398 17.709 6.49405 15.8474 7.08259C14.6972 7.44619 14.6438 8.86174 13.6968 9.378C13.473 9.5 13.1595 9.5 12.5324 9.5H11.4676C10.8405 9.5 10.527 9.5 10.3032 9.378C9.35625 8.86174 9.30278 7.44619 8.15264 7.08259C6.29102 6.49405 3.8181 9.11398 2.62922 12.9344C1.44035 16.7547 1.98573 20.3289 3.84736 20.9174C5.20631 21.347 6.891 20.067 8.16417 17.8583C9.01333 16.3851 9.39787 16 11.1039 16H12.8961C14.6021 16 14.9867 16.3851 15.8358 17.8583C17.109 20.067 18.7937 21.347 20.1526 20.9174Z',
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

GameControllerIcon.displayName = 'GameControllerIcon';
export default GameControllerIcon;
