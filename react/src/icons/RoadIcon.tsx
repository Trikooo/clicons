import React from 'react';
import config from '../config';

interface RoadIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name RoadIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/road)
 * @see {@link https://clicons.dev/icon/road} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const RoadIcon = React.forwardRef<SVGSVGElement, RoadIconProps>(
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
      d: 'M5.17157 3.17148C4 4.34305 4 6.22867 4 9.99991L4 13.9999C4 17.7711 4 19.6568 5.17157 20.8283M5.17157 3.17148C6.34315 1.99991 8.22876 1.99991 12 1.99991C15.7712 1.99991 17.6569 1.99991 18.8284 3.17148M5.17157 3.17148C5.17157 3.17148 5.17157 3.17148 5.17157 3.17148ZM5.17157 20.8283C6.34315 21.9999 8.22876 21.9999 12 21.9999C15.7712 21.9999 17.6569 21.9999 18.8284 20.8283M5.17157 20.8283C5.17157 20.8283 5.17157 20.8283 5.17157 20.8283ZM18.8284 20.8283C20 19.6568 20 17.7711 20 13.9999L20 9.99991C20 6.22867 20 4.34305 18.8284 3.17148M18.8284 20.8283C18.8284 20.8283 18.8284 20.8283 18.8284 20.8283ZM18.8284 3.17148C18.8284 3.17148 18.8284 3.17148 18.8284 3.17148Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 10.9999L12 12.9999',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 5.49991L12 7.49991',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 16.4999L12 18.4999',
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

RoadIcon.displayName = 'RoadIcon';
export default RoadIcon;
