import React from 'react';
import config from '../config';

interface BulletIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BulletIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bullet)
 * @see {@link https://clicons.dev/icon/bullet}
 */
const BulletIcon = React.forwardRef<SVGSVGElement, BulletIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.6664 9.66667C19.4373 7.89583 20.4998 4 20.4998 4C20.4998 4 16.6039 5.0625 14.8331 6.83333M17.6664 9.66667L14.8331 6.83333M17.6664 9.66667L16.2498 11.7917M14.8331 6.83333L12.7081 8.25M16.2498 11.7917L12.7081 8.25M16.2498 11.7917L9.87476 18.1667C9.28795 18.7535 8.33656 18.7535 7.74976 18.1667M12.7081 8.25L6.33309 14.625C5.74629 15.2118 5.74629 16.1632 6.33309 16.75M7.74976 18.1667L6.33309 16.75M7.74976 18.1667C8.33656 18.7535 8.33656 19.7049 7.74976 20.2917L7.04142 21L3.49976 17.4583L4.20809 16.75C4.79489 16.1632 5.74629 16.1632 6.33309 16.75'
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

BulletIcon.displayName = 'BulletIcon';
export default BulletIcon;
