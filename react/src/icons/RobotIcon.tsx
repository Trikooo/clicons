import React from 'react';
import config from '../config';

interface RobotIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RobotIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/robot)
 * @see {@link https://clicons.dev/icon/robot}
 */
const RobotIcon = React.forwardRef<SVGSVGElement, RobotIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M19 22C19 18.134 15.866 15 12 15C8.13401 15 5 18.134 5 22'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 7.5H9.50998M14.49 7.5H14.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 6.66667C5.5 6.04669 5.5 5.73669 5.56815 5.48236C5.75308 4.79218 6.29218 4.25308 6.98236 4.06815C7.23669 4 7.54669 4 8.16667 4H15.8333C16.4533 4 16.7633 4 17.0176 4.06815C17.7078 4.25308 18.2469 4.79218 18.4319 5.48236C18.5 5.73669 18.5 6.04669 18.5 6.66667C18.5 7.90663 18.5 8.52661 18.3637 9.03528C17.9938 10.4156 16.9156 11.4938 15.5353 11.8637C15.0266 12 14.4066 12 13.1667 12H10.8333C9.59337 12 8.97339 12 8.46472 11.8637C7.08436 11.4938 6.00617 10.4156 5.6363 9.03528C5.5 8.52661 5.5 7.90663 5.5 6.66667Z'
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

RobotIcon.displayName = 'RobotIcon';
export default RobotIcon;
