import React from 'react';
import config from '../config';

interface ImageFlipVerticalIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ImageFlipVerticalIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/image-flip-vertical)
 * @see {@link https://clicons.dev/icon/image-flip-vertical} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ImageFlipVerticalIcon = React.forwardRef<SVGSVGElement, ImageFlipVerticalIconProps>(
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
      d: 'M13.4572 5.90692L9.5343 3.83293C7.52036 2.76817 6.51339 2.23579 5.75669 2.62971C5 3.02362 5 4.08019 5 6.19334V8.26734C5 9.55553 5 10.1996 5.44155 10.5998C5.8831 11 6.59376 11 8.01508 11H11.9379C16.4249 11 18.6683 11 18.9695 9.99025C19.2707 8.98051 17.3329 7.95598 13.4572 5.90692Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.4572 19.0931L9.5343 21.1671C7.52036 22.2318 6.51339 22.7642 5.75669 22.3703C5 21.9764 5 20.9198 5 18.8067V16.7327C5 15.4445 5 14.8004 5.44155 14.4002C5.8831 14 6.59376 14 8.01508 14H11.9379C16.4249 14 18.6683 14 18.9695 15.0097C19.2707 16.0195 17.3329 17.044 13.4572 19.0931Z',
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

ImageFlipVerticalIcon.displayName = 'ImageFlipVerticalIcon';
export default ImageFlipVerticalIcon;
