import React from 'react';
import config from '../config';

interface FileRemoveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FileRemoveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/file-remove)
 * @see {@link https://clicons.dev/icon/file-remove}
 */
const FileRemoveIcon = React.forwardRef<SVGSVGElement, FileRemoveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 11.9949L4 14.5404C4 17.7871 4 19.4104 4.88607 20.5099C5.06508 20.732 5.26731 20.9344 5.48933 21.1135C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.8859C12.9044 21.8622 12.9702 21.8349 13.0345 21.8042C13.3436 21.6563 13.593 21.4067 14.0919 20.9076L18.8284 16.1686C19.4065 15.5903 19.6955 15.3011 19.8478 14.9334C20 14.5656 20 14.1567 20 13.3388V9.99394C20 6.2208 20 4.33423 18.8284 3.16206C17.8971 2.23022 16.5144 2.03917 14.0919 2M13 21.4997V20.9995C13 18.1696 13 16.7547 13.8787 15.8756C14.7574 14.9965 16.1716 14.9965 19 14.9965H19.5'
    }
  ],
  [
    'path',
    {
      d: 'M11 9L4 2M11 2L4 9'
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

FileRemoveIcon.displayName = 'FileRemoveIcon';
export default FileRemoveIcon;
