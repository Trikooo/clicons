import React from 'react';
import config from '../config';

interface ChessPawnIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChessPawnIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chess-pawn)
 * @see {@link https://clicons.dev/icon/chess-pawn}
 */
const ChessPawnIcon = React.forwardRef<SVGSVGElement, ChessPawnIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.5 10C9.5 12.6667 9 15.3333 7 18M14.5 10C14.5 12.6667 15 15.3333 17 18'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 5.42857C15.5 6.18741 15.2483 6.88867 14.8223 7.45663C14.4776 7.91614 14.134 8 13.5704 8H10.4296C9.866 8 9.52236 7.91614 9.17768 7.45663C8.75166 6.88867 8.5 6.18741 8.5 5.42857C8.5 3.53502 10.067 2 12 2C13.933 2 15.5 3.53502 15.5 5.42857Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 10H16'
    }
  ],
  [
    'path',
    {
      d: 'M4.2049 20.6489L4.22572 20.5955C5.06668 18.4398 5.72681 18 8.12187 18H15.8781C18.2732 18 18.9333 18.4398 19.7743 20.5955L19.7951 20.6489C20.2188 21.735 20.0278 22 18.8211 22H5.17893C3.9722 22 3.78118 21.735 4.2049 20.6489Z'
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

ChessPawnIcon.displayName = 'ChessPawnIcon';
export default ChessPawnIcon;
