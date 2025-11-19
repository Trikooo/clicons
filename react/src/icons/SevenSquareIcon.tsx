import React from 'react';
import config from '../config';

interface SevenSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SevenSquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/seven-square)
 * @see {@link https://clicons.dev/icon/seven-square}
 */
const SevenSquareIcon = React.forwardRef<SVGSVGElement, SevenSquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.99707 12C2.99707 7.52166 2.99707 5.28249 4.38831 3.89124C5.77956 2.5 8.01873 2.5 12.4971 2.5C16.9754 2.5 19.2146 2.5 20.6058 3.89124C21.9971 5.28249 21.9971 7.52166 21.9971 12C21.9971 16.4783 21.9971 18.7175 20.6058 20.1088C19.2146 21.5 16.9754 21.5 12.4971 21.5C8.01873 21.5 5.77956 21.5 4.38831 20.1088C2.99707 18.7175 2.99707 16.4783 2.99707 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.49707 7H15.0811C15.3108 7 15.4971 7.18625 15.4971 7.41599C15.4971 7.47144 15.486 7.52632 15.4645 7.57742L11.4971 17'
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

SevenSquareIcon.displayName = 'SevenSquareIcon';
export default SevenSquareIcon;
