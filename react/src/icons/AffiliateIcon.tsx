import React from 'react';
import config from '../config';

interface AffiliateIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AffiliateIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/affiliate)
 * @see {@link https://clicons.dev/icon/affiliate} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AffiliateIcon = React.forwardRef<SVGSVGElement, AffiliateIconProps>(
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
      d: 'M21.9644 4.50615C21.9644 4.50615 22.1405 2.72142 21.7095 2.29048M21.7095 2.29048C21.276 1.85699 19.4941 2.0371 19.4941 2.0371M21.7095 2.29048L19 4.99997',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.9644 19.4938C21.9644 19.4938 22.1405 21.2785 21.7095 21.7095M21.7095 21.7095C21.276 22.143 19.4941 21.9629 19.4941 21.9629M21.7095 21.7095L19 19',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.29048 2.29047L5 4.99997M2.29048 2.29047C2.72397 1.85699 4.50593 2.0371 4.50593 2.0371M2.29048 2.29047C1.85953 2.72142 2.03561 4.50614 2.03561 4.50614',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.29048 21.7095L5 19M2.29048 21.7095C2.72397 22.143 4.50593 21.9629 4.50593 21.9629M2.29048 21.7095C1.85953 21.2786 2.03561 19.4939 2.03561 19.4939',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.914 9.30127C10.8094 9.30127 10 9.94342 10 10.6887C10 11.4339 10.5219 11.8999 12 11.8999C13.6282 11.8999 14 12.6423 14 13.3875C14 14.1328 13.2883 14.7214 11.914 14.7214M11.914 9.30127C12.7848 9.30127 13.2451 9.60613 13.6086 10.0165M11.914 9.30127V8.45703M11.914 14.7214C11.0432 14.7214 10.7046 14.5494 10.225 14.1154M11.914 14.7214V15.5088',
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

AffiliateIcon.displayName = 'AffiliateIcon';
export default AffiliateIcon;
