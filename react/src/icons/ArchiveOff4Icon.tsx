import React from 'react';
import config from '../config';

interface ArchiveOff4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArchiveOff4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/archive-off4)
 * @see {@link https://clicons.dev/icon/archive-off4}
 */
const ArchiveOff4Icon = React.forwardRef<SVGSVGElement, ArchiveOff4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 2L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M21.9239 18C22 17.2261 22 16.2515 22 15V14.1555C22 13.5795 22 13.2915 21.9459 13.0104C21.8917 12.7293 21.7848 12.4619 21.5709 11.9272L19.5087 6.77166C18.778 4.94495 18.4126 4.0316 17.6508 3.5158C16.8889 3 15.9052 3 13.9378 3H10.0622C8.71815 3 7.8332 3 7.16445 3.16445M20.5 20.5613C19.5975 21 18.2438 21 16 21H8C5.17157 21 3.75736 21 2.87868 20.1213C2 19.2426 2 17.8284 2 15V14.1555C2 13.5795 2 13.2915 2.05413 13.0104C2.10826 12.7293 2.21522 12.4619 2.42914 11.9271L4.49134 6.77166C4.74844 6.12889 4.96032 5.59921 5.16014 5.16014'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 13H5.58579C6.16263 13 6.45105 13 6.71982 13.0766C6.86747 13.1187 7.00978 13.1776 7.14394 13.2523C7.38816 13.3882 7.59211 13.5921 8 14C8.40789 14.4079 8.61184 14.6118 8.85606 14.7477C8.99022 14.8224 9.13253 14.8813 9.28018 14.9234C9.54895 15 9.83737 15 10.4142 15H13.5858C14.1626 15 14.4511 15 14.7198 14.9234M17 13H21.5'
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

ArchiveOff4Icon.displayName = 'ArchiveOff4Icon';
export default ArchiveOff4Icon;
