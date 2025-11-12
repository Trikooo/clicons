import React from 'react';
import config from '../config';

interface Baby2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Baby2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/baby2)
 * @see {@link https://clicons.dev/icon/baby2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Baby2Icon = React.forwardRef<SVGSVGElement, Baby2IconProps>(
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
    'circle',
    {
      cx: '12',
      cy: '8',
      r: '6',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.874 12C17.5826 13.037 18 14.3093 18 15.6842C18 16.5017 17.8524 17.2829 17.5838 18M7.12605 12C6.41738 13.037 6 14.3093 6 15.6842C6 19.1723 8.68629 22 12 22C14.5371 22 16.7064 20.3424 17.5838 18M17.5838 18C14.8509 16.8 12.0559 14.8333 11 14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 2C11.0059 2 10.2 2.7835 10.2 3.75C10.2 4.7165 11.0059 5.5 12 5.5C12.461 5.5 12.8815 5.3315 13.2 5.0544',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 8H10.0081M14 8H14.0081',
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

Baby2Icon.displayName = 'Baby2Icon';
export default Baby2Icon;
