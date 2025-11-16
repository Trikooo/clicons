import React from 'react';
import config from '../config';

interface WorkflowSquare9IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WorkflowSquare9Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/workflow-square9)
 * @see {@link https://clicons.dev/icon/workflow-square9}
 */
const WorkflowSquare9Icon = React.forwardRef<SVGSVGElement, WorkflowSquare9IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 19C3 20.4142 3 21.1213 3.43934 21.5607C3.87868 22 4.58579 22 6 22C7.41421 22 8.12132 22 8.56066 21.5607C9 21.1213 9 20.4142 9 19C9 17.5858 9 16.8787 8.56066 16.4393C8.12132 16 7.41421 16 6 16C4.58579 16 3.87868 16 3.43934 16.4393C3 16.8787 3 17.5858 3 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 5C3 6.41421 3 7.12132 3.43934 7.56066C3.87868 8 4.58579 8 6 8C7.41421 8 8.12132 8 8.56066 7.56066C9 7.12132 9 6.41421 9 5C9 3.58579 9 2.87868 8.56066 2.43934C8.12132 2 7.41421 2 6 2C4.58579 2 3.87868 2 3.43934 2.43934C3 2.87868 3 3.58579 3 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 5C15 6.41421 15 7.12132 15.4393 7.56066C15.8787 8 16.5858 8 18 8C19.4142 8 20.1213 8 20.5607 7.56066C21 7.12132 21 6.41421 21 5C21 3.58579 21 2.87868 20.5607 2.43934C20.1213 2 19.4142 2 18 2C16.5858 2 15.8787 2 15.4393 2.43934C15 2.87868 15 3.58579 15 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 8V16'
    }
  ],
  [
    'path',
    {
      d: 'M6 12H14C15.8856 12 16.8284 12 17.4142 11.4142C18 10.8284 18 9.88562 18 8'
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

WorkflowSquare9Icon.displayName = 'WorkflowSquare9Icon';
export default WorkflowSquare9Icon;
