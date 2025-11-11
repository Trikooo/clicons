import React from 'react';
import config from '../config';

interface LinkForwardIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name LinkForwardIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/link-forward)
 * @see {@link https://clicons.dev/icon/link-forward} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const LinkForwardIcon = React.forwardRef<SVGSVGElement, LinkForwardIconProps>(
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

    const iconData = [["path", { d: "M13 8.5H13.5V4.69635C13.5 4.31176 13.8118 4 14.1963 4C14.39 4 14.5749 4.08062 14.7066 4.22252L20.6598 10.6336C20.8785 10.8691 21 11.1786 21 11.5C21 11.8214 20.8785 12.1309 20.6598 12.3664L14.7066 18.7775C14.5749 18.9194 14.39 19 14.1963 19C13.8118 19 13.5 18.6882 13.5 18.3037V14.5C7.94555 14.5 4.94688 18.5162 4.19199 19.6847C4.06738 19.8776 3.85713 20 3.6275 20C3.28094 20 3 19.7191 3 19.3725V18.5C3 12.9772 7.47715 8.5 13 8.5Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

LinkForwardIcon.displayName = 'LinkForwardIcon';
export default LinkForwardIcon;
