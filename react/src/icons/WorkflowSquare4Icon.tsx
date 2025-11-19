import React from 'react';
import config from '../config';

interface WorkflowSquare4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WorkflowSquare4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/workflow-square4)
 * @see {@link https://clicons.dev/icon/workflow-square4}
 */
const WorkflowSquare4Icon = React.forwardRef<SVGSVGElement, WorkflowSquare4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 18C15 16.5858 15 15.8787 15.4393 15.4393C15.8787 15 16.5858 15 18 15C19.4142 15 20.1213 15 20.5607 15.4393C21 15.8787 21 16.5858 21 18C21 19.4142 21 20.1213 20.5607 20.5607C20.1213 21 19.4142 21 18 21C16.5858 21 15.8787 21 15.4393 20.5607C15 20.1213 15 19.4142 15 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 9C3 7.58579 3 6.87868 3.43934 6.43934C3.87868 6 4.58579 6 6 6C7.41421 6 8.12132 6 8.56066 6.43934C9 6.87868 9 7.58579 9 9C9 10.4142 9 11.1213 8.56066 11.5607C8.12132 12 7.41421 12 6 12C4.58579 12 3.87868 12 3.43934 11.5607C3 11.1213 3 10.4142 3 9Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 9H12C14.8284 9 16.2426 9 17.1213 9.87868C18 10.7574 18 12.1716 18 15'
    }
  ],
  [
    'path',
    {
      d: 'M6 12V22M6 6V2'
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

WorkflowSquare4Icon.displayName = 'WorkflowSquare4Icon';
export default WorkflowSquare4Icon;
