import React from 'react';
import config from '../config';

interface KnowledgeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KnowledgeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/knowledge)
 * @see {@link https://clicons.dev/icon/knowledge}
 */
const KnowledgeIcon = React.forwardRef<SVGSVGElement, KnowledgeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.9998 16H4.89113C4.40355 16 4.0423 16.1723 3.75757 16.4515C3.28913 16.9108 3.12083 17.5901 3.04657 18.2429C2.96065 18.9982 2.99167 19.6886 3.20248 20.4377C3.43762 21.2734 4.02149 22 4.88667 22H20.9998M19.4061 22C17.8674 20.5885 17.2354 18.1421 19.4061 16'
    }
  ],
  [
    'path',
    {
      d: 'M11.8176 6.5C11.8176 4 9.10929 3 9.10929 3M11.8176 6.92131C11.8176 6.92131 5.85938 3.85577 5.85938 8.90819C5.85938 13.9606 8.57044 16 9.65094 16C10.5128 16 11.0212 14.9913 11.8176 14.9913C12.6139 14.9913 12.9008 16 13.9841 16C15.0647 16 17.7757 13.9606 17.7757 8.90819C17.7757 3.85578 11.8176 6.92131 11.8176 6.92131ZM12.3593 6C12.3593 2.01035 14.3103 3 15.2858 2C16.2614 4.5 14.9556 5.00259 12.3593 6Z'
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

KnowledgeIcon.displayName = 'KnowledgeIcon';
export default KnowledgeIcon;
