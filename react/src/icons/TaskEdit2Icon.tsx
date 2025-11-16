import React from 'react';
import config from '../config';

interface TaskEdit2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TaskEdit2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/task-edit2)
 * @see {@link https://clicons.dev/icon/task-edit2}
 */
const TaskEdit2Icon = React.forwardRef<SVGSVGElement, TaskEdit2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 11.9999V7.99994C19 5.17151 19 3.7573 18.1213 2.87862C17.2426 1.99994 15.8284 1.99994 13 1.99994H9C6.17157 1.99994 4.75736 1.99994 3.87868 2.87862C3 3.7573 3 5.17151 3 7.99994V15.9999C3 18.8284 3 20.2426 3.87868 21.1213C4.75736 21.9999 6.17157 21.9999 9 21.9999H11'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 1.99994H7.5C7.5 3.41415 7.5 4.12126 7.93934 4.5606C8.37868 4.99994 9.08579 4.99994 10.5 4.99994H11.5C12.9142 4.99994 13.6213 4.99994 14.0607 4.5606C14.5 4.12126 14.5 3.41415 14.5 1.99994Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 14.9999H11M7 10.9999H15'
    }
  ],
  [
    'path',
    {
      d: 'M15.7367 21.6526L14 21.9999L14.3473 20.2633C14.4179 19.9105 14.5913 19.5866 14.8456 19.3322L18.9111 15.2668C19.2668 14.911 19.8437 14.911 20.1995 15.2668L20.7332 15.8005C21.0889 16.1563 21.0889 16.7331 20.7332 17.0889L16.6677 21.1543C16.4134 21.4087 16.0894 21.5821 15.7367 21.6526Z'
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

TaskEdit2Icon.displayName = 'TaskEdit2Icon';
export default TaskEdit2Icon;
