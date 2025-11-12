import React from 'react';
import config from '../config';

interface BaseballHelmetIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BaseballHelmetIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/baseball-helmet)
 * @see {@link https://clicons.dev/icon/baseball-helmet} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BaseballHelmetIcon = React.forwardRef<SVGSVGElement, BaseballHelmetIconProps>(
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
      d: 'M19.5 8.5C18 5 14.9924 3 11.4046 3C6.21058 3 2 7.24151 2 12.4737C2 15.8912 3.79635 18.886 6.48977 20.5523C7.06928 20.9108 7.54664 21 8.22657 21H14.763C16.1727 21 17.3155 19.8807 17.3155 18.5C17.3155 17.1193 16.1727 16 14.763 16C14.3687 16 13.6311 16.1485 13.3534 15.8267C13.2038 15.6533 13.2359 15.4366 13.3 15.0031C13.7388 12.0363 16.2376 11.5 19.4564 11.5C20.2168 11.5 20.9772 10.655 21.5235 9.86188C21.9052 9.30765 22.096 9.03053 21.952 8.76527C21.808 8.5 21.4444 8.5 20.7171 8.5H19.5ZM19.5 8.5H15.0693',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.0078 18.5L14.9988 18.5',
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

BaseballHelmetIcon.displayName = 'BaseballHelmetIcon';
export default BaseballHelmetIcon;
