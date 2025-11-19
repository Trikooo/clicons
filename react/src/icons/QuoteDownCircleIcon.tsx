import React from 'react';
import config from '../config';

interface QuoteDownCircleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name QuoteDownCircleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/quote-down-circle)
 * @see {@link https://clicons.dev/icon/quote-down-circle}
 */
const QuoteDownCircleIcon = React.forwardRef<SVGSVGElement, QuoteDownCircleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '10'
    }
  ],
  [
    'path',
    {
      d: 'M10.7456 10C10.7456 9.05719 10.7456 8.58579 10.4347 8.29289C10.1239 8 9.62351 8 8.62281 8C7.62211 8 7.12176 8 6.81088 8.29289C6.5 8.58579 6.5 9.05719 6.5 10C6.5 10.9428 6.5 11.4142 6.81088 11.7071C7.12176 12 7.62211 12 8.62281 12C9.62351 12 10.1239 12 10.4347 11.7071C10.7456 11.4142 10.7456 10.9428 10.7456 10ZM10.7456 10L10.7456 12.0687C10.7456 13.9022 9.41052 15.4571 7.5614 16M17.5 10C17.5 9.05719 17.5 8.58579 17.1891 8.29289C16.8782 8 16.3779 8 15.3772 8C14.3765 8 13.8761 8 13.5653 8.29289C13.2544 8.58579 13.2544 9.05719 13.2544 10C13.2544 10.9428 13.2544 11.4142 13.5653 11.7071C13.8761 12 14.3765 12 15.3772 12C16.3779 12 16.8782 12 17.1891 11.7071C17.5 11.4142 17.5 10.9428 17.5 10ZM17.5 10V12.0687C17.5 13.9022 16.1649 15.4571 14.3158 16'
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

QuoteDownCircleIcon.displayName = 'QuoteDownCircleIcon';
export default QuoteDownCircleIcon;
