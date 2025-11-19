import React from 'react';
import config from '../config';

interface CameraAddIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CameraAddIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/camera-add)
 * @see {@link https://clicons.dev/icon/camera-add}
 */
const CameraAddIcon = React.forwardRef<SVGSVGElement, CameraAddIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22.0002 8.99998V15C22.0002 17.8284 22.0002 19.2426 21.1215 20.1213C20.2428 21 18.8286 21 16.0002 21H8.00018C5.17176 21 3.75754 21 2.87886 20.1213C2.00018 19.2426 2.00018 17.8284 2.00018 15V11.0537C2.00018 10.0736 2.00018 9.58356 2.1136 9.18288C2.39734 8.18054 3.18074 7.39714 4.18307 7.11341C4.58376 6.99998 5.07379 6.99998 6.05387 6.99998C6.41985 6.99998 6.60284 6.99998 6.77329 6.97027C7.19563 6.89665 7.58313 6.68926 7.87867 6.37869C7.99794 6.25335 8.29718 5.8045 8.50018 5.49998C8.89656 4.90543 9.09474 4.60815 9.36568 4.40365C9.53113 4.27877 9.71499 4.18038 9.91067 4.11198C10.2311 3.99998 10.5884 3.99998 11.303 3.99998H13.0002'
    }
  ],
  [
    'path',
    {
      d: 'M16.0002 13.5C16.0002 15.7091 14.2093 17.5 12.0002 17.5C9.79104 17.5 8.00018 15.7091 8.00018 13.5C8.00018 11.2908 9.79104 9.49998 12.0002 9.49998C14.2093 9.49998 16.0002 11.2908 16.0002 13.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.0002 5.49998H21.0002M18.5002 7.99998V2.99998'
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

CameraAddIcon.displayName = 'CameraAddIcon';
export default CameraAddIcon;
