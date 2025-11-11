import React from 'react';
import config from '../config';

interface KeyframeAlignCenterIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name KeyframeAlignCenterIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/keyframe-align-center)
 * @see {@link https://clicons.dev/icon/keyframe-align-center} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const KeyframeAlignCenterIcon = React.forwardRef<SVGSVGElement, KeyframeAlignCenterIconProps>(
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

    const iconData = [["path", { d: "M10.8546 8.89114C11.3832 8.29705 11.6475 8 12 8C12.3525 8 12.6168 8.29705 13.1454 8.89114L14.4455 10.3522C15.1485 11.1423 15.5 11.5374 15.5 12C15.5 12.4626 15.1485 12.8577 14.4455 13.6478L13.1454 15.1089C12.6168 15.703 12.3525 16 12 16C11.6475 16 11.3832 15.703 10.8546 15.1089L9.55451 13.6478C8.8515 12.8577 8.5 12.4626 8.5 12C8.5 11.5374 8.8515 11.1423 9.55451 10.3522L10.8546 8.89114Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5 12L2 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M22 12L19 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12 19L12 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M12 2L12 5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]];

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

KeyframeAlignCenterIcon.displayName = 'KeyframeAlignCenterIcon';
export default KeyframeAlignCenterIcon;
