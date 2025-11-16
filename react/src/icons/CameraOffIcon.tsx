import React from 'react';
import config from '../config';

interface CameraOffIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CameraOffIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/camera-off)
 * @see {@link https://clicons.dev/icon/camera-off}
 */
const CameraOffIcon = React.forwardRef<SVGSVGElement, CameraOffIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.71586 9.71484C8.6787 10.4376 8 11.639 8 12.999C8 15.2081 9.79086 16.999 12 16.999C13.36 16.999 14.5614 16.3203 15.2841 15.2831'
    }
  ],
  [
    'path',
    {
      d: 'M19 9.5V9.51'
    }
  ],
  [
    'path',
    {
      d: 'M2 2L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M6.49597 6.49597C6.38143 6.5 6.24171 6.5 6.05369 6.5C5.07361 6.5 4.58357 6.5 4.18289 6.61342C3.18055 6.89716 2.39716 7.68055 2.11342 8.68289C2 9.08357 2 9.57361 2 10.5537V14.5C2 17.3284 2 18.7426 2.87868 19.6213C3.75736 20.5 5.17157 20.5 8 20.5H16C18 20.5 19.2929 20.5 20.1893 20.1893M21.878 17.878C22 17.0498 22 15.9645 22 14.5V10.5537C22 9.57361 22 9.08357 21.8866 8.68289C21.6028 7.68055 20.8194 6.89716 19.8171 6.61342C19.4164 6.5 18.9264 6.5 17.9463 6.5C17.5803 6.5 17.3973 6.5 17.2269 6.47029C16.8046 6.39666 16.417 6.18927 16.1215 5.87871C16.0022 5.75336 15.703 5.30451 15.5 5C15.1036 4.40544 14.9054 4.10816 14.6345 3.90367C14.4691 3.77879 14.2852 3.68039 14.0895 3.612C13.7691 3.5 13.4118 3.5 12.6972 3.5H11.3028C10.5882 3.5 10.2309 3.5 9.91048 3.612C9.7148 3.68039 9.53094 3.77879 9.36549 3.90367C9.14445 4.07051 8.97183 4.2991 8.7005 4.7005'
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

CameraOffIcon.displayName = 'CameraOffIcon';
export default CameraOffIcon;
