import React from 'react';
import config from '../config';

interface Hold2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Hold2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hold2)
 * @see {@link https://clicons.dev/icon/hold2}
 */
const Hold2Icon = React.forwardRef<SVGSVGElement, Hold2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.77076 11.4992V5.99332C7.77076 5.16776 8.43798 4.49851 9.26103 4.49851C10.0841 4.49851 10.7513 5.16776 10.7513 5.99331V7.97375M7.77076 6.88925L4.99868 9.83609C4.08196 10.8238 3.99762 12.3267 4.79803 13.4114L7.93002 17.6557C8.20528 18.0287 8.34271 18.486 8.31879 18.9495V20M10.7465 5.87249L10.7489 5.50475C10.7489 4.6737 11.4205 4 12.2491 4C13.0776 4 13.7492 4.6737 13.7492 5.50475V8.37515M13.7493 6.49884C13.7493 5.66779 14.4209 4.99409 15.2494 4.99409C16.078 4.99409 16.7496 5.66779 16.7496 6.49884V8.99541M16.7496 7.51953C16.7496 6.68848 17.4213 6.01478 18.2498 6.01478C19.0783 6.01478 19.75 6.68848 19.75 7.51953V13.5259C19.75 14.5115 19.593 16.0996 18.4386 17.4021C18.0233 17.8707 17.7095 18.4439 17.7095 19.0709V20'
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

Hold2Icon.displayName = 'Hold2Icon';
export default Hold2Icon;
