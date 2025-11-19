import React from 'react';
import config from '../config';

interface SwipeLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeLeftIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-left)
 * @see {@link https://clicons.dev/icon/swipe-left}
 */
const SwipeLeftIcon = React.forwardRef<SVGSVGElement, SwipeLeftIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.0039 4.49902H21.0029M15.0039 4.49902C15.0039 3.79906 16.9979 2.49134 17.5035 2M15.0039 4.49902C15.0039 5.19898 16.9979 6.5067 17.5035 6.99804'
    }
  ],
  [
    'path',
    {
      d: 'M16.8899 21.9882C16.8382 20.0749 16.9671 19.8446 17.1038 19.419C17.2405 18.9933 18.1967 17.4585 18.535 16.3619C19.6295 12.814 18.6094 12.0594 17.2493 11.0533C15.741 9.93751 12.8962 9.37244 11.4853 9.49477V3.74357C11.4853 2.78062 10.7045 2 9.74133 2C8.77816 2 7.99736 2.78062 7.99736 3.74357V14.0031L5.93753 11.8236C5.29802 11.1302 4.27027 11.0599 3.56885 11.6907C2.90415 12.2885 2.80714 13.2952 3.34548 14.0089L4.63762 15.7218M7.86803 22L7.8485 20.9496C7.89144 19.7183 6.99559 18.9149 5.8272 17.3087C5.74302 17.193 5.66111 17.0811 5.58135 16.9729M5.58135 16.9729C5.22735 16.4924 4.91587 16.0831 4.63762 15.7218M5.58135 16.9729L6.75058 18.5229M5.58135 16.9729L4.63762 15.7218M4.63762 15.7218C4.06634 14.9801 3.63509 14.441 3.26331 13.9055'
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

SwipeLeftIcon.displayName = 'SwipeLeftIcon';
export default SwipeLeftIcon;
