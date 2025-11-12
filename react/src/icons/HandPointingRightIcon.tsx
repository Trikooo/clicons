import React from 'react';
import config from '../config';

interface HandPointingRightIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HandPointingRightIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-right)
 * @see {@link https://clicons.dev/icon/hand-pointing-right} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HandPointingRightIcon = React.forwardRef<SVGSVGElement, HandPointingRightIconProps>(
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
      d: 'M2 8.83415H2.94868C3.59418 8.83415 4.22251 8.62541 4.74055 8.23886L9.64341 4.58042C10.2089 4.15849 10.9104 3.82148 11.5581 4.10005C12.6065 4.551 13.2876 5.82324 11.7157 7.38045L10.0063 8.97804L20.4294 8.97804C22.4726 9.03427 22.5739 12.3231 20.4294 12.4637H14.4894C14.6805 13.9441 13.6371 20.9177 9.21687 19.9012C9.00686 19.8529 8.79375 19.8047 8.58346 19.7576C7.6647 19.5519 6.02726 18.9439 5.06998 18.2735C4.07344 17.5755 3.08083 17.8218 2 17.8218',
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

HandPointingRightIcon.displayName = 'HandPointingRightIcon';
export default HandPointingRightIcon;
