import React from 'react';
import config from '../config';

interface CamelIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CamelIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/camel)
 * @see {@link https://clicons.dev/icon/camel} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CamelIcon = React.forwardRef<SVGSVGElement, CamelIconProps>(
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
      d: 'M12 13.7208C11.31 13.3101 11 12.8256 11 12.5M12 13.7208V20H8.5L10 18L9 13.5C6 13.5 4.5 10 4.5 8H3C2.44772 8 2 7.55228 2 7C2 5.89543 2.89543 5 4 5H5.5L5.76816 4.59775C6.16561 4.00159 6.98227 3.8617 7.55547 4.2916C8.08539 4.68904 8.21252 5.43122 7.84509 5.98237L7.5 6.5C7.33333 7.16667 7.3 8.6 8.5 9C9.16667 9.16667 10.6 9 11 7C11.5 5.5 12.5 3 14.5 3C16.1156 3 16.4261 5.28398 18.3308 6.9526C19.2335 7.7434 20 8.7781 20 9.97819V20H17L18 18L17.5 14.2285C15.7934 14.7554 13.5427 14.6389 12 13.7208ZM19.2986 8C19.2986 8 22 8.50003 22 12',
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

CamelIcon.displayName = 'CamelIcon';
export default CamelIcon;
