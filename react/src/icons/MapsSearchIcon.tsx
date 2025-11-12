import React from 'react';
import config from '../config';

interface MapsSearchIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MapsSearchIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/maps-search)
 * @see {@link https://clicons.dev/icon/maps-search} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MapsSearchIcon = React.forwardRef<SVGSVGElement, MapsSearchIconProps>(
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
      d: 'M22 12.0889V9.23578C22 7.29177 22 6.31978 21.4142 5.71584C20.8284 5.11192 19.8856 5.11192 18 5.11192H15.9214C15.004 5.11192 14.9964 5.11013 14.1715 4.69638L10.8399 3.0254C9.44884 2.32773 8.75332 1.97889 8.01238 2.00314C7.27143 2.02738 6.59877 2.42098 5.25345 3.20819L4.02558 3.92667C3.03739 4.5049 2.54329 4.79402 2.27164 5.27499C2 5.75596 2 6.34169 2 7.51313V15.7487C2 17.2879 2 18.0575 2.34226 18.4859C2.57001 18.7708 2.88916 18.9625 3.242 19.026C3.77226 19.1214 4.42148 18.7416 5.71987 17.9817C6.60156 17.4659 7.45011 16.9301 8.50487 17.0754C9.38869 17.1971 10.21 17.756 11 18.1522',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8 2.00195V17.0359',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 5.00879V11.0224',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M20.1069 20.1754L21.9521 21.9984M21.1691 17.6381C21.1691 19.6048 19.5752 21.1991 17.609 21.1991C15.6428 21.1991 14.0488 19.6048 14.0488 17.6381C14.0488 15.6714 15.6428 14.0771 17.609 14.0771C19.5752 14.0771 21.1691 15.6714 21.1691 17.6381Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
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

MapsSearchIcon.displayName = 'MapsSearchIcon';
export default MapsSearchIcon;
