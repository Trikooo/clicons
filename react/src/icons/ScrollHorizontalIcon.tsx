import React from 'react';
import config from '../config';

interface ScrollHorizontalIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ScrollHorizontalIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/scroll-horizontal)
 * @see {@link https://clicons.dev/icon/scroll-horizontal} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ScrollHorizontalIcon = React.forwardRef<SVGSVGElement, ScrollHorizontalIconProps>(
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
      d: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.00023 12.0672C1.95947 10.6863 7.34458 7.43916 7.8518 8.08367C8.42696 8.81452 7.05181 10.9863 6.74208 11.6779C6.55582 12.0938 6.56093 12.2741 6.77271 12.6896C7.73186 14.571 8.20766 15.5084 7.91196 15.9136C7.44063 16.5595 2.04001 13.4149 2.00023 12.0672Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.9989 12.0672C22.0396 10.6863 16.6545 7.43916 16.1473 8.08367C15.5721 8.81452 16.9473 10.9863 17.257 11.6779C17.4433 12.0938 17.4382 12.2741 17.2264 12.6896C16.2672 14.571 15.7915 15.5084 16.0871 15.9136C16.5585 16.5595 21.9591 13.4149 21.9989 12.0672Z',
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

ScrollHorizontalIcon.displayName = 'ScrollHorizontalIcon';
export default ScrollHorizontalIcon;
