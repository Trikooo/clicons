import React from 'react';
import config from '../config';

interface DocIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DocIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/doc)
 * @see {@link https://clicons.dev/icon/doc}
 */
const DocIcon = React.forwardRef<SVGSVGElement, DocIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 13V10.6569C20 9.83935 20 9.4306 19.8478 9.06306C19.6955 8.69552 19.4065 8.40649 18.8284 7.82843L14.0919 3.09188C13.593 2.593 13.3436 2.34355 13.0345 2.19575C12.9702 2.165 12.9044 2.13772 12.8372 2.11401C12.5141 2 12.1614 2 11.4558 2C8.21082 2 6.58831 2 5.48933 2.88607C5.26731 3.06508 5.06508 3.26731 4.88607 3.48933C4 4.58831 4 6.21082 4 9.45584V13M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5'
    }
  ],
  [
    'path',
    {
      d: 'M20.5007 17.2196C20.4486 16.0292 19.674 16 18.6231 16C17.0044 16 16.736 16.406 16.736 18V20C16.736 21.594 17.0044 22 18.6231 22C19.674 22 20.4486 21.9708 20.5007 20.7804M7.26568 19C7.26568 20.6569 6.00155 22 4.44215 22C4.0903 22 3.91437 22 3.78333 21.9196C3.46959 21.7272 3.50098 21.3376 3.50098 21V17C3.50098 16.6624 3.46959 16.2728 3.78333 16.0804C3.91437 16 4.0903 16 4.44215 16C6.00155 16 7.26568 17.3431 7.26568 19ZM12.0007 22C11.1134 22 10.6697 22 10.394 21.7071C10.1184 21.4142 10.1184 20.9428 10.1184 20V18C10.1184 17.0572 10.1184 16.5858 10.394 16.2929C10.6697 16 11.1134 16 12.0007 16C12.8881 16 13.3318 16 13.6074 16.2929C13.8831 16.5858 13.8831 17.0572 13.8831 18V20C13.8831 20.9428 13.8831 21.4142 13.6074 21.7071C13.3318 22 12.8881 22 12.0007 22Z'
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

DocIcon.displayName = 'DocIcon';
export default DocIcon;
