import React from 'react';
import config from '../config';

interface FileShredderIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FileShredderIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/file-shredder)
 * @see {@link https://clicons.dev/icon/file-shredder}
 */
const FileShredderIcon = React.forwardRef<SVGSVGElement, FileShredderIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 12.999H2'
    }
  ],
  [
    'path',
    {
      d: 'M20 13.001V10.6578C20 9.84033 20 9.43158 19.8478 9.06404C19.6955 8.69649 19.4065 8.40746 18.8284 7.8294L14.0919 3.09286C13.593 2.59397 13.3436 2.34453 13.0345 2.19672C12.9702 2.16598 12.9044 2.1387 12.8372 2.11499C12.5141 2.00098 12.1614 2.00098 11.4558 2.00098C8.21082 2.00098 6.58831 2.00098 5.48933 2.88705C5.26731 3.06606 5.06508 3.26829 4.88607 3.49031C4 4.58928 4 6.2118 4 9.45682V13.001M13 2.50098V3.00098C13 5.8294 13 7.24362 13.8787 8.1223C14.7574 9.00098 16.1716 9.00098 19 9.00098H19.5'
    }
  ],
  [
    'path',
    {
      d: 'M6 15.999V16.999M10 15.999V21.999M14 15.999V17.999M18 15.999V19.999'
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

FileShredderIcon.displayName = 'FileShredderIcon';
export default FileShredderIcon;
