import React from 'react';
import config from '../config';

interface WorkflowCircle2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WorkflowCircle2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/workflow-circle2)
 * @see {@link https://clicons.dev/icon/workflow-circle2}
 */
const WorkflowCircle2Icon = React.forwardRef<SVGSVGElement, WorkflowCircle2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 19.5C21 20.8807 19.8807 22 18.5 22C17.1193 22 16 20.8807 16 19.5C16 18.1193 17.1193 17 18.5 17C19.8807 17 21 18.1193 21 19.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 9.5C21 10.8807 19.8807 12 18.5 12C17.1193 12 16 10.8807 16 9.5C16 8.11929 17.1193 7 18.5 7C19.8807 7 21 8.11929 21 9.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 14.5C8 15.8807 6.88071 17 5.5 17C4.11929 17 3 15.8807 3 14.5C3 13.1193 4.11929 12 5.5 12C6.88071 12 8 13.1193 8 14.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 4.5C8 5.88071 6.88071 7 5.5 7C4.11929 7 3 5.88071 3 4.5C3 3.11929 4.11929 2 5.5 2C6.88071 2 8 3.11929 8 4.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 4.5L15.5 9.5L8.5 14.5L16 19.5'
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

WorkflowCircle2Icon.displayName = 'WorkflowCircle2Icon';
export default WorkflowCircle2Icon;
