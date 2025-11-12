import React from 'react';
import config from '../config';

interface Hold3IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Hold3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hold3)
 * @see {@link https://clicons.dev/icon/hold3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Hold3Icon = React.forwardRef<SVGSVGElement, Hold3IconProps>(
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
      d: 'M20.5 9.5V14.1667C20.5 16.34 20.5 17.4267 20.1689 18.2918C19.6627 19.6148 18.6207 20.6601 17.3019 21.1679C16.4395 21.5 15.3562 21.5 13.1896 21.5C12.0534 21.5 11.4853 21.5 10.9566 21.3834C10.1499 21.2056 9.40001 20.8294 8.77419 20.2888C8.36398 19.9344 8.02311 19.4785 7.34137 18.5667L4.33738 14.5487C3.8758 13.9314 3.88907 13.0789 4.36965 12.4763C4.99772 11.6888 6.16877 11.6237 6.8797 12.3369L8.5011 13.9634V10.5V6C8.5011 5.17157 9.17267 4.5 10.0011 4.5C10.8295 4.5 11.5011 5.17157 11.5011 6M11.5011 6V4C11.5011 3.17157 12.1727 2.5 13.0011 2.5C13.8295 2.5 14.5011 3.17157 14.5011 4V6M11.5011 6V10.5M14.5011 6C14.5011 5.17157 15.1727 4.5 16.0011 4.5C16.8295 4.5 17.5011 5.17157 17.5011 6V8M14.5011 6V10.5M20.5011 10.5V8C20.5011 7.17157 19.8295 6.5 19.0011 6.5C18.1727 6.5 17.5011 7.17157 17.5011 8M17.5011 8V10.5',
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

Hold3Icon.displayName = 'Hold3Icon';
export default Hold3Icon;
