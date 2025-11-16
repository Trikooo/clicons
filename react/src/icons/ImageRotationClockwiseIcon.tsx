import React from 'react';
import config from '../config';

interface ImageRotationClockwiseIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ImageRotationClockwiseIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/image-rotation-clockwise)
 * @see {@link https://clicons.dev/icon/image-rotation-clockwise}
 */
const ImageRotationClockwiseIcon = React.forwardRef<SVGSVGElement, ImageRotationClockwiseIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 7.5H15.6C18.617 7.5 20.1255 7.5 21.0627 8.41122C22 9.32245 22 10.789 22 13.7222V15.2778C22 18.211 22 19.6776 21.0627 20.5888C20.1255 21.5 18.617 21.5 15.6 21.5H12.4C9.38301 21.5 7.87452 21.5 6.93726 20.5888C6 19.6776 6 18.211 6 15.2778V11.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 17.7857L17.4327 13.7712C17.2576 13.5984 17.0104 13.5 16.7513 13.5C16.5061 13.5 16.271 13.5881 16.0977 13.7449L12.4211 17.0714L10.7152 15.5281C10.5437 15.3729 10.3111 15.2857 10.0686 15.2857C9.80735 15.2857 9.5586 15.3868 9.38506 15.5634L6.5 18.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.0004 7.5C10.0882 6.28555 8.63582 5.5 7 5.5C4.23858 5.5 2 7.73858 2 10.5C2 11.6258 2.37209 12.6647 3 13.5005M11.0004 7.5L10 3.5M11.0004 7.5L7.5 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.49 11.99V12'
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

ImageRotationClockwiseIcon.displayName = 'ImageRotationClockwiseIcon';
export default ImageRotationClockwiseIcon;
