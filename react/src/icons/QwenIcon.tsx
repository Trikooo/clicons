import React from 'react';
import config from '../config';

interface QwenIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name QwenIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/qwen)
 * @see {@link https://clicons.dev/icon/qwen}
 */
const QwenIcon = React.forwardRef<SVGSVGElement, QwenIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 2H12.5L14 4.5H19.13L20.5 7M22 14.5L20.3545 17.163H17.8782L15.0001 22H11.7825M5 20L3.5 17.5L4.5 14.5L2 9.5L4 7'
    }
  ],
  [
    'path',
    {
      d: 'M19.1901 9.66219L20.5001 7.0008H9.99996L11 5.0004L8.99996 2.0004L6.74874 7.0008H4.00006L8.99996 17.0004H5.99996L4.99996 20.0004H10.5L11.7516 22.0004L17.4017 12.0659L18.9401 14.5004H22L19.1901 9.66219Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.0001 15.5L9.00006 10H15.0001L12.0001 15.5Z'
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

QwenIcon.displayName = 'QwenIcon';
export default QwenIcon;
