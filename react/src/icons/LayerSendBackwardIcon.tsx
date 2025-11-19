import React from 'react';
import config from '../config';

interface LayerSendBackwardIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LayerSendBackwardIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/layer-send-backward)
 * @see {@link https://clicons.dev/icon/layer-send-backward}
 */
const LayerSendBackwardIcon = React.forwardRef<SVGSVGElement, LayerSendBackwardIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.8899 12.5L19.2873 10.9394C21.0958 10.1086 22 9.69326 22 9C22 8.30674 21.0958 7.89137 19.2873 7.06064L14.3943 4.81298C13.2144 4.27099 12.6245 4 12 4C11.3755 4 10.7856 4.27099 9.60573 4.81298L4.7127 7.06064C2.90423 7.89137 2 8.30674 2 9C2 9.69326 2.90423 10.1086 4.7127 10.9394L8.11012 12.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 19.5V9M15 17C14.4102 17.6068 12.8403 20 12 20C11.1597 20 9.58984 17.6068 9 17'
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

LayerSendBackwardIcon.displayName = 'LayerSendBackwardIcon';
export default LayerSendBackwardIcon;
