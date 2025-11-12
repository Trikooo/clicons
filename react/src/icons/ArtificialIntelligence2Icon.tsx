import React from 'react';
import config from '../config';

interface ArtificialIntelligence2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ArtificialIntelligence2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/artificial-intelligence2)
 * @see {@link https://clicons.dev/icon/artificial-intelligence2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ArtificialIntelligence2Icon = React.forwardRef<SVGSVGElement, ArtificialIntelligence2IconProps>(
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
      d: 'M15.5 22V21.5C15.5 20.3954 16.4321 19.5005 17.4223 19.011C18.3846 18.5354 19.1943 17.7511 19.2965 16.8313L19.5 15L21.5 14L19 10.25C19 5.69365 15.3063 2 10.75 2C6.19365 2 2.5 5.69365 2.5 10.25C2.5 13.0379 3.88283 15.5028 6 16.9962M6 16.9962V22M6 16.9962C6.75065 17.5257 7.59362 17.9331 8.5 18.1895',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.3077 12L9.84703 7.47891C9.7552 7.19466 9.47344 7 9.15385 7C8.83425 7 8.55249 7.19466 8.46066 7.47891L7 12M14 7V12M7.53846 10.5H10.7692',
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

ArtificialIntelligence2Icon.displayName = 'ArtificialIntelligence2Icon';
export default ArtificialIntelligence2Icon;
