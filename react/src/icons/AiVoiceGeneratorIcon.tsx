import React from 'react';
import config from '../config';

interface AiVoiceGeneratorIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiVoiceGeneratorIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-voice-generator)
 * @see {@link https://clicons.dev/icon/ai-voice-generator}
 */
const AiVoiceGeneratorIcon = React.forwardRef<SVGSVGElement, AiVoiceGeneratorIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.4069 13.4036C17.6192 12.8655 18.3808 12.8655 18.5931 13.4036L18.6298 13.4969C19.1482 14.8113 20.1887 15.8518 21.5031 16.3702L21.5964 16.4069C22.1345 16.6192 22.1345 17.3808 21.5964 17.5931L21.5031 17.6298C20.1887 18.1482 19.1482 19.1887 18.6298 20.5031L18.5931 20.5964C18.3808 21.1345 17.6192 21.1345 17.4069 20.5964L17.3702 20.5031C16.8518 19.1887 15.8113 18.1482 14.4969 17.6298L14.4036 17.5931C13.8655 17.3808 13.8655 16.6192 14.4036 16.4069L14.4969 16.3702C15.8113 15.8518 16.8518 14.8113 17.3702 13.4969L17.4069 13.4036Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9C2 11.8284 2 13.2426 2.87868 14.1213C3.75736 15 5.17157 15 8 15H11'
    }
  ],
  [
    'path',
    {
      d: 'M6 8V10'
    }
  ],
  [
    'path',
    {
      d: 'M15 7V11'
    }
  ],
  [
    'path',
    {
      d: 'M12 8.5V9.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 8.5V9.5'
    }
  ],
  [
    'path',
    {
      d: 'M9 7V11'
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
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
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

AiVoiceGeneratorIcon.displayName = 'AiVoiceGeneratorIcon';
export default AiVoiceGeneratorIcon;
