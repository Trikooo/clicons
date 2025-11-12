import React from 'react';
import config from '../config';

interface Infinity2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Infinity2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/infinity2)
 * @see {@link https://clicons.dev/icon/infinity2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Infinity2Icon = React.forwardRef<SVGSVGElement, Infinity2IconProps>(
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
      d: 'M12 12C12 12 10.3569 15 8.7 15C7.04315 15 6 13.6569 6 12C6 10.3431 7.04315 9 8.7 9C10.3569 9 12 12 12 12ZM12 12C12 12 13.6431 15 15.3 15C16.9569 15 18 13.6569 18 12C18 10.3431 16.9569 9 15.3 9C13.6431 9 12 12 12 12Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.725 2.5C19.1145 2.65381 20.0498 3.00143 20.7479 3.78705C22 5.19617 22 7.46411 22 12C22 16.5359 22 18.8038 20.7479 20.213C20.0498 20.9986 19.1145 21.3462 17.725 21.5M6.27501 21.5C4.88551 21.3462 3.95021 20.9986 3.25212 20.213C2 18.8038 2 16.5359 2 12C2 7.46411 2 5.19617 3.25212 3.78705C3.95021 3.00143 4.88551 2.65381 6.27501 2.5',
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

Infinity2Icon.displayName = 'Infinity2Icon';
export default Infinity2Icon;
