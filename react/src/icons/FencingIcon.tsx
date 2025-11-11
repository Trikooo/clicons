import React from 'react';
import config from '../config';

interface FencingIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name FencingIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/fencing)
 * @see {@link https://clicons.dev/icon/fencing} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const FencingIcon = React.forwardRef<SVGSVGElement, FencingIconProps>(
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

    const iconData = [["path", { d: "M6.88673 15.6009L2.72303 18.5907C2.56872 18.7001 2.42869 18.8285 2.30621 18.9728C1.33417 20.1179 2.8868 21.6661 4.03001 20.6924C4.17151 20.5719 4.29775 20.4344 4.40576 20.283L7.38448 16.0995M9.01217 14.006C7.05577 12.0464 4.94319 13.6542 4.94319 13.6542C4.94319 13.6542 5.9327 14.6453 7.15333 15.868C8.37395 17.0906 9.31531 18.0335 9.31531 18.0335C9.31531 18.0335 10.9686 15.9657 9.01217 14.006ZM9.01217 14.006L20 3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.1133 15.6009L21.277 18.5907C21.4313 18.7001 21.5713 18.8285 21.6938 18.9728C22.6658 20.1179 21.1132 21.666 19.97 20.6924C19.8285 20.5719 19.7023 20.4344 19.5942 20.283L16.6155 16.0995M14.9878 14.006C16.9442 12.0464 19.0568 13.6542 19.0568 13.6542C19.0568 13.6542 18.0673 14.6453 16.8467 15.868C15.626 17.0906 14.6847 18.0335 14.6847 18.0335C14.6847 18.0335 13.0314 15.9657 14.9878 14.006ZM14.9878 14.006L4 3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

FencingIcon.displayName = 'FencingIcon';
export default FencingIcon;
