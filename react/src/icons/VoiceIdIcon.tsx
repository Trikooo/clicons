import React from 'react';
import config from '../config';

interface VoiceIdIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VoiceIdIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/voice-id)
 * @see {@link https://clicons.dev/icon/voice-id}
 */
const VoiceIdIcon = React.forwardRef<SVGSVGElement, VoiceIdIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.50003 8.18677C2.60409 6.08705 2.9154 4.77792 3.84667 3.84664C4.77795 2.91537 6.08708 2.60406 8.1868 2.5M21.5 8.18677C21.396 6.08705 21.0847 4.77792 20.1534 3.84664C19.2221 2.91537 17.913 2.60406 15.8133 2.5M15.8133 21.5C17.913 21.3959 19.2221 21.0846 20.1534 20.1534C21.0847 19.2221 21.396 17.9129 21.5 15.8132M8.18679 21.5C6.08708 21.3959 4.77795 21.0846 3.84667 20.1534C2.9154 19.2221 2.60409 17.9129 2.50003 15.8132'
    }
  ],
  [
    'path',
    {
      d: 'M12 7V17M8.00006 9V15M16.0001 15V9'
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

VoiceIdIcon.displayName = 'VoiceIdIcon';
export default VoiceIdIcon;
