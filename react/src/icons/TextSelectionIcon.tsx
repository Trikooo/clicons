import React from 'react';
import config from '../config';

interface TextSelectionIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TextSelectionIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/text-selection)
 * @see {@link https://clicons.dev/icon/text-selection}
 */
const TextSelectionIcon = React.forwardRef<SVGSVGElement, TextSelectionIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.99792 3.02212C5.19555 2.97 6.26962 2.90514 6.99792 4.51533M6.99792 4.51533C7.55517 3.2634 8.38712 2.90727 10.9979 3.02212M6.99792 4.51533V18.9497M6.99792 18.9497C7.22891 20.6878 8.13357 21.1034 10.9979 20.9406M6.99792 18.9497C6.6944 20.7313 5.77226 21.1738 2.99792 20.9406M3.99792 11.9814H9.99792'
    }
  ],
  [
    'path',
    {
      d: 'M20.9698 15.9631V20.4428M20.9698 15.9631C21.017 15.1437 21.0187 14.5196 20.92 14.0101C20.6874 12.8091 19.4287 12.0854 18.2108 11.9382C17.0451 11.7973 16.1094 12.0965 15.1629 13.4715M20.9698 15.9631L18.1305 15.9631C17.6943 15.9631 17.2543 15.9841 16.834 16.1006C14.2653 16.8125 14.4536 20.404 17.0299 20.8467C17.316 20.8959 17.6082 20.9169 17.8979 20.904C18.5745 20.8739 19.1988 20.5481 19.7345 20.135C20.3621 19.6511 20.9698 18.9757 20.9698 17.9541V15.9631Z'
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

TextSelectionIcon.displayName = 'TextSelectionIcon';
export default TextSelectionIcon;
