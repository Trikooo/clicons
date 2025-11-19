import React from 'react';
import config from '../config';

interface ThreeDMoveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ThreeDMoveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/three-d-move)
 * @see {@link https://clicons.dev/icon/three-d-move}
 */
const ThreeDMoveIcon = React.forwardRef<SVGSVGElement, ThreeDMoveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 14L17.5 18.5M12 14L6.5 18.5M12 14V7'
    }
  ],
  [
    'path',
    {
      d: 'M10.3914 3.69046C11.1054 2.56349 11.4624 2 12 2C12.5376 2 12.8946 2.56349 13.6086 3.69046L14.1215 4.49995C14.8259 5.6118 15.1781 6.16772 14.9104 6.58386C14.6426 7 13.9327 7 12.5129 7H11.4871C10.0673 7 9.35739 7 9.08963 6.58386C8.82188 6.16772 9.17409 5.6118 9.87852 4.49995L10.3914 3.69046Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.2324 19.1408C21.8559 20.3502 22.1676 20.9548 21.9085 21.4249C21.6494 21.8949 20.9936 21.9144 19.6819 21.9536L18.7398 21.9817C17.4457 22.0203 16.7987 22.0396 16.5705 21.5895C16.3422 21.1393 16.6843 20.5186 17.3686 19.2773L17.8629 18.3805C18.5471 17.1391 18.8893 16.5184 19.3756 16.5004C19.8619 16.4824 20.1694 17.0789 20.7846 18.2721L21.2324 19.1408Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.76761 19.1408C2.14414 20.3502 1.8324 20.9548 2.09148 21.4249C2.35055 21.8949 3.00639 21.9144 4.31805 21.9536L5.26021 21.9817C6.55427 22.0203 7.20131 22.0396 7.42955 21.5895C7.65779 21.1393 7.31567 20.5186 6.63143 19.2773L6.13711 18.3805C5.45286 17.1391 5.11074 16.5184 4.62443 16.5004C4.13811 16.4824 3.83055 17.0789 3.21545 18.2721L2.76761 19.1408Z'
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

ThreeDMoveIcon.displayName = 'ThreeDMoveIcon';
export default ThreeDMoveIcon;
