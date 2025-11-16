import React from 'react';
import config from '../config';

interface ContentWritingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ContentWritingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/content-writing)
 * @see {@link https://clicons.dev/icon/content-writing}
 */
const ContentWritingIcon = React.forwardRef<SVGSVGElement, ContentWritingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 19.5C6.22876 19.5 4.34315 19.5 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H13.5C16.7875 2.5 18.4312 2.5 19.5376 3.40796C19.7401 3.57418 19.9258 3.75989 20.092 3.96243C21 5.06878 21 6.71252 21 10'
    }
  ],
  [
    'path',
    {
      d: 'M2 8.5H21'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 5.5H5.50998M9.49002 5.5H9.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.6716 21.5H13V19.8284C13 19.298 13.2107 18.7893 13.5858 18.4142L19.0616 12.9393C19.6474 12.3536 20.5972 12.3536 21.183 12.9393L21.5616 13.318C22.1474 13.9038 22.1474 14.8536 21.5616 15.4393L16.0858 20.9142C15.7107 21.2893 15.202 21.5 14.6716 21.5Z'
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

ContentWritingIcon.displayName = 'ContentWritingIcon';
export default ContentWritingIcon;
