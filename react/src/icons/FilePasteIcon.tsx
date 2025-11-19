import React from 'react';
import config from '../config';

interface FilePasteIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FilePasteIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/file-paste)
 * @see {@link https://clicons.dev/icon/file-paste}
 */
const FilePasteIcon = React.forwardRef<SVGSVGElement, FilePasteIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.99994 10L3.99994 14.5442C3.99994 17.7892 3.99994 19.4117 4.88601 20.5107C5.06502 20.7327 5.26725 20.9349 5.48927 21.1139C6.58825 22 8.21076 22 11.4558 22C12.1613 22 12.5141 22 12.8371 21.886C12.9043 21.8623 12.9702 21.835 13.0345 21.8043C13.3435 21.6564 13.5929 21.407 14.0918 20.9081L18.8284 16.1716C19.4064 15.5935 19.6955 15.3045 19.8477 14.9369C19.9999 14.5694 19.9999 14.1606 19.9999 13.3431V10C19.9999 6.22876 19.9999 4.34315 18.8284 3.17157C17.6568 2 15.7712 2 11.9999 2M12.9999 21.5V21C12.9999 18.1716 12.9999 16.7574 13.8786 15.8787C14.7573 15 16.1715 15 18.9999 15H19.4999'
    }
  ],
  [
    'path',
    {
      d: 'M6.99994 8C6.3931 7.41016 3.99994 5.84027 3.99994 5C3.99994 4.15973 6.3931 2.58984 6.99994 2M4.49994 5H6.99994C8.86917 5 9.80379 5 10.4999 5.40192C10.956 5.66523 11.3347 6.04394 11.598 6.5C11.9999 7.19615 11.9999 8.13077 11.9999 10'
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

FilePasteIcon.displayName = 'FilePasteIcon';
export default FilePasteIcon;
