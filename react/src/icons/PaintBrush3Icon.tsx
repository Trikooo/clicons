import React from 'react';
import config from '../config';

interface PaintBrush3IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PaintBrush3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/paint-brush3)
 * @see {@link https://clicons.dev/icon/paint-brush3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PaintBrush3Icon = React.forwardRef<SVGSVGElement, PaintBrush3IconProps>(
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
      d: 'M6 12C5.13023 12.7386 1.94713 14.5658 2.00054 15.9012C2.01513 16.2661 2.3205 16.5714 2.93122 17.1822L3.90287 18.1538M12 18C11.2614 18.8698 9.43417 22.0529 8.09878 21.9995C7.73393 21.9849 7.42856 21.6795 6.81784 21.0688L5.84618 20.0971M3.90287 18.1538L6.29464 15.762M3.90287 18.1538L5.84618 20.0971M5.84618 20.0971L7.04207 18.9012',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.9389 18.481C13.6199 18.8243 13.4604 18.996 13.2454 18.9999C13.0304 19.0039 12.8585 18.8319 12.5146 18.4881L5.51186 11.4849C5.16804 11.1411 4.99612 10.9692 5.00007 10.7542C5.00401 10.5392 5.17563 10.3797 5.51887 10.0607C5.75113 9.84487 5.93925 9.69256 6.14283 9.56702C7.90764 8.47876 10.1485 9.5093 11.9332 8.49885C13.9897 7.33452 15.7947 5.18592 17.4986 3.25974C18.2273 2.43601 18.5916 2.02414 19.1056 2.00066C20.0323 1.95831 22.0415 3.97332 21.9993 4.89475C21.9758 5.40882 21.5638 5.77316 20.7398 6.50183C18.8135 8.20531 16.6647 10.01 15.5006 12.0664C14.4902 13.8513 15.5207 16.0922 14.4325 17.8571C14.307 18.0607 14.1547 18.2488 13.9389 18.481Z',
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

PaintBrush3Icon.displayName = 'PaintBrush3Icon';
export default PaintBrush3Icon;
