import React from 'react';
import config from '../config';

interface FileMusicIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FileMusicIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/file-music)
 * @see {@link https://clicons.dev/icon/file-music}
 */
const FileMusicIcon = React.forwardRef<SVGSVGElement, FileMusicIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.9995 11.0039C19.9995 11.0039 19.9995 9.43383 19.8473 9.06613C19.695 8.69843 19.406 8.40927 18.8279 7.83096L14.0914 3.09236C13.5925 2.59325 13.3431 2.3437 13.034 2.19583C12.9698 2.16508 12.9039 2.13778 12.8367 2.11406C12.5137 2 12.1609 2 11.4554 2C8.21033 2 6.58782 2 5.48884 2.88646C5.26683 3.06554 5.06459 3.26787 4.88559 3.48998C3.99951 4.58943 3.99951 6.21265 3.99951 9.45908V14.0052C3.99951 17.7781 3.99951 19.6645 5.17108 20.8366C6.11417 21.7801 7.51994 21.9641 9.99951 22M12.9995 2.50022V3.00043C12.9995 5.83009 12.9995 7.24492 13.8782 8.12398C14.7569 9.00304 16.1711 9.00304 18.9995 9.00304H19.4995'
    }
  ],
  [
    'path',
    {
      d: 'M17.3966 19.7446C17.3966 20.9885 16.4123 21.9969 15.198 21.9969C13.9838 21.9969 12.9995 20.9885 12.9995 19.7446C12.9995 18.5007 13.9838 17.4923 15.198 17.4923C16.4123 17.4923 17.3966 18.5007 17.3966 19.7446ZM17.3966 19.7446V14C17.6167 14.4963 18.7036 16.6999 20.0005 16.6999'
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

FileMusicIcon.displayName = 'FileMusicIcon';
export default FileMusicIcon;
