import React from 'react';
import config from '../config';

interface MosqueIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MosqueIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mosque)
 * @see {@link https://clicons.dev/icon/mosque} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MosqueIcon = React.forwardRef<SVGSVGElement, MosqueIconProps>(
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
      d: 'M9.15309 9C5.68214 5.5 11.0125 3.75 12.5 2C13.9875 3.75 19.3179 5.5 15.8469 9H9.15309Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 12V11C18.5 10.0572 18.5 9.58579 18.2071 9.29289C17.9142 9 17.4428 9 16.5 9H8.5C7.55719 9 7.08579 9 6.79289 9.29289C6.5 9.58579 6.5 10.0572 6.5 11V12',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 12H7.5C6.08579 12 5.37868 12 4.93934 12.4393C4.5 12.8787 4.5 13.5858 4.5 15V19C4.5 20.4142 4.5 21.1213 4.93934 21.5607C5.37868 22 6.08579 22 7.5 22H17.5C18.9142 22 19.6213 22 20.0607 21.5607C20.5 21.1213 20.5 20.4142 20.5 19V15C20.5 13.5858 20.5 12.8787 20.0607 12.4393C19.6213 12 18.9142 12 17.5 12Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10.0001 22V19C9.98279 16 12.5 15 12.5 15C12.5 15 15.0172 16 14.9999 19V22',
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

MosqueIcon.displayName = 'MosqueIcon';
export default MosqueIcon;
