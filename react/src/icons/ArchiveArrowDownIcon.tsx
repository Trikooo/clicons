import React from 'react';
import config from '../config';

interface ArchiveArrowDownIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ArchiveArrowDownIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/archive-arrow-down)
 * @see {@link https://clicons.dev/icon/archive-arrow-down} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ArchiveArrowDownIcon = React.forwardRef<SVGSVGElement, ArchiveArrowDownIconProps>(
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

    const iconData = [["path", { d: "M8 3C7.28543 3.05475 6.78159 3.18135 6.34921 3.47408C5.58736 3.98988 5.22202 4.90323 4.49134 6.72994L2.42914 11.9271C2.21522 12.4619 2.10826 12.7293 2.05413 13.0104C2 13.2915 2 13.5795 2 14.1555V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V14.1555C22 13.5795 22 13.2915 21.9459 13.0104C21.8917 12.7293 21.7848 12.4619 21.5709 11.9271L19.5087 6.72994C18.778 4.90323 18.4126 3.98988 17.6508 3.47408C17.2184 3.18135 16.7146 3.05475 16 3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2.5 13H5.58579C6.16263 13 6.45105 13 6.71982 13.0766C6.86747 13.1187 7.00978 13.1776 7.14394 13.2523C7.38816 13.3882 7.59211 13.5921 8 14C8.40789 14.4079 8.61184 14.6118 8.85606 14.7477C8.99022 14.8224 9.13253 14.8813 9.28018 14.9234C9.54895 15 9.83737 15 10.4142 15H13.5858C14.1626 15 14.4511 15 14.7198 14.9234C14.8675 14.8813 15.0098 14.8224 15.1439 14.7477C15.3882 14.6118 15.5921 14.4079 16 14C16.4079 13.5921 16.6118 13.3882 16.8561 13.2523C16.9902 13.1776 17.1325 13.1187 17.2802 13.0766C17.5489 13 17.8374 13 18.4142 13H21.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M15 7.00002C15 7.00002 12.7905 9.99999 12 10C11.2094 10 9 7 9 7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12 3V9.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

ArchiveArrowDownIcon.displayName = 'ArchiveArrowDownIcon';
export default ArchiveArrowDownIcon;
