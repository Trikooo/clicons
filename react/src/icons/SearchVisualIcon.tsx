import React from 'react';
import config from '../config';

interface SearchVisualIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SearchVisualIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/search-visual)
 * @see {@link https://clicons.dev/icon/search-visual} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SearchVisualIcon = React.forwardRef<SVGSVGElement, SearchVisualIconProps>(
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
      d: 'M15.5 15.0001L17.5 17.0001M16.5 11.5001C16.5 9.01483 14.4853 7.00011 12 7.00011C9.51472 7.00011 7.5 9.01483 7.5 11.5001C7.5 13.9854 9.51472 16.0001 12 16.0001C14.4853 16.0001 16.5 13.9854 16.5 11.5001Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 21.5001C16.8623 21.5001 17.7935 21.5001 18.5391 21.2287C19.789 20.7738 20.7737 19.7891 21.2286 18.5392C21.5 17.7936 21.5 16.8624 21.5 15.0001M9 21.5001C7.13769 21.5001 6.20653 21.5001 5.46091 21.2287C4.21096 20.7738 3.22633 19.7891 2.77138 18.5392C2.5 17.7936 2.5 16.8624 2.5 15.0001M9 2.50011C7.13769 2.50011 6.20653 2.50011 5.46091 2.77149C4.21096 3.22643 3.22633 4.21107 2.77138 5.46102C2.5 6.20664 2.5 7.13779 2.5 9.00011M15 2.50011C16.8623 2.50011 17.7935 2.50011 18.5391 2.77149C19.789 3.22643 20.7737 4.21107 21.2286 5.46102C21.5 6.20664 21.5 7.13779 21.5 9.00011',
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

SearchVisualIcon.displayName = 'SearchVisualIcon';
export default SearchVisualIcon;
