import React from 'react';
import config from '../config';

interface DeleteColumnIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DeleteColumnIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/delete-column)
 * @see {@link https://clicons.dev/icon/delete-column}
 */
const DeleteColumnIcon = React.forwardRef<SVGSVGElement, DeleteColumnIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.187 5.99805C20.9854 5.10929 20.6539 4.43424 20.1089 3.88929C18.7177 2.49805 16.4785 2.49805 12.0002 2.49805C7.52184 2.49805 5.28267 2.49805 3.89143 3.88929C2.50018 5.28053 2.50018 7.5197 2.50018 11.998C2.50018 16.4764 2.50018 18.7156 3.89143 20.1068C5.28267 21.498 7.52184 21.498 12.0002 21.498C16.4785 21.498 18.7177 21.498 20.1089 20.1068C20.6539 19.5619 20.9854 18.8868 21.187 17.998'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 15L18.5 12M18.5 12L15.5 9M18.5 12L15.5 15M18.5 12L21.5 9'
    }
  ],
  [
    'path',
    {
      d: 'M9 21.5L9 2.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 15.5L9 15.5M2.5 8.5L9 8.5'
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

DeleteColumnIcon.displayName = 'DeleteColumnIcon';
export default DeleteColumnIcon;
