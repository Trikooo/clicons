import React from 'react';
import config from '../config';

interface Navigation2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Navigation2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/navigation2)
 * @see {@link https://clicons.dev/icon/navigation2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Navigation2Icon = React.forwardRef<SVGSVGElement, Navigation2IconProps>(
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
      d: 'M2.00017 11.9496C1.96943 12.9853 6.03156 15.4206 6.41417 14.9373C7.15382 13.8962 7.21955 10.1078 6.45955 9.06478C6.10401 8.58035 2.03018 10.9389 2.00017 11.9496Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.9496 21.9997C12.9853 22.0304 15.4206 17.9683 14.9373 17.5857C13.8962 16.8461 10.1078 16.7803 9.06478 17.5403C8.58035 17.8959 10.9389 21.9697 11.9496 21.9997Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.9998 11.9496C22.0306 12.9853 17.9684 15.4207 17.5858 14.9373C16.8462 13.8962 16.7805 10.1079 17.5404 9.06484C17.896 8.58041 21.9698 10.9389 21.9998 11.9496Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.9496 2.00005C12.9853 1.96931 15.4206 6.03144 14.9373 6.41404C13.8962 7.1537 10.1078 7.21943 9.06478 6.45943C8.58035 6.10389 10.9389 2.03006 11.9496 2.00005Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '2',
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

Navigation2Icon.displayName = 'Navigation2Icon';
export default Navigation2Icon;
