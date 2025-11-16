import React from 'react';
import config from '../config';

interface LayerBringToFrontIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LayerBringToFrontIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/layer-bring-to-front)
 * @see {@link https://clicons.dev/icon/layer-bring-to-front}
 */
const LayerBringToFrontIcon = React.forwardRef<SVGSVGElement, LayerBringToFrontIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.9784 8L19.2873 9.06064C21.0958 9.89137 22 10.3067 22 11C22 11.6933 21.0958 12.1086 19.2873 12.9394L14.3943 15.187C13.2144 15.729 12.6245 16 12 16C11.3755 16 10.7856 15.729 9.60573 15.187L4.7127 12.9394C2.90423 12.1086 2 11.6933 2 11C2 10.3067 2.90423 9.89137 4.7127 9.06064L7.02165 8'
    }
  ],
  [
    'path',
    {
      d: 'M12 2.5V10M15 5C14.4102 4.39316 12.8403 2 12 2C11.1597 2 9.58984 4.39316 9 5'
    }
  ],
  [
    'path',
    {
      d: 'M20.2327 15.5C21.4109 16.062 22 16.4405 22 17.0001C22 17.6934 21.0958 18.1087 19.2873 18.9395L14.3943 21.1871C13.2144 21.7291 12.6245 22.0001 12 22.0001C11.3755 22.0001 10.7856 21.7291 9.60573 21.1871L4.7127 18.9395C2.90423 18.1087 2 17.6934 2 17.0001C2 16.4405 2.58909 16.062 3.76727 15.5'
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

LayerBringToFrontIcon.displayName = 'LayerBringToFrontIcon';
export default LayerBringToFrontIcon;
