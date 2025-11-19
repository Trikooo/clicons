import React from 'react';
import config from '../config';

interface TetrisIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TetrisIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tetris)
 * @see {@link https://clicons.dev/icon/tetris}
 */
const TetrisIcon = React.forwardRef<SVGSVGElement, TetrisIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 5C7 4.05719 7 3.58579 7.29289 3.29289C7.58579 3 8.05719 3 9 3C9.94281 3 10.4142 3 10.7071 3.29289C11 3.58579 11 4.05719 11 5V9C11 9.94281 11 10.4142 10.7071 10.7071C10.4142 11 9.94281 11 9 11C8.05719 11 7.58579 11 7.29289 10.7071C7 10.4142 7 9.94281 7 9V5Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 15C13 14.0572 13 13.5858 13.2929 13.2929C13.5858 13 14.0572 13 15 13C15.9428 13 16.4142 13 16.7071 13.2929C17 13.5858 17 14.0572 17 15C17 15.9428 17 16.4142 16.7071 16.7071C16.4142 17 15.9428 17 15 17C14.0572 17 13.5858 17 13.2929 16.7071C13 16.4142 13 15.9428 13 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 19C9 18.0572 9 17.5858 9.29289 17.2929C9.58579 17 10.0572 17 11 17H19C19.9428 17 20.4142 17 20.7071 17.2929C21 17.5858 21 18.0572 21 19C21 19.9428 21 20.4142 20.7071 20.7071C20.4142 21 19.9428 21 19 21H11C10.0572 21 9.58579 21 9.29289 20.7071C9 20.4142 9 19.9428 9 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 9C3 8.05719 3 7.58579 3.29289 7.29289C3.58579 7 4.05719 7 5 7C5.94281 7 6.41421 7 6.70711 7.29289C7 7.58579 7 8.05719 7 9V13C7 13.9428 7 14.4142 6.70711 14.7071C6.41421 15 5.94281 15 5 15C4.05719 15 3.58579 15 3.29289 14.7071C3 14.4142 3 13.9428 3 13V9Z'
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

TetrisIcon.displayName = 'TetrisIcon';
export default TetrisIcon;
