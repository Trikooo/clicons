import React from 'react';
import config from '../config';

interface AiScanIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiScanIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-scan)
 * @see {@link https://clicons.dev/icon/ai-scan}
 */
const AiScanIcon = React.forwardRef<SVGSVGElement, AiScanIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.5 16.5C2.5 17.4293 2.5 17.894 2.57686 18.2804C2.89249 19.8671 4.13288 21.1075 5.71964 21.4231C6.10603 21.5 6.57069 21.5 7.5 21.5M21.5 16.5C21.5 17.4293 21.5 17.894 21.4231 18.2804C21.1075 19.8671 19.8671 21.1075 18.2804 21.4231C17.894 21.5 17.4293 21.5 16.5 21.5M21.5 7.5C21.5 6.57069 21.5 6.10603 21.4231 5.71964C21.1075 4.13288 19.8671 2.89249 18.2804 2.57686C17.894 2.5 17.4293 2.5 16.5 2.5M2.5 7.5C2.5 6.57069 2.5 6.10603 2.57686 5.71964C2.89249 4.13288 4.13288 2.89249 5.71964 2.57686C6.10603 2.5 6.57069 2.5 7.5 2.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 8.5V6.5M10 11.5V12M14 11.5V12M11 8.5H13C14.8856 8.5 15.8284 8.5 16.4142 9.08579C17 9.67157 17 10.6144 17 12.5V12.5C17 14.3856 17 15.3284 16.4142 15.9142C15.8284 16.5 14.8856 16.5 13 16.5H11C9.11438 16.5 8.17157 16.5 7.58579 15.9142C7 15.3284 7 14.3856 7 12.5V12.5C7 10.6144 7 9.67157 7.58579 9.08579C8.17157 8.5 9.11438 8.5 11 8.5Z'
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

AiScanIcon.displayName = 'AiScanIcon';
export default AiScanIcon;
