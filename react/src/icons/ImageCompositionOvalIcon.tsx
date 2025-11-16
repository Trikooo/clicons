import React from 'react';
import config from '../config';

interface ImageCompositionOvalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ImageCompositionOvalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/image-composition-oval)
 * @see {@link https://clicons.dev/icon/image-composition-oval}
 */
const ImageCompositionOvalIcon = React.forwardRef<SVGSVGElement, ImageCompositionOvalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.0518 4.06314C14.0896 2.64561 9.91046 2.64563 5.94823 4.06315C4.28902 4.65674 3.45942 4.95354 2.72971 5.9896C2 7.02566 2 8.1524 2 10.4059V13.5941C2 15.8476 2 16.9743 2.72971 18.0104C3.45942 19.0465 4.28902 19.3433 5.94823 19.9369C9.91046 21.3544 14.0896 21.3544 18.0518 19.9369C19.711 19.3433 20.5406 19.0465 21.2703 18.0104C22 16.9744 22 15.8476 22 13.5942V10.4058C22 8.15236 22 7.02564 21.2703 5.98958C20.5406 4.95352 19.711 4.65673 18.0518 4.06314Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 15.5L7.46967 10.5303C7.80923 10.1908 8.26978 10 8.75 10C9.23022 10 9.69077 10.1908 10.0303 10.5303L14 14.5M15.5 16L14 14.5M21.5 15.5L18.5303 12.5303C18.1908 12.1908 17.7302 12 17.25 12C16.7698 12 16.3092 12.1908 15.9697 12.5303L14 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 8C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7M14.5 8C14.2239 8 14 7.77614 14 7.5C14 7.22386 14.2239 7 14.5 7M14.5 8V7'
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

ImageCompositionOvalIcon.displayName = 'ImageCompositionOvalIcon';
export default ImageCompositionOvalIcon;
