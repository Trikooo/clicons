import React from 'react';
import config from '../config';

interface LayerBringToFrontIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name LayerBringToFrontIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/layer-bring-to-front)
 * @see {@link https://clicons.dev/icon/layer-bring-to-front} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const LayerBringToFrontIcon = React.forwardRef<SVGSVGElement, LayerBringToFrontIconProps>(
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
      d: 'M16.9784 8L19.2873 9.06064C21.0958 9.89137 22 10.3067 22 11C22 11.6933 21.0958 12.1086 19.2873 12.9394L14.3943 15.187C13.2144 15.729 12.6245 16 12 16C11.3755 16 10.7856 15.729 9.60573 15.187L4.7127 12.9394C2.90423 12.1086 2 11.6933 2 11C2 10.3067 2.90423 9.89137 4.7127 9.06064L7.02165 8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 2.5V10M15 5C14.4102 4.39316 12.8403 2 12 2C11.1597 2 9.58984 4.39316 9 5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M20.2327 15.5C21.4109 16.062 22 16.4405 22 17.0001C22 17.6934 21.0958 18.1087 19.2873 18.9395L14.3943 21.1871C13.2144 21.7291 12.6245 22.0001 12 22.0001C11.3755 22.0001 10.7856 21.7291 9.60573 21.1871L4.7127 18.9395C2.90423 18.1087 2 17.6934 2 17.0001C2 16.4405 2.58909 16.062 3.76727 15.5',
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

LayerBringToFrontIcon.displayName = 'LayerBringToFrontIcon';
export default LayerBringToFrontIcon;
