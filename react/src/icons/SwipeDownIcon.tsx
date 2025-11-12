import React from 'react';
import config from '../config';

interface SwipeDownIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SwipeDownIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/swipe-down)
 * @see {@link https://clicons.dev/icon/swipe-down} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SwipeDownIcon = React.forwardRef<SVGSVGElement, SwipeDownIconProps>(
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
      d: 'M18.5 8V2M18.5 8C17.7998 8 16.4915 6.0057 16 5.5M18.5 8C19.2002 8 20.5085 6.0057 21 5.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.8348 22L7.8348 21.0513C7.8348 20.4058 7.6261 19.7775 7.23964 19.2595L3.58206 14.3566C3.16022 13.7911 2.8233 13.0896 3.1018 12.4419C3.55264 11.3935 4.82458 10.7124 6.38144 12.2843L7.97865 13.9937L7.97865 3.57057C8.03487 1.52742 11.3229 1.42614 11.4635 3.57057L11.4635 9.5106C12.9435 9.31946 19.9155 10.3629 18.8993 14.7831C18.851 14.9931 18.8028 15.2063 18.7557 15.4165C18.5501 16.3353 17.9422 17.9727 17.2719 18.93C16.5741 19.9266 16.8203 20.9192 16.8203 22',
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

SwipeDownIcon.displayName = 'SwipeDownIcon';
export default SwipeDownIcon;
