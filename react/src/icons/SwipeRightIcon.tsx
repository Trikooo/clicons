import React from 'react';
import config from '../config';

interface SwipeRightIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SwipeRightIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/swipe-right)
 * @see {@link https://clicons.dev/icon/swipe-right} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SwipeRightIcon = React.forwardRef<SVGSVGElement, SwipeRightIconProps>(
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
      d: 'M21.001 4.49905H15.001M21.001 4.49905C21.001 3.79909 19.0067 2.49134 18.501 2M21.001 4.49905C21.001 5.19901 19.0067 6.50675 18.501 6.9981',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.8942 21.9884C16.8424 20.0751 16.9713 19.8448 17.1081 19.4191C17.2448 18.9935 18.2011 17.4587 18.5395 16.3621C19.6342 12.8141 18.6139 12.0595 17.2536 11.0534C15.7451 9.93759 12.8997 9.37252 11.4886 9.49486V3.74359C11.4886 2.78063 10.7077 2 9.74439 2C8.78106 2 8.00014 2.78063 8.00014 3.74359V14.0032L5.93997 11.8238C5.30035 11.1303 4.27243 11.06 3.5709 11.6908C2.90609 12.2886 2.80906 13.2953 3.34749 14.009L4.63984 15.722M7.87078 22.0002L7.85125 20.9498C7.89419 19.7185 6.9982 18.9151 5.82962 17.3089C5.74542 17.1931 5.6635 17.0813 5.58372 16.973M5.58372 16.973C5.22966 16.4926 4.91814 16.0832 4.63984 15.722M5.58372 16.973L6.75315 18.5231M5.58372 16.973L4.63984 15.722M4.63984 15.722C4.06847 14.9802 3.63715 14.4412 3.26531 13.9056',
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

SwipeRightIcon.displayName = 'SwipeRightIcon';
export default SwipeRightIcon;
