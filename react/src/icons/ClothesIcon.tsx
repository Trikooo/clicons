import React from 'react';
import config from '../config';

interface ClothesIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ClothesIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/clothes)
 * @see {@link https://clicons.dev/icon/clothes} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ClothesIcon = React.forwardRef<SVGSVGElement, ClothesIconProps>(
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
      d: 'M17.0032 2.55556L14.5016 2C14.0013 3 13.0006 3.5 12 3.5C10.9994 3.5 9.99871 3 9.49839 2L6.99678 2.55556M17.0032 2.55556L17.4345 2.65134C18.442 2.87509 19.3482 3.4731 19.7132 4.43787C20.3752 6.18796 20.9185 8.98395 20.9962 12.9991C21.0053 13.4665 21.0098 13.7002 20.8627 13.8501C20.7156 14 20.4788 14 20.0052 14H17.966M17.0032 2.55556C17.0032 4.86557 17.2187 8.87061 17.966 14M17.966 14C18.1099 14.9879 18.3937 16.6177 18.6283 17.9295C18.8053 18.9196 18.8938 19.4146 18.5583 20.0311C18.2227 20.6476 17.8839 20.7899 17.2062 21.0744C16.0771 21.5484 14.3775 22 12 22C9.62254 22 7.92293 21.5484 6.79378 21.0744C6.11609 20.7899 5.77725 20.6476 5.44171 20.0311C5.10617 19.4146 5.19469 18.9196 5.37173 17.9295C5.60631 16.6177 5.89007 14.9879 6.034 14M6.99678 2.55556L6.56545 2.65134C5.55795 2.87509 4.6518 3.4731 4.28683 4.43787C3.62477 6.18796 3.08153 8.98395 3.00375 12.9991C2.9947 13.4665 2.99017 13.7002 3.13728 13.8501C3.28438 14 3.5212 14 3.99484 14H6.034M6.99678 2.55556C6.99678 4.86557 6.78127 8.87061 6.034 14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.031 3C13.884 6.47826 14.1192 13.7478 18 15M9.96919 3C10.1162 6.47826 9.88048 13.7478 6 15',
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

ClothesIcon.displayName = 'ClothesIcon';
export default ClothesIcon;
