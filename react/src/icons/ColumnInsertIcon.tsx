import React from 'react';
import config from '../config';

interface ColumnInsertIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ColumnInsertIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/column-insert)
 * @see {@link https://clicons.dev/icon/column-insert}
 */
const ColumnInsertIcon = React.forwardRef<SVGSVGElement, ColumnInsertIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5 7C18.9045 7 19.6067 7 20.1111 7.33706C20.3295 7.48298 20.517 7.67048 20.6629 7.88886C21 8.39331 21 9.09554 21 10.5L21 18.5C21 19.9045 21 20.6067 20.6629 21.1111C20.517 21.3295 20.3295 21.517 20.1111 21.6629C19.6067 22 18.9045 22 17.5 22C16.0955 22 15.3933 22 14.8889 21.6629C14.6705 21.517 14.483 21.3295 14.3371 21.1111C14 20.6067 14 19.9045 14 18.5L14 10.5C14 9.09554 14 8.39331 14.3371 7.88886C14.483 7.67048 14.6705 7.48298 14.8889 7.33706C15.3933 7 16.0955 7 17.5 7Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 7C7.90446 7 8.60669 7 9.11114 7.33706C9.32952 7.48298 9.51702 7.67048 9.66294 7.88886C10 8.39331 10 9.09554 10 10.5L10 18.5C10 19.9045 10 20.6067 9.66294 21.1111C9.51702 21.3295 9.32952 21.517 9.11114 21.6629C8.60669 22 7.90446 22 6.5 22C5.09554 22 4.39331 22 3.88886 21.6629C3.67048 21.517 3.48298 21.3295 3.33706 21.1111C3 20.6067 3 19.9045 3 18.5L3 10.5C3 9.09554 3 8.39331 3.33706 7.88886C3.48298 7.67048 3.67048 7.48298 3.88886 7.33706C4.39331 7 5.09554 7 6.5 7Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 2L13.4142 3.53318C12.7475 4.17772 12.4142 4.5 12 4.5C11.5858 4.5 11.2525 4.17773 10.5858 3.53318L9 2'
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

ColumnInsertIcon.displayName = 'ColumnInsertIcon';
export default ColumnInsertIcon;
