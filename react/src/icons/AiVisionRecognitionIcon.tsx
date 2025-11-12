import React from 'react';
import config from '../config';

interface AiVisionRecognitionIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AiVisionRecognitionIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ai-vision-recognition)
 * @see {@link https://clicons.dev/icon/ai-vision-recognition} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AiVisionRecognitionIcon = React.forwardRef<SVGSVGElement, AiVisionRecognitionIconProps>(
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
      d: 'M22 12C22 12 19 19 12 19C5 19 2 12 2 12C2 12 5 5 12 5C18.5 5 22 12 22 12Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.6769 8.67738C11.8274 8.44087 12.1726 8.44087 12.3231 8.67738L12.7586 9.36157C13.2401 10.1182 13.8818 10.7599 14.6384 11.2414L15.3226 11.6769C15.5591 11.8274 15.5591 12.1726 15.3226 12.3231L14.6384 12.7586C13.8818 13.2401 13.2401 13.8818 12.7586 14.6384L12.3231 15.3226C12.1726 15.5591 11.8274 15.5591 11.6769 15.3226L11.2414 14.6384C10.7599 13.8818 10.1182 13.2401 9.36157 12.7586L8.67738 12.3231C8.44087 12.1726 8.44087 11.8274 8.67738 11.6769L9.36157 11.2414C10.1182 10.7599 10.7599 10.1182 11.2414 9.36157L11.6769 8.67738Z',
      stroke: 'currentColor',
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

AiVisionRecognitionIcon.displayName = 'AiVisionRecognitionIcon';
export default AiVisionRecognitionIcon;
