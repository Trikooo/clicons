import React from 'react';
import config from '../config';

interface ShoppingBag3IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ShoppingBag3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/shopping-bag3)
 * @see {@link https://clicons.dev/icon/shopping-bag3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ShoppingBag3Icon = React.forwardRef<SVGSVGElement, ShoppingBag3IconProps>(
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
      d: 'M7.00003 6C7.00003 7.65685 8.34318 9 10 9C11.6569 9 13 7.65685 13 6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.1118 3H8.88827C6.21723 3 4.88171 3 4.01971 3.82064C3.15772 4.64128 3.08364 5.98325 2.93548 8.66719L2.60427 14.6672C2.44028 17.6379 2.35829 19.1233 3.24033 20.0616C4.12238 21 5.60061 21 8.55706 21H11.443C14.3995 21 15.8777 21 16.7597 20.0616C17.6418 19.1233 17.5598 17.6379 17.3958 14.6672L17.0645 8.66717C16.9164 5.98324 16.8423 4.64127 15.9803 3.82064C15.1183 3 13.7828 3 11.1118 3Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.8883 3H15.1118C17.7828 3 19.1183 3 19.9803 3.82064C20.8423 4.64127 20.9164 5.98324 21.0645 8.66717L21.3958 14.6672C21.5598 17.6379 21.6418 19.1233 20.7597 20.0616C19.8777 21 18.3995 21 15.443 21H12.5571',
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

ShoppingBag3Icon.displayName = 'ShoppingBag3Icon';
export default ShoppingBag3Icon;
