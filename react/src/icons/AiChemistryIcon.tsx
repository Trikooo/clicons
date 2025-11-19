import React from 'react';
import config from '../config';

interface AiChemistryIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiChemistryIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-chemistry)
 * @see {@link https://clicons.dev/icon/ai-chemistry}
 */
const AiChemistryIcon = React.forwardRef<SVGSVGElement, AiChemistryIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.5 18C13.5 20.2091 11.7091 22 9.5 22C7.29086 22 5.5 20.2091 5.5 18V2H13.5V10'
    }
  ],
  [
    'path',
    {
      d: 'M16 10.5L15.7421 11.197C15.4039 12.111 15.2348 12.568 14.9014 12.9014C14.568 13.2348 14.111 13.4039 13.197 13.7421L12.5 14L13.197 14.2579C14.111 14.5961 14.568 14.7652 14.9014 15.0986C15.2348 15.432 15.4039 15.889 15.7421 16.803L16 17.5L16.2579 16.803C16.5961 15.889 16.7652 15.432 17.0986 15.0986C17.432 14.7652 17.889 14.5961 18.803 14.2579L19.5 14L18.803 13.7421C17.889 13.4039 17.432 13.2348 17.0986 12.9014C16.7652 12.568 16.5961 12.111 16.2579 11.197L16 10.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 2H14.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 8H13.5'
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

AiChemistryIcon.displayName = 'AiChemistryIcon';
export default AiChemistryIcon;
