import React from 'react';
import config from '../config';

interface ImageCounterClockwiseIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ImageCounterClockwiseIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/image-counter-clockwise)
 * @see {@link https://clicons.dev/icon/image-counter-clockwise}
 */
const ImageCounterClockwiseIcon = React.forwardRef<SVGSVGElement, ImageCounterClockwiseIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 7.5H8.4C5.38301 7.5 3.87452 7.5 2.93726 8.41122C2 9.32245 2 10.789 2 13.7222V15.2778C2 18.211 2 19.6776 2.93726 20.5888C3.87452 21.5 5.38301 21.5 8.4 21.5H11.6C14.617 21.5 16.1255 21.5 17.0627 20.5888C18 19.6776 18 18.211 18 15.2778V11.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 17.7857L13.4327 13.7712C13.2576 13.5984 13.0104 13.5 12.7513 13.5C12.5061 13.5 12.271 13.5881 12.0977 13.7449L8.42105 17.0714L6.71522 15.5281C6.54372 15.3729 6.31111 15.2857 6.06857 15.2857C5.80735 15.2857 5.5586 15.3868 5.38506 15.5634L2.5 18.5'
    }
  ],
  [
    'path',
    {
      d: 'M13 7.5C13.9122 6.28555 15.3645 5.5 17.0004 5.5C19.7618 5.5 22.0004 7.73858 22.0004 10.5C22.0004 11.6258 21.6283 12.6647 21.0004 13.5005M13 7.5L14.0004 3.5M13 7.5L16.5004 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.49 11.99V12'
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

ImageCounterClockwiseIcon.displayName = 'ImageCounterClockwiseIcon';
export default ImageCounterClockwiseIcon;
