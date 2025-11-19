import React from 'react';
import config from '../config';

interface GameControllerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GameControllerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/game-controller)
 * @see {@link https://clicons.dev/icon/game-controller}
 */
const GameControllerIcon = React.forwardRef<SVGSVGElement, GameControllerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 13H13'
    }
  ],
  [
    'path',
    {
      d: 'M12 9V3'
    }
  ],
  [
    'path',
    {
      d: 'M20.1526 20.9174C22.0143 20.3289 22.5597 16.7547 21.3708 12.9344C20.1819 9.11398 17.709 6.49405 15.8474 7.08259C14.6972 7.44619 14.6438 8.86174 13.6968 9.378C13.473 9.5 13.1595 9.5 12.5324 9.5H11.4676C10.8405 9.5 10.527 9.5 10.3032 9.378C9.35625 8.86174 9.30278 7.44619 8.15264 7.08259C6.29102 6.49405 3.8181 9.11398 2.62922 12.9344C1.44035 16.7547 1.98573 20.3289 3.84736 20.9174C5.20631 21.347 6.891 20.067 8.16417 17.8583C9.01333 16.3851 9.39787 16 11.1039 16H12.8961C14.6021 16 14.9867 16.3851 15.8358 17.8583C17.109 20.067 18.7937 21.347 20.1526 20.9174Z'
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

GameControllerIcon.displayName = 'GameControllerIcon';
export default GameControllerIcon;
