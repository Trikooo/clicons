import React from 'react';
import config from '../config';

interface Underpants2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Underpants2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/underpants2)
 * @see {@link https://clicons.dev/icon/underpants2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Underpants2Icon = React.forwardRef<SVGSVGElement, Underpants2IconProps>(
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
      d: 'M21.9359 12.8119L20.9746 8.18614C20.6575 6.66014 20.4989 5.89714 19.9475 5.44857C19.3962 5 18.6169 5 17.0583 5H6.94174C5.38314 5 4.60384 5 4.05247 5.44857C3.50109 5.89714 3.34253 6.66014 3.02541 8.18614L2.06412 12.8119C1.86911 13.7503 2.08272 14.7586 3.20996 14.9718C3.87746 15.0981 4.5865 14.9574 5.26274 15.0369C6.77164 15.2142 8.12412 16.0187 8.96376 17.2382C9.69923 18.5906 10.405 19 12 19C13.595 19 14.3008 18.5906 15.0362 17.2382C15.8759 16.0187 17.2284 15.2142 18.7373 15.0369C19.4135 14.9574 20.1225 15.0981 20.79 14.9718C21.9173 14.7586 22.1309 13.7503 21.9359 12.8119Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 16L13.8914 8M8 16L10.1086 8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 8H20.5',
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

Underpants2Icon.displayName = 'Underpants2Icon';
export default Underpants2Icon;
