import React from 'react';
import config from '../config';

interface MaskTheaterIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MaskTheaterIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mask-theater)
 * @see {@link https://clicons.dev/icon/mask-theater} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MaskTheaterIcon = React.forwardRef<SVGSVGElement, MaskTheaterIconProps>(
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
      d: 'M12 5C15.0776 5 17.8526 4.27588 19.8097 3.11579C19.9349 3.04155 20.0772 3 20.2228 3C20.652 3 21 3.34797 21 3.77722V10C21 17 16.5 22 12 22C7.5 22 3 17 3 10V3.77722C3 3.34797 3.34797 3 3.77722 3C3.92281 3 4.06506 3.04155 4.1903 3.11579C6.14736 4.27588 8.92241 5 12 5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 10C6.86849 9.69313 7.40399 9.5 8 9.5C8.59601 9.5 9.13151 9.69313 9.5 10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 15.7C13.192 15.7 14.263 15.4296 15 15C15 15 14.5 18 12 18C9.5 18 9 15 9 15C9.73698 15.4296 10.808 15.7 12 15.7Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 10C14.8685 9.69313 15.404 9.5 16 9.5C16.596 9.5 17.1315 9.69313 17.5 10',
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

MaskTheaterIcon.displayName = 'MaskTheaterIcon';
export default MaskTheaterIcon;
