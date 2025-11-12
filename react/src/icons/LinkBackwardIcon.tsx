import React from 'react';
import config from '../config';

interface LinkBackwardIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name LinkBackwardIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/link-backward)
 * @see {@link https://clicons.dev/icon/link-backward} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const LinkBackwardIcon = React.forwardRef<SVGSVGElement, LinkBackwardIconProps>(
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
      d: 'M11 8.5H10.5V4.69635C10.5 4.31176 10.1882 4 9.80365 4C9.61002 4 9.42513 4.08062 9.29338 4.22252L3.34023 10.6336C3.12154 10.8691 3 11.1786 3 11.5C3 11.8214 3.12154 12.1309 3.34023 12.3664L9.29338 18.7775C9.42513 18.9194 9.61002 19 9.80365 19C10.1882 19 10.5 18.6882 10.5 18.3037V14.5C16.0544 14.5 19.0531 18.5162 19.808 19.6847C19.9326 19.8776 20.1429 20 20.3725 20C20.7191 20 21 19.7191 21 19.3725V18.5C21 12.9772 16.5228 8.5 11 8.5Z',
      stroke: 'currentColor',
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

LinkBackwardIcon.displayName = 'LinkBackwardIcon';
export default LinkBackwardIcon;
