import React from 'react';
import config from '../config';

interface JpgIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name JpgIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/jpg)
 * @see {@link https://clicons.dev/icon/jpg}
 */
const JpgIcon = React.forwardRef<SVGSVGElement, JpgIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 12.9999V10.6567C20 9.83923 20 9.43048 19.8478 9.06294C19.6955 8.6954 19.4065 8.40637 18.8284 7.82831L14.0919 3.09176C13.593 2.59287 13.3436 2.34343 13.0345 2.19562C12.9702 2.16488 12.9044 2.1376 12.8372 2.11389C12.5141 1.99988 12.1614 1.99988 11.4558 1.99988C8.21082 1.99988 6.58831 1.99988 5.48933 2.88595C5.26731 3.06496 5.06508 3.26719 4.88607 3.48921C4 4.58818 4 6.2107 4 9.45572V12.9999M13 2.49988V2.99988C13 5.82831 13 7.24252 13.8787 8.1212C14.7574 8.99988 16.1716 8.99988 19 8.99988H19.5'
    }
  ],
  [
    'path',
    {
      d: 'M20 16.9999C20 16.4476 19.5523 15.9999 19 15.9999H17C16.4477 15.9999 16 16.4476 16 16.9999V20.9999C16 21.5522 16.4477 21.9999 17 21.9999H19C19.5523 21.9999 20 21.5522 20 20.9999V19.4999H18.6667M4 19.9999V20.2499C4 21.2164 4.7835 21.9999 5.75 21.9999C6.7165 21.9999 7.5 21.2164 7.5 20.2499V15.9999M10 21.9999V18.9999M10 18.9999V16.9999C10 16.4476 10.4477 15.9999 11 15.9999H12C12.8284 15.9999 13.5 16.6715 13.5 17.4999C13.5 18.3283 12.8284 18.9999 12 18.9999H10Z'
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

JpgIcon.displayName = 'JpgIcon';
export default JpgIcon;
