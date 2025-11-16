import React from 'react';
import config from '../config';

interface PerplexityAiIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PerplexityAiIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/perplexity-ai)
 * @see {@link https://clicons.dev/icon/perplexity-ai}
 */
const PerplexityAiIcon = React.forwardRef<SVGSVGElement, PerplexityAiIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 16C4.58579 16 3.87868 16 3.43934 15.5607C3 15.1213 3 14.4142 3 13V11C3 9.58579 3 8.87868 3.43934 8.43934C3.87868 8 4.58579 8 6 8H18C19.4142 8 20.1213 8 20.5607 8.43934C21 8.87868 21 9.58579 21 11V13C21 14.4142 21 15.1213 20.5607 15.5607C20.1213 16 19.4142 16 18 16'
    }
  ],
  [
    'path',
    {
      d: 'M12 2V22'
    }
  ],
  [
    'path',
    {
      d: 'M5 8V2.70711C5 2.31658 5.31658 2 5.70711 2C5.89464 2 6.0745 2.0745 6.20711 2.20711L12 8'
    }
  ],
  [
    'path',
    {
      d: 'M19 8V2.70711C19 2.31658 18.6834 2 18.2929 2C18.1054 2 17.9255 2.0745 17.7929 2.20711L12 8'
    }
  ],
  [
    'path',
    {
      d: 'M6.64855 12.9055L12 8L17.3514 12.9055C17.7647 13.2843 18 13.8192 18 14.3798V20.3067C18 20.6896 17.6896 21 17.3067 21C17.1114 21 16.9251 20.9176 16.7937 20.7731L12 15.5L7.20631 20.7731C7.07491 20.9176 6.88864 21 6.6933 21C6.3104 21 6 20.6896 6 20.3067V14.3798C6 13.8192 6.23529 13.2843 6.64855 12.9055Z'
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

PerplexityAiIcon.displayName = 'PerplexityAiIcon';
export default PerplexityAiIcon;
