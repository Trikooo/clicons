import React from 'react';
import config from '../config';

interface AiChemistry3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiChemistry3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-chemistry3)
 * @see {@link https://clicons.dev/icon/ai-chemistry3}
 */
const AiChemistry3Icon = React.forwardRef<SVGSVGElement, AiChemistry3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.5 2H14.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 15L17.2421 15.697C16.9039 16.611 16.7348 17.068 16.4014 17.4014C16.068 17.7348 15.611 17.9039 14.697 18.2421L14 18.5L14.697 18.7579C15.611 19.0961 16.068 19.2652 16.4014 19.5986C16.7348 19.932 16.9039 20.389 17.2421 21.303L17.5 22L17.7579 21.303C18.0961 20.389 18.2652 19.932 18.5986 19.5986C18.932 19.2652 19.389 19.0961 20.303 18.7579L21 18.5L20.303 18.2421C19.389 17.9039 18.932 17.7348 18.5986 17.4014C18.2652 17.068 18.0961 16.611 17.7579 15.697L17.5 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 11.8018C16.7142 9.76446 15.0645 8.15647 13 7.42676V2H8V7.42676C5.08702 8.45636 3 11.2345 3 14.5C3 18.6421 6.35786 22 10.5 22C11.5667 22 12.5813 21.7773 13.5 21.3759'
    }
  ],
  [
    'path',
    {
      d: 'M4 11H17'
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

AiChemistry3Icon.displayName = 'AiChemistry3Icon';
export default AiChemistry3Icon;
