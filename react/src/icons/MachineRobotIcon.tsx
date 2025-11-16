import React from 'react';
import config from '../config';

interface MachineRobotIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MachineRobotIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/machine-robot)
 * @see {@link https://clicons.dev/icon/machine-robot}
 */
const MachineRobotIcon = React.forwardRef<SVGSVGElement, MachineRobotIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 13V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V13C7 14.8692 7 15.8038 7.40192 16.5C7.66523 16.9561 8.04394 17.3348 8.5 17.5981C9.19615 18 10.1308 18 12 18C13.8692 18 14.8038 18 15.5 17.5981C15.9561 17.3348 16.3348 16.9561 16.5981 16.5C17 15.8038 17 14.8692 17 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21'
    }
  ],
  [
    'path',
    {
      d: 'M2 21C2 19.8954 2.89543 19 4 19C5.10457 19 6 19.8954 6 21'
    }
  ],
  [
    'path',
    {
      d: 'M13.992 7.5H14.001'
    }
  ],
  [
    'path',
    {
      d: 'M10 7.5H10.009'
    }
  ],
  [
    'path',
    {
      d: 'M20 19V15C20 13.1144 20 12.1716 19.4142 11.5858C18.8284 11 17.8856 11 16 11H8C6.11438 11 5.17157 11 4.58579 11.5858C4 12.1716 4 13.1144 4 15V19'
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

MachineRobotIcon.displayName = 'MachineRobotIcon';
export default MachineRobotIcon;
