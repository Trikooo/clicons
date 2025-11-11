import React from 'react';
import config from '../config';

interface ImageCompositionIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ImageCompositionIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/image-composition)
 * @see {@link https://clicons.dev/icon/image-composition} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ImageCompositionIcon = React.forwardRef<SVGSVGElement, ImageCompositionIconProps>(
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

    const iconData = [["path", { d: "M7.07523 3.88403C10.2874 4.8348 13.7126 4.8348 16.9248 3.88403C19.517 3.11677 20.813 2.73313 21.4065 3.20921C22 3.68529 22 4.90772 22 7.35256V16.6474C22 19.0923 22 20.3147 21.4065 20.7908C20.813 21.2669 19.5169 20.8832 16.9248 20.116C13.7126 19.1652 10.2874 19.1652 7.07523 20.116C4.48305 20.8832 3.18696 21.2669 2.59348 20.7908C2 20.3147 2 19.0923 2 16.6474V7.35256C2 4.90772 2 3.68529 2.59348 3.20921C3.18696 2.73313 4.48305 3.11677 7.07523 3.88403Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7 20C10.9469 15.8426 15.3824 10.3291 22 14.4643", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M9 8.5C9 9.32843 8.32843 10 7.5 10C6.67157 10 6 9.32843 6 8.5C6 7.67157 6.67157 7 7.5 7C8.32843 7 9 7.67157 9 8.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

ImageCompositionIcon.displayName = 'ImageCompositionIcon';
export default ImageCompositionIcon;
