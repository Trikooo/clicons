import React from 'react';
import config from '../config';

interface FileSecurityIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FileSecurityIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/file-security)
 * @see {@link https://clicons.dev/icon/file-security}
 */
const FileSecurityIcon = React.forwardRef<SVGSVGElement, FileSecurityIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 11.999V10.6559C20 9.83838 20 9.42963 19.8478 9.06208C19.6955 8.69454 19.4065 8.40551 18.8284 7.82745L14.0919 3.09091C13.593 2.59202 13.3436 2.34258 13.0345 2.19477C12.9702 2.16403 12.9044 2.13674 12.8372 2.11303C12.5141 1.99902 12.1614 1.99902 11.4558 1.99902C8.21082 1.99902 6.58831 1.99902 5.48933 2.8851C5.26731 3.0641 5.06508 3.26634 4.88607 3.48835C4 4.58733 4 6.20984 4 9.45487V13.999C4 17.7703 4 19.6559 5.17157 20.8274C6.34315 21.999 8.22876 21.999 12 21.999M13 2.49902V2.99902C13 5.82745 13 7.24166 13.8787 8.12034C14.7574 8.99902 16.1716 8.99902 19 8.99902H19.5'
    }
  ],
  [
    'path',
    {
      d: 'M20 17.6214V15.6503C20 15.3403 19.7723 15.083 19.477 15.0302C18.2869 14.8174 17.299 14.3441 16.817 14.0816C16.6197 13.9741 16.3803 13.9741 16.183 14.0816C15.701 14.3441 14.7131 14.8174 13.523 15.0302C13.2277 15.083 13 15.3403 13 15.6503V17.6214C13 20.1928 15.5424 21.5953 16.2935 21.9536C16.426 22.0168 16.574 22.0168 16.7065 21.9536C17.4576 21.5953 20 20.1928 20 17.6214Z'
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

FileSecurityIcon.displayName = 'FileSecurityIcon';
export default FileSecurityIcon;
