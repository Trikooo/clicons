import React from 'react';
import config from '../config';

interface AiLaptopIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiLaptopIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-laptop)
 * @see {@link https://clicons.dev/icon/ai-laptop}
 */
const AiLaptopIcon = React.forwardRef<SVGSVGElement, AiLaptopIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.9926 14.999V6.96505C3.9926 5.07142 3.9926 4.12461 4.5762 3.53633C4.90157 3.20835 5.33749 3.06323 5.98512 2.99902H10.9664'
    }
  ],
  [
    'path',
    {
      d: 'M3.4921 16.0144L4.01206 14.999H19.8848L20.4332 16.0144C21.8707 18.676 22.2288 20.0067 21.6823 21.0029C21.136 21.999 19.6873 21.999 16.79 21.999H7.13543C4.2381 21.999 2.78942 21.999 2.24303 21.0029C1.69664 20.0067 2.05461 18.676 3.4921 16.0144Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.4367 2.00098V3.98M11.9627 5.50136H14.007M19.9558 5.50136H22.0001M19.9558 8.47458H22.0001M11.9627 8.47458H14.007M15.4367 10.0202V11.9992M18.4508 10.0202V11.9992M18.4401 2.00098V3.98M15.0033 9.96854H18.9595C19.5097 9.96854 19.9558 9.52082 19.9558 8.96854V4.98C19.9558 4.42771 19.5097 3.98 18.9595 3.98H15.0033C14.453 3.98 14.007 4.42771 14.007 4.98V8.96854C14.007 9.52082 14.453 9.96854 15.0033 9.96854Z'
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

AiLaptopIcon.displayName = 'AiLaptopIcon';
export default AiLaptopIcon;
