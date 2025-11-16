import React from 'react';
import config from '../config';

interface CatalogueIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CatalogueIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/catalogue)
 * @see {@link https://clicons.dev/icon/catalogue}
 */
const CatalogueIcon = React.forwardRef<SVGSVGElement, CatalogueIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 17.5V7.5H7.5001C5.1431 7.5 3.9646 7.5 3.23237 8.23222C2.50013 8.96445 2.50012 10.1429 2.5001 12.5L2.50006 16.5C2.50004 18.857 2.50003 20.0355 3.23226 20.7678C3.9645 21.5 5.14302 21.5 7.50006 21.5H10.5C12.3856 21.5 13.3284 21.5 13.9142 20.9142C14.5 20.3284 14.5 19.3856 14.5 17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.4999 16.5H16.4999C18.8569 16.5 20.0355 16.5 20.7677 15.7678C21.4999 15.0355 21.4999 13.857 21.4999 11.5V7.5C21.4999 5.14298 21.4999 3.96447 20.7677 3.23223C20.0355 2.5 18.8569 2.5 16.4999 2.5H9.50006L9.5002 7.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.50006 12.5H9.00006M5.50006 16.5H11.5001'
    }
  ],
  [
    'path',
    {
      d: 'M9.50006 2.5L14.5001 7.5'
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

CatalogueIcon.displayName = 'CatalogueIcon';
export default CatalogueIcon;
