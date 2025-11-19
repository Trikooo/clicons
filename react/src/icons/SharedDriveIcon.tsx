import React from 'react';
import config from '../config';

interface SharedDriveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SharedDriveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shared-drive)
 * @see {@link https://clicons.dev/icon/shared-drive}
 */
const SharedDriveIcon = React.forwardRef<SVGSVGElement, SharedDriveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 18H6C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22L18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 8.5C10.0523 8.5 10.5 8.05228 10.5 7.5C10.5 6.94772 10.0523 6.5 9.5 6.5M9.5 8.5C8.94772 8.5 8.5 8.05228 8.5 7.5C8.5 6.94772 8.94772 6.5 9.5 6.5M9.5 8.5V6.5M8 12.5H11M7 13.5V13C7 11.8954 7.89543 11 9 11H10C11.1046 11 12 11.8954 12 13V13.5H7Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 8.5C15.0523 8.5 15.5 8.05228 15.5 7.5C15.5 6.94772 15.0523 6.5 14.5 6.5M14.5 8.5C13.9477 8.5 13.5 8.05228 13.5 7.5C13.5 6.94772 13.9477 6.5 14.5 6.5M14.5 8.5V6.5M14.5 12.5H16M14.5 13.5H17V13C17 11.8954 16.1046 11 15 11H14.5V13.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 20V20.01'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 20V20.01'
    }
  ],
  [
    'path',
    {
      d: 'M20 20V8C20 5.17157 20 3.75736 19.1213 2.87868C18.2426 2 16.8284 2 14 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V20'
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

SharedDriveIcon.displayName = 'SharedDriveIcon';
export default SharedDriveIcon;
