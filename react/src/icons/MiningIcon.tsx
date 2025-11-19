import React from 'react';
import config from '../config';

interface MiningIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MiningIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mining)
 * @see {@link https://clicons.dev/icon/mining}
 */
const MiningIcon = React.forwardRef<SVGSVGElement, MiningIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.99991 17C6.89534 17 5.99991 17.8954 5.99991 19C5.99991 20.1046 6.89534 21 7.99991 21C9.10448 21 9.99991 20.1046 9.99991 19C9.99991 17.8954 9.10448 17 7.99991 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.8739 8C12.9562 7.68038 12.9999 7.3453 12.9999 7C12.9999 4.79086 11.209 3 8.99991 3C6.79077 3 4.99991 4.79086 4.99991 7C4.99991 7.3453 5.04366 7.68038 5.12593 8'
    }
  ],
  [
    'path',
    {
      d: 'M14.751 3.00765C14.8334 3.00257 14.9166 3 15.0003 3C17.2095 3 19.0003 4.79086 19.0003 7C19.0003 7.3453 18.9566 7.68038 18.8743 8'
    }
  ],
  [
    'path',
    {
      d: 'M15.9999 17C14.8953 17 13.9999 17.8954 13.9999 19C13.9999 20.1046 14.8953 21 15.9999 21C17.1045 21 17.9999 20.1046 17.9999 19C17.9999 17.8954 17.1045 17 15.9999 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 19H10M18 19C18.2471 19 18.4484 19.0074 18.5551 19C19.9616 18.9022 21.1151 17.8548 21.3411 16.4809C21.3583 16.3767 21.3695 16.2552 21.3918 16.0123L21.9288 10.1811C22.0227 9.16124 22.0697 8.65132 21.7684 8.32566C21.4672 8 20.9485 8 19.9112 8H4.08879C3.05147 8 2.53281 8 2.23155 8.32566C1.9303 8.65132 1.97726 9.16124 2.07117 10.1811L2.60816 16.0123C2.63053 16.2552 2.64171 16.3767 2.65885 16.4809C2.88486 17.8548 4.11626 18.8948 5.52272 18.9926C5.62936 19 5.75291 19 6 19'
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

MiningIcon.displayName = 'MiningIcon';
export default MiningIcon;
