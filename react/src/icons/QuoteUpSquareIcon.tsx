import React from 'react';
import config from '../config';

interface QuoteUpSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name QuoteUpSquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/quote-up-square)
 * @see {@link https://clicons.dev/icon/quote-up-square}
 */
const QuoteUpSquareIcon = React.forwardRef<SVGSVGElement, QuoteUpSquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.2544 14C13.2544 14.9428 13.2544 15.4142 13.5653 15.7071C13.8761 16 14.3765 16 15.3772 16C16.3779 16 16.8782 16 17.1891 15.7071C17.5 15.4142 17.5 14.9428 17.5 14C17.5 13.0572 17.5 12.5858 17.1891 12.2929C16.8782 12 16.3779 12 15.3772 12C14.3765 12 13.8761 12 13.5653 12.2929C13.2544 12.5858 13.2544 13.0572 13.2544 14ZM13.2544 14V11.9313C13.2544 10.0978 14.5895 8.54292 16.4386 8M6.5 14C6.5 14.9428 6.5 15.4142 6.81088 15.7071C7.12176 16 7.62211 16 8.62281 16C9.62351 16 10.1239 16 10.4347 15.7071C10.7456 15.4142 10.7456 14.9428 10.7456 14C10.7456 13.0572 10.7456 12.5858 10.4347 12.2929C10.1239 12 9.62351 12 8.62281 12C7.62211 12 7.12176 12 6.81088 12.2929C6.5 12.5858 6.5 13.0572 6.5 14ZM6.5 14V11.9313C6.5 10.0978 7.83509 8.54292 9.68421 8'
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

QuoteUpSquareIcon.displayName = 'QuoteUpSquareIcon';
export default QuoteUpSquareIcon;
