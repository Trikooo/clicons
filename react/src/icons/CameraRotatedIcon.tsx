import React from 'react';
import config from '../config';

interface CameraRotatedIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CameraRotatedIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/camera-rotated)
 * @see {@link https://clicons.dev/icon/camera-rotated}
 */
const CameraRotatedIcon = React.forwardRef<SVGSVGElement, CameraRotatedIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.6975 3.5H11.303C10.5885 3.5 10.2312 3.5 9.91073 3.612C9.71505 3.68039 9.53119 3.77879 9.36574 3.90367C9.0948 4.10816 8.89662 4.40544 8.50024 5L8.50023 5.00001C8.29723 5.30453 7.998 5.75337 7.87873 5.87871C7.5832 6.18927 7.19569 6.39666 6.77335 6.47029C6.6029 6.5 6.41991 6.5 6.05393 6.5C5.07386 6.5 4.58382 6.5 4.18314 6.61342C3.1808 6.89716 2.3974 7.68055 2.11367 8.68289C2.00024 9.08357 2.00024 9.57361 2.00024 10.5537V14.5C2.00024 17.3284 2.00024 18.7426 2.87892 19.6213C3.7576 20.5 5.17182 20.5 8.00024 20.5H16.0002C18.8287 20.5 20.2429 20.5 21.1216 19.6213C22.0002 18.7426 22.0002 17.3284 22.0002 14.5V10.5537C22.0002 9.57361 22.0002 9.08357 21.8868 8.68289C21.6031 7.68055 20.8197 6.89716 19.8174 6.61342C19.4167 6.5 18.9266 6.5 17.9466 6.5C17.5806 6.5 17.3976 6.5 17.2271 6.47029C16.8048 6.39666 16.4173 6.18927 16.1218 5.87871C16.0025 5.75336 15.7033 5.30451 15.5002 5C15.1039 4.40544 14.9057 4.10816 14.6348 3.90367C14.4693 3.77879 14.2854 3.68039 14.0898 3.612C13.7693 3.5 13.412 3.5 12.6975 3.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5002 12.5L16.0002 13L17.5002 10.5M14.6461 16C13.9409 16.6224 13.0147 17 12.0002 17C9.7911 17 8.00024 15.2091 8.00024 13C8.00024 10.7909 9.7911 9 12.0002 9C14.0401 9 15.7232 10.5268 15.9693 12.5'
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

CameraRotatedIcon.displayName = 'CameraRotatedIcon';
export default CameraRotatedIcon;
