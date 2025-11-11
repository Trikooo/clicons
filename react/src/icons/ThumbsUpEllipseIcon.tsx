import React from 'react';
import config from '../config';

interface ThumbsUpEllipseIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ThumbsUpEllipseIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/thumbs-up-ellipse)
 * @see {@link https://clicons.dev/icon/thumbs-up-ellipse} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ThumbsUpEllipseIcon = React.forwardRef<SVGSVGElement, ThumbsUpEllipseIconProps>(
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

    const iconData = [["path", { d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13.1525 8.78626L12.975 9.34278C12.8295 9.79881 12.7567 10.0268 12.8127 10.2069C12.8579 10.3526 12.9573 10.4782 13.0927 10.5608C13.26 10.6629 13.5131 10.6629 14.0194 10.6629H14.2887C16.0021 10.6629 16.8588 10.6629 17.2634 11.1552C17.3097 11.2114 17.3508 11.2712 17.3864 11.334C17.6977 11.883 17.3438 12.6226 16.636 14.1017C15.9865 15.4591 15.6617 16.1378 15.0587 16.5373C15.0003 16.576 14.9403 16.6125 14.8789 16.6467C14.244 16.9999 13.4574 16.9999 11.8843 16.9999H11.5431C9.63715 16.9999 8.68419 16.9999 8.09209 16.443C7.5 15.8862 7.5 14.99 7.5 13.1977V12.5677C7.5 11.6258 7.5 11.1548 7.67223 10.7238C7.84445 10.2927 8.17424 9.93827 8.8338 9.2294L11.5614 6.29786C11.6298 6.22434 11.664 6.18758 11.6942 6.1621C11.9757 5.92433 12.4102 5.95109 12.6563 6.22137C12.6826 6.25033 12.7115 6.29097 12.7691 6.37226C12.8592 6.49942 12.9043 6.56299 12.9436 6.62598C13.2952 7.18988 13.4016 7.85974 13.2405 8.49566C13.2225 8.56668 13.1992 8.63992 13.1525 8.78626Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

ThumbsUpEllipseIcon.displayName = 'ThumbsUpEllipseIcon';
export default ThumbsUpEllipseIcon;
