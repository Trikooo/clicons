import React from 'react';
import config from '../config';

interface AiVisionRecognitionIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiVisionRecognitionIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-vision-recognition)
 * @see {@link https://clicons.dev/icon/ai-vision-recognition}
 */
const AiVisionRecognitionIcon = React.forwardRef<SVGSVGElement, AiVisionRecognitionIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 12C22 12 19 19 12 19C5 19 2 12 2 12C2 12 5 5 12 5C18.5 5 22 12 22 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.6769 8.67738C11.8274 8.44087 12.1726 8.44087 12.3231 8.67738L12.7586 9.36157C13.2401 10.1182 13.8818 10.7599 14.6384 11.2414L15.3226 11.6769C15.5591 11.8274 15.5591 12.1726 15.3226 12.3231L14.6384 12.7586C13.8818 13.2401 13.2401 13.8818 12.7586 14.6384L12.3231 15.3226C12.1726 15.5591 11.8274 15.5591 11.6769 15.3226L11.2414 14.6384C10.7599 13.8818 10.1182 13.2401 9.36157 12.7586L8.67738 12.3231C8.44087 12.1726 8.44087 11.8274 8.67738 11.6769L9.36157 11.2414C10.1182 10.7599 10.7599 10.1182 11.2414 9.36157L11.6769 8.67738Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

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
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

AiVisionRecognitionIcon.displayName = 'AiVisionRecognitionIcon';
export default AiVisionRecognitionIcon;
