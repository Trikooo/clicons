import React from 'react';
import config from '../config';

interface Kickstarter01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Kickstarter01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/kickstarter01)
 * @see {@link https://clicons.dev/icon/kickstarter01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Kickstarter01Icon = React.forwardRef<SVGSVGElement, Kickstarter01IconProps>(
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
      d: 'M4 5.7V18.3C4 19.7912 5.3432 21 7.00012 21C8.65705 21 10.0002 19.7912 10.0002 18.3L10.0008 14.0117L14.5421 19.8484C15.4924 21.0699 17.3631 21.3668 18.7204 20.5115C20.0777 19.6562 20.4075 17.9726 19.4572 16.7511L15.7606 12L19.4572 7.24889C20.4075 6.02739 20.0777 4.34382 18.7204 3.48852C17.3631 2.63322 15.4924 2.93008 14.5421 4.15157L10.0008 9.98832L10.0002 5.7C10.0002 4.20883 8.65705 3 7.00012 3C5.3432 3 4 4.20883 4 5.7Z',
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

Kickstarter01Icon.displayName = 'Kickstarter01Icon';
export default Kickstarter01Icon;
