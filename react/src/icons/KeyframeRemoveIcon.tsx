import React from 'react';
import config from '../config';

interface KeyframeRemoveIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name KeyframeRemoveIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/keyframe-remove)
 * @see {@link https://clicons.dev/icon/keyframe-remove} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const KeyframeRemoveIcon = React.forwardRef<SVGSVGElement, KeyframeRemoveIconProps>(
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
      d: 'M6.70914 7.78222C7.76637 6.59403 8.29499 5.99994 9 5.99994C9.70501 5.99994 10.2336 6.59403 11.2909 7.78222L13.891 10.7044C15.297 12.2846 16 13.0747 16 13.9999C16 14.9252 15.297 15.7153 13.891 17.2955L11.2909 20.2177C10.2336 21.4058 9.70501 21.9999 9 21.9999C8.29499 21.9999 7.76637 21.4058 6.70914 20.2177L4.10902 17.2955C2.70301 15.7153 2 14.9252 2 13.9999C2 13.0747 2.70301 12.2846 4.10902 10.7044L6.70914 7.78222Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 4.99994H22',
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

KeyframeRemoveIcon.displayName = 'KeyframeRemoveIcon';
export default KeyframeRemoveIcon;
