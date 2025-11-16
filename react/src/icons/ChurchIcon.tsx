import React from 'react';
import config from '../config';

interface ChurchIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChurchIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/church)
 * @see {@link https://clicons.dev/icon/church}
 */
const ChurchIcon = React.forwardRef<SVGSVGElement, ChurchIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 2V6M14 4L10 4'
    }
  ],
  [
    'path',
    {
      d: 'M8.50122 8.79902L12 6L15.4988 8.79902C16.7171 9.77367 17 10.3623 17 11.9225V22H7V11.9225C7 10.3623 7.28291 9.77367 8.50122 8.79902Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 12L18.7889 12.8944C19.8647 13.4323 20.4026 13.7013 20.7013 14.1846C21 14.6679 21 15.2693 21 16.4721V20C21 20.9428 21 21.4142 20.7071 21.7071C20.4142 22 19.9428 22 19 22H17'
    }
  ],
  [
    'path',
    {
      d: 'M7 12L5.21114 12.8944C4.13531 13.4323 3.5974 13.7013 3.2987 14.1846C3 14.6679 3 15.2693 3 16.4721V20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H7'
    }
  ],
  [
    'path',
    {
      d: 'M10 22V18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V22'
    }
  ],
  [
    'path',
    {
      d: 'M12.008 11L11.999 11'
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

ChurchIcon.displayName = 'ChurchIcon';
export default ChurchIcon;
