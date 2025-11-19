import React from 'react';
import config from '../config';

interface AiSchedulingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiSchedulingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-scheduling)
 * @see {@link https://clicons.dev/icon/ai-scheduling}
 */
const AiSchedulingIcon = React.forwardRef<SVGSVGElement, AiSchedulingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 2V5M6 2V5'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 3.5H13.5C17.2712 3.5 19.1569 3.5 20.3284 4.67157C21.5 5.84315 21.5 7.72876 21.5 11.5V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H10.5C6.72876 22 4.84315 22 3.67157 20.8284C2.5 19.6569 2.5 17.7712 2.5 14V11.5C2.5 7.72876 2.5 5.84315 3.67157 4.67157C4.84315 3.5 6.72876 3.5 10.5 3.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 8H21'
    }
  ],
  [
    'path',
    {
      d: 'M8.44356 14.5282C10.0526 14.3279 11.3279 13.0526 11.5282 11.4436C11.5585 11.2 11.7545 11 12 11C12.2455 11 12.4415 11.2 12.4718 11.4436C12.6721 13.0526 13.9474 14.3279 15.5564 14.5282C15.8 14.5585 16 14.7545 16 15C16 15.2455 15.8 15.4415 15.5564 15.4718C13.9474 15.6721 12.6721 16.9474 12.4718 18.5564C12.4415 18.8 12.2455 19 12 19C11.7545 19 11.5585 18.8 11.5282 18.5564C11.3279 16.9474 10.0526 15.6721 8.44356 15.4718C8.19998 15.4415 8 15.2455 8 15C8 14.7545 8.19998 14.5585 8.44356 14.5282Z'
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

AiSchedulingIcon.displayName = 'AiSchedulingIcon';
export default AiSchedulingIcon;
