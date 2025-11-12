import React from 'react';
import config from '../config';

interface HandPointingDown01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HandPointingDown01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-down01)
 * @see {@link https://clicons.dev/icon/hand-pointing-down01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HandPointingDown01Icon = React.forwardRef<SVGSVGElement, HandPointingDown01IconProps>(
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
      d: 'M8.83403 2.00138V2.94868C8.83403 3.59418 8.62529 4.22251 8.23873 4.74055L4.5803 9.64341C4.15836 10.2089 3.82136 10.9104 4.09993 11.5581C4.55088 12.6065 5.82312 13.2876 7.38033 11.7157L8.97792 10.0063V20.4294C9.03415 22.4726 12.3229 22.5739 12.4636 20.4294V14.4894C13.9439 14.6805 20.9175 13.6371 19.9011 9.21686C19.8528 9.00686 19.8046 8.79374 19.7575 8.58346C19.5518 7.66469 18.9438 6.02726 18.2734 5.06998C17.5754 4.07344 17.8217 2.44361 17.8217 2',
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

HandPointingDown01Icon.displayName = 'HandPointingDown01Icon';
export default HandPointingDown01Icon;
