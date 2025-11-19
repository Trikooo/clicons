import React from 'react';
import config from '../config';

interface DropboxIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DropboxIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dropbox)
 * @see {@link https://clicons.dev/icon/dropbox}
 */
const DropboxIcon = React.forwardRef<SVGSVGElement, DropboxIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 6.5L17.5 9.5L12 12.5L6.5 9.5L12 6.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 15V16.7993C6 17.8322 6.18419 18.1541 7.10557 18.6241L11.1056 20.6642C11.9834 21.1119 12.0166 21.1119 12.8944 20.6642L16.8944 18.6241C17.8158 18.1541 18 17.8322 18 16.7993V15'
    }
  ],
  [
    'path',
    {
      d: 'M14.3366 4.16039L12 6.27308L9.66338 4.16039C8.83959 3.41554 8.42769 3.04312 7.92383 3.00345C7.41998 2.96377 6.95823 3.26741 6.03473 3.87468L4.36211 4.97455C3.46519 5.56434 3.01674 5.85924 3.00045 6.29741C2.98417 6.73558 3.40941 7.06515 4.25991 7.72429L6.4348 9.40983L4.25991 11.0954C3.40942 11.7545 2.98417 12.0841 3.00045 12.5222C3.01674 12.9604 3.46519 13.2553 4.36211 13.8451L6.92973 15.5335C7.42226 15.8574 7.66853 16.0193 7.93725 15.9982C8.20597 15.977 8.42565 15.7784 8.86501 15.3811L12 12.5466L14.3366 14.6593C15.1604 15.4041 15.5723 15.7765 16.0762 15.8162C16.58 15.8559 17.0418 15.5522 17.9653 14.945L17.9653 14.945L19.6379 13.8451C20.5348 13.2553 20.9833 12.9604 20.9996 12.5222C21.0158 12.0841 20.5906 11.7545 19.7401 11.0954L17.5652 9.40983L19.7401 7.72429C20.5906 7.06515 21.0158 6.73558 20.9996 6.29741C20.9833 5.85924 20.5348 5.56434 19.6379 4.97455L17.9653 3.87468C17.0418 3.26741 16.58 2.96377 16.0762 3.00345C15.5723 3.04312 15.1604 3.41554 14.3366 4.16039Z'
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

DropboxIcon.displayName = 'DropboxIcon';
export default DropboxIcon;
