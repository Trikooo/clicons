import React from 'react';
import config from '../config';

interface LayerSendToBackIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name LayerSendToBackIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/layer-send-to-back)
 * @see {@link https://clicons.dev/icon/layer-send-to-back} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const LayerSendToBackIcon = React.forwardRef<SVGSVGElement, LayerSendToBackIconProps>(
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

    const iconData = [["path", { d: "M12 21.5V7M15 19C14.4102 19.6068 12.8403 22 12 22C11.1597 22 9.58984 19.6068 9 19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M20.2327 11.5C21.4109 12.062 22 12.4405 22 13.0001C22 13.6934 21.0958 14.1087 19.2873 14.9395L15.8901 16.5M3.76727 11.5C2.58909 12.062 2 12.4405 2 13.0001C2 13.6934 2.90423 14.1087 4.7127 14.9395L8.1099 16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M8.11012 10.5L4.7127 8.93936C2.90423 8.10863 2 7.69326 2 7C2 6.30674 2.90423 5.89137 4.7127 5.06064L9.60573 2.81298C10.7856 2.27099 11.3755 2 12 2C12.6245 2 13.2144 2.27099 14.3943 2.81298L19.2873 5.06064C21.0958 5.89137 22 6.30674 22 7C22 7.69326 21.0958 8.10863 19.2873 8.93937L15.8899 10.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

LayerSendToBackIcon.displayName = 'LayerSendToBackIcon';
export default LayerSendToBackIcon;
