import React from 'react';
import config from '../config';

interface TaskRemove2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TaskRemove2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/task-remove2)
 * @see {@link https://clicons.dev/icon/task-remove2}
 */
const TaskRemove2Icon = React.forwardRef<SVGSVGElement, TaskRemove2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.25 14V8C19.25 5.17157 19.25 3.75736 18.3713 2.87868C17.4926 2 16.0784 2 13.25 2H9.25C6.42157 2 5.00736 2 4.12868 2.87868C3.25 3.75736 3.25 5.17157 3.25 8V16C3.25 18.8284 3.25 20.2426 4.12868 21.1213C5.00736 22 6.42157 22 9.25 22H13.25'
    }
  ],
  [
    'path',
    {
      d: 'M14.75 2H7.75C7.75 3.41421 7.75 4.12132 8.18934 4.56066C8.62868 5 9.33579 5 10.75 5H11.75C13.1642 5 13.8713 5 14.3107 4.56066C14.75 4.12132 14.75 3.41421 14.75 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.25 15H11.25M7.25 11H15.25'
    }
  ],
  [
    'path',
    {
      d: 'M21.25 17L18.75 19.5M18.75 19.5L16.25 22M18.75 19.5L21.25 22M18.75 19.5L16.25 17'
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

TaskRemove2Icon.displayName = 'TaskRemove2Icon';
export default TaskRemove2Icon;
