import React from 'react';
import config from '../config';

interface RotateLeft3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RotateLeft3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rotate-left3)
 * @see {@link https://clicons.dev/icon/rotate-left3}
 */
const RotateLeft3Icon = React.forwardRef<SVGSVGElement, RotateLeft3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.6239 10.4588L7.18 11.2239C6.68968 12.069 6.98066 13.1495 7.82992 13.6374M7.82992 13.6374L8.59878 14.0792M7.82992 13.6374C7.40529 13.3935 6.86231 13.5383 6.61715 13.9608C6.12683 14.8059 6.41781 15.8865 7.26707 16.3744M7.26707 16.3744L8.03593 16.8161M7.26707 16.3744C6.86459 16.1431 6.34979 16.3269 6.18675 16.7599L6.07863 17.0471C5.77412 17.8559 6.10188 18.7652 6.85358 19.1971L7.98598 19.8472C9.65697 20.8072 10.4925 21.2872 11.3046 21.4161C11.7757 21.4908 12.4927 21.3859 13.0281 21.2803C13.4912 21.1889 13.9767 21.2487 14.3855 21.4836L15.2809 21.998M9.16172 11.3421L4.16412 8.47101C3.52717 8.10508 3.30894 7.29463 3.67668 6.66083C4.04442 6.02703 4.85888 5.80987 5.49582 6.1758L13.1556 10.5761L12.6252 8.61856C12.3924 7.75964 12.9623 6.89245 13.8466 6.75981C14.5233 6.65832 15.1846 7.02469 15.4543 7.65053L17.3918 12.4356C17.7625 13.3511 18.639 14.2364 19.498 14.7299'
    }
  ],
  [
    'path',
    {
      d: 'M8.86287 4.96465C9.25977 5.3603 10.9864 5.24616 11.6233 5.16671M8.86287 4.96465C8.46598 4.56901 8.45462 2.63697 8.53431 2.00208M8.86287 4.96465C9.88394 3.19642 13.9435 0.375875 17.9719 3.19642C19.9185 4.55942 20.1932 5.41838 20.5011 5.99381'
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

RotateLeft3Icon.displayName = 'RotateLeft3Icon';
export default RotateLeft3Icon;
