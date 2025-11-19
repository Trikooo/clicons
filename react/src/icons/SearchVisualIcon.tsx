import React from 'react';
import config from '../config';

interface SearchVisualIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SearchVisualIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/search-visual)
 * @see {@link https://clicons.dev/icon/search-visual}
 */
const SearchVisualIcon = React.forwardRef<SVGSVGElement, SearchVisualIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.5 15.0001L17.5 17.0001M16.5 11.5001C16.5 9.01483 14.4853 7.00011 12 7.00011C9.51472 7.00011 7.5 9.01483 7.5 11.5001C7.5 13.9854 9.51472 16.0001 12 16.0001C14.4853 16.0001 16.5 13.9854 16.5 11.5001Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 21.5001C16.8623 21.5001 17.7935 21.5001 18.5391 21.2287C19.789 20.7738 20.7737 19.7891 21.2286 18.5392C21.5 17.7936 21.5 16.8624 21.5 15.0001M9 21.5001C7.13769 21.5001 6.20653 21.5001 5.46091 21.2287C4.21096 20.7738 3.22633 19.7891 2.77138 18.5392C2.5 17.7936 2.5 16.8624 2.5 15.0001M9 2.50011C7.13769 2.50011 6.20653 2.50011 5.46091 2.77149C4.21096 3.22643 3.22633 4.21107 2.77138 5.46102C2.5 6.20664 2.5 7.13779 2.5 9.00011M15 2.50011C16.8623 2.50011 17.7935 2.50011 18.5391 2.77149C19.789 3.22643 20.7737 4.21107 21.2286 5.46102C21.5 6.20664 21.5 7.13779 21.5 9.00011'
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

SearchVisualIcon.displayName = 'SearchVisualIcon';
export default SearchVisualIcon;
