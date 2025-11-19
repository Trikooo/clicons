import React from 'react';
import config from '../config';

interface GameIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GameIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/game)
 * @see {@link https://clicons.dev/icon/game}
 */
const GameIcon = React.forwardRef<SVGSVGElement, GameIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 14.5C2 11.2125 2 9.56878 2.90796 8.46243C3.07418 8.25989 3.25989 8.07418 3.46243 7.90796C4.56878 7 6.21252 7 9.5 7H14.5C17.7875 7 19.4312 7 20.5376 7.90796C20.7401 8.07418 20.9258 8.25989 21.092 8.46243C22 9.56878 22 11.2125 22 14.5C22 17.7875 22 19.4312 21.092 20.5376C20.9258 20.7401 20.7401 20.9258 20.5376 21.092C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.092C3.25989 20.9258 3.07418 20.7401 2.90796 20.5376C2 19.4312 2 17.7875 2 14.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 7V5C12 4.44772 12.4477 4 13 4C13.5523 4 14 3.55228 14 3V2'
    }
  ],
  [
    'path',
    {
      d: 'M10 16L8.5 14.5M8.5 14.5L7 13M8.5 14.5L7 16M8.5 14.5L10 13'
    }
  ],
  [
    'path',
    {
      d: 'M17 15.5L17 13.5'
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

GameIcon.displayName = 'GameIcon';
export default GameIcon;
