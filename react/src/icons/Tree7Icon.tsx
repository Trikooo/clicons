import React from 'react';
import config from '../config';

interface Tree7IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Tree7Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tree7)
 * @see {@link https://clicons.dev/icon/tree7}
 */
const Tree7Icon = React.forwardRef<SVGSVGElement, Tree7IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22V18'
    }
  ],
  [
    'path',
    {
      d: 'M8.59238 7.43436C9.56387 7.79137 10.7369 8 12 8C13.2631 8 14.4361 7.79137 15.4076 7.43436C16.0441 7.20048 16.1801 6.43408 15.7553 5.91561L12.8887 2.41707C12.4331 1.86098 11.5669 1.86098 11.1113 2.41707L8.24472 5.91561C7.81991 6.43408 7.95593 7.20048 8.59238 7.43436Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.7898 7.62305L17.2408 10.4446C17.674 10.9434 17.5554 11.7064 16.9511 11.9898C15.6018 12.6226 14.0495 12.9999 12 12.9999C9.95052 12.9999 8.39815 12.6226 7.04891 11.9898C6.44464 11.7064 6.326 10.9434 6.75921 10.4446L9.21022 7.62305'
    }
  ],
  [
    'path',
    {
      d: 'M7.64436 12.3418L5.26271 15.0154C4.84523 15.484 4.92927 16.2074 5.4867 16.504C7.23841 17.4362 9.51345 17.9992 12 17.9992C14.4866 17.9992 16.7616 17.4362 18.5133 16.504C19.0707 16.2074 19.1548 15.484 18.7373 15.0154L16.3556 12.3418'
    }
  ],
  [
    'path',
    {
      d: 'M10 22H14'
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

Tree7Icon.displayName = 'Tree7Icon';
export default Tree7Icon;
