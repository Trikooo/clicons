import React from 'react';
import config from '../config';

interface Clubs2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Clubs2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/clubs2)
 * @see {@link https://clicons.dev/icon/clubs2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Clubs2Icon = React.forwardRef<SVGSVGElement, Clubs2IconProps>(
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
      d: 'M12 2C9.79086 2 8 3.8529 8 6.13856C8 6.89237 8.19479 7.59911 8.53513 8.20784C5.9581 7.52158 3 9.51116 3 12.3464C3 15.5508 6.13941 17.0241 8.81012 16.3268C9.67373 16.1013 10.1055 15.9886 10.2279 16.1211C10.696 16.6279 9.34611 19.1578 9.10267 19.6578C8.64426 20.5995 8.41506 21.0703 8.59267 21.3642C9.01463 22.0625 14.8121 22.3493 15.4073 21.3642C15.5849 21.0703 15.3557 20.5995 14.8973 19.6578C14.6539 19.1578 13.304 16.6279 13.7721 16.1211C13.8945 15.9886 14.3263 16.1013 15.1899 16.3268C17.8488 17.021 21 15.5187 21 12.3464C21 9.53108 18.0333 7.52389 15.4649 8.20784C15.8052 7.59911 16 6.89237 16 6.13856C16 3.8529 14.2091 2 12 2Z',
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

Clubs2Icon.displayName = 'Clubs2Icon';
export default Clubs2Icon;
