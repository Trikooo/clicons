import React from 'react';
import config from '../config';

interface BrochureIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BrochureIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/brochure)
 * @see {@link https://clicons.dev/icon/brochure} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BrochureIcon = React.forwardRef<SVGSVGElement, BrochureIconProps>(
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
      d: 'M18.5 17V7C18.5 5.11438 18.5 4.17157 17.9142 3.58579C17.3284 3 16.3856 3 14.5 3H9.5C7.61438 3 6.67157 3 6.08579 3.58579C5.5 4.17157 5.5 5.11438 5.5 7V17C5.5 18.8856 5.5 19.8284 6.08579 20.4142C6.67157 21 7.61438 21 9.5 21H14.5C16.3856 21 17.3284 21 17.9142 20.4142C18.5 19.8284 18.5 18.8856 18.5 17Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 6H19C20.4142 6 21.1213 6 21.5607 6.43934C22 6.87868 22 7.58579 22 9V16C22 17.4142 22 18.1213 21.5607 18.5607C21.1213 19 20.4142 19 19 19H18.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 6H5C3.58579 6 2.87868 6 2.43934 6.43934C2 6.87868 2 7.58579 2 9V16C2 17.4142 2 18.1213 2.43934 18.5607C2.87868 19 3.58579 19 5 19H5.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 8L9.5 8M14.5 12L9.5 12M14.5 16H9.5',
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

BrochureIcon.displayName = 'BrochureIcon';
export default BrochureIcon;
