import React from 'react';
import config from '../config';

interface BulletIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BulletIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bullet)
 * @see {@link https://clicons.dev/icon/bullet} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BulletIcon = React.forwardRef<SVGSVGElement, BulletIconProps>(
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

    const iconData = [["path", { d: "M17.6664 9.66667C19.4373 7.89583 20.4998 4 20.4998 4C20.4998 4 16.6039 5.0625 14.8331 6.83333M17.6664 9.66667L14.8331 6.83333M17.6664 9.66667L16.2498 11.7917M14.8331 6.83333L12.7081 8.25M16.2498 11.7917L12.7081 8.25M16.2498 11.7917L9.87476 18.1667C9.28795 18.7535 8.33656 18.7535 7.74976 18.1667M12.7081 8.25L6.33309 14.625C5.74629 15.2118 5.74629 16.1632 6.33309 16.75M7.74976 18.1667L6.33309 16.75M7.74976 18.1667C8.33656 18.7535 8.33656 19.7049 7.74976 20.2917L7.04142 21L3.49976 17.4583L4.20809 16.75C4.79489 16.1632 5.74629 16.1632 6.33309 16.75", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

BulletIcon.displayName = 'BulletIcon';
export default BulletIcon;
